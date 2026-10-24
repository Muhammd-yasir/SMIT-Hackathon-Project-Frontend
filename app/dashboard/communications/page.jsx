
"use client";

import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function CommunicationsPage() {
  const [announcements, setAnnouncements] = useState([]);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    title: "",
    audience: "All employees",
    body: "",
  });

  const handlePublish = (event) => {
    event.preventDefault();

    setAnnouncements((current) => [
      {
        ...form,
        id: crypto.randomUUID(),
        createdAt: new Date().toLocaleString(),
      },
      ...current,
    ]);

    setForm({ title: "", audience: "All employees", body: "" });
    setMessage("Announcement added to this page's local list.");
  };

  return (
    <Box>
      <DashboardHeader
        title="Communications"
        description="Create clear workplace announcements and keep important messages organized."
      />

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 0.9fr) minmax(0, 1.1fr)" }, gap: 3 }}>
        <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: "1px solid #E5ECF5", alignSelf: "start" }}>
          <Stack direction="row" gap={1.5} alignItems="center" mb={3}>
            <Box sx={{ p: 1.3, borderRadius: 3, bgcolor: "#FFECEF", color: "#C44E71", display: "grid", placeItems: "center" }}>
              <CampaignRoundedIcon />
            </Box>
            <Typography fontWeight={800} color="#183454">Create announcement</Typography>
          </Stack>

          {message && <Alert severity="success" sx={{ mb: 2 }}>{message}</Alert>}

          <Box component="form" onSubmit={handlePublish}>
            <Stack gap={2}>
              <TextField
                label="Announcement title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
                fullWidth
              />
              <TextField
                select
                label="Audience"
                value={form.audience}
                onChange={(e) => setForm({ ...form, audience: e.target.value })}
                fullWidth
              >
                {["All employees", "HR team", "Managers", "Administrators"].map((audience) => (
                  <MenuItem key={audience} value={audience}>{audience}</MenuItem>
                ))}
              </TextField>
              <TextField
                label="Message"
                multiline
                minRows={5}
                value={form.body}
                onChange={(e) => setForm({ ...form, body: e.target.value })}
                required
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                startIcon={<SendRoundedIcon />}
                sx={{ textTransform: "none", py: 1.2 }}
              >
                Publish announcement
              </Button>
            </Stack>
          </Box>
        </Paper>

        <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: "1px solid #E5ECF5" }}>
          <Typography fontWeight={800} color="#183454">Announcements</Typography>
          <Typography fontSize={13} color="#77869D" mt={0.5} mb={3}>
            {announcements.length} announcement{announcements.length === 1 ? "" : "s"} in this session
          </Typography>

          {announcements.length === 0 ? (
            <Box sx={{ py: 6, textAlign: "center", bgcolor: "#F7F9FD", borderRadius: 3 }}>
              <CampaignRoundedIcon sx={{ fontSize: 38, color: "#A0AEC0", mb: 1 }} />
              <Typography fontWeight={700} color="#526780">Nothing published yet</Typography>
              <Typography fontSize={13} color="#77869D" mt={1}>
                Your announcements will appear here after you publish them.
              </Typography>
            </Box>
          ) : (
            <Stack gap={2}>
              {announcements.map((announcement) => (
                <Box key={announcement.id} sx={{ p: 2.5, border: "1px solid #EDF1F7", borderRadius: 3 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" gap={1} mb={1}>
                    <Typography fontWeight={800} color="#183454">{announcement.title}</Typography>
                    <Chip size="small" label={announcement.audience} />
                  </Stack>
                  <Typography fontSize={13} lineHeight={1.9} color="#526780" sx={{ whiteSpace: "pre-wrap" }}>
                    {announcement.body}
                  </Typography>
                  <Typography fontSize={11} color="#8A98AC" mt={2}>{announcement.createdAt}</Typography>
                </Box>
              ))}
            </Stack>
          )}
        </Paper>
      </Box>
    </Box>
  );
}
