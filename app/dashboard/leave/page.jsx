
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
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function LeavePage() {
  const [requests, setRequests] = useState([]);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    type: "Annual leave",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.endDate < form.startDate) {
      setMessage("The end date cannot be earlier than the start date.");
      return;
    }

    setRequests((current) => [
      { ...form, id: crypto.randomUUID(), status: "Pending" },
      ...current,
    ]);
    setForm({ type: "Annual leave", startDate: "", endDate: "", reason: "" });
    setMessage("Leave request added locally. It has not been sent to a manager.");
  };

  return (
    <Box>
      <DashboardHeader
        title="Leave Management"
        description="Submit time-off requests and review their status."
      />

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1fr) minmax(0, 1fr)" }, gap: 3 }}>
        <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: "1px solid #E5ECF5" }}>
          <Stack direction="row" gap={1.5} alignItems="center" mb={3}>
            <Box sx={{ p: 1.3, borderRadius: 3, bgcolor: "#F1EAFE", color: "#7951C8", display: "grid", placeItems: "center" }}>
              <EventAvailableRoundedIcon />
            </Box>
            <Typography fontWeight={800} color="#183454">Request time off</Typography>
          </Stack>

          {message && <Alert severity={message.startsWith("The end date") ? "error" : "info"} sx={{ mb: 2 }}>{message}</Alert>}

          <Box component="form" onSubmit={handleSubmit}>
            <Stack gap={2}>
              <TextField select label="Leave type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} fullWidth>
                {["Annual leave", "Sick leave", "Personal leave", "Unpaid leave", "Other"].map((type) => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                ))}
              </TextField>
              <TextField label="Start date" type="date" required value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} slotProps={{ inputLabel: { shrink: true } }} />
              <TextField label="End date" type="date" required value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} slotProps={{ inputLabel: { shrink: true } }} />
              <TextField label="Reason" multiline minRows={3} required value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })} />
              <Button type="submit" variant="contained" sx={{ textTransform: "none", py: 1.2 }}>Submit request</Button>
            </Stack>
          </Box>
        </Paper>

        <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: "1px solid #E5ECF5" }}>
          <Typography fontWeight={800} color="#183454" mb={0.5}>Your requests</Typography>
          <Typography fontSize={13} color="#77869D" mb={3}>
            {requests.length} request{requests.length === 1 ? "" : "s"} created in this session
          </Typography>

          {requests.length === 0 ? (
            <Box sx={{ py: 5, textAlign: "center" }}>
              <Typography fontWeight={700} color="#526780">No leave requests yet</Typography>
              <Typography fontSize={13} color="#77869D" mt={1}>Your submitted requests will appear here.</Typography>
            </Box>
          ) : (
            <Stack gap={2}>
              {requests.map((request) => (
                <Box key={request.id} sx={{ p: 2, border: "1px solid #EDF1F7", borderRadius: 3 }}>
                  <Stack direction="row" justifyContent="space-between" gap={1} alignItems="center">
                    <Typography fontWeight={700} color="#183454">{request.type}</Typography>
                    <Chip label={request.status} size="small" color="warning" />
                  </Stack>
                  <Typography fontSize={12} color="#77869D" mt={1}>
                    {request.startDate} — {request.endDate}
                  </Typography>
                  <Typography fontSize={13} color="#526780" mt={1}>{request.reason}</Typography>
                </Box>
              ))}
            </Stack>
          )}
        </Paper>
      </Box>
    </Box>
  );
}
