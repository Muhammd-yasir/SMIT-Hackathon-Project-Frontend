
"use client";

import { Box, Paper, Typography, Button, TextField, Stack, MenuItem } from "@mui/material";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import ModuleEmptyState from "@/components/dashboard/ModuleEmptyState";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function CommunicationsPage() {
  return (
    <Box>
      <DashboardHeader
        title="Communications"
        description="Create workplace announcements and keep important team updates organized."
      />

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "minmax(0,0.9fr) minmax(0,1.1fr)" }, gap: 3 }}>
        <Paper elevation={0} sx={{ p: { xs: 2.5, sm: 3 }, borderRadius: 4, border: "1px solid #E5ECF5" }}>
          <Stack direction="row" gap={1.5} alignItems="center" mb={3}>
            <Box sx={{ p: 1.3, borderRadius: 3, bgcolor: "#FFECEF", color: "#C44E71", display: "grid", placeItems: "center" }}>
              <CampaignRoundedIcon />
            </Box>
            <Box>
              <Typography fontWeight={850} color="#183454">New announcement</Typography>
              <Typography fontSize={12} color="#77869D">Prepare a message for your audience</Typography>
            </Box>
          </Stack>

          <Stack gap={2}>
            <TextField label="Announcement title" fullWidth />
            <TextField select label="Audience" defaultValue="All employees" fullWidth>
              {["All employees", "HR team", "Managers", "Administrators"].map((item) => (
                <MenuItem key={item} value={item}>{item}</MenuItem>
              ))}
            </TextField>
            <TextField label="Message" multiline minRows={5} fullWidth />
            <Button disabled variant="contained" startIcon={<SendRoundedIcon />} sx={{ py: 1.2, borderRadius: 2.5, textTransform: "none" }}>
              Publish announcement
            </Button>
          </Stack>
        </Paper>

        <Paper elevation={0} sx={{ p: { xs: 2.5, sm: 3 }, borderRadius: 4, border: "1px solid #E5ECF5" }}>
          <Stack direction="row" gap={1.5} alignItems="center" mb={3}>
            <Box sx={{ p: 1.3, borderRadius: 3, bgcolor: "#EAF1FF", color: "#245BC0", display: "grid", placeItems: "center" }}>
              <NotificationsActiveRoundedIcon />
            </Box>
            <Box>
              <Typography fontWeight={850} color="#183454">Announcements</Typography>
              <Typography fontSize={12} color="#77869D">Workplace news and updates</Typography>
            </Box>
          </Stack>
          <ModuleEmptyState
            icon={CampaignRoundedIcon}
            title="No announcements"
            description="Published workplace updates will appear here with their audience and publication details."
          />
        </Paper>
      </Box>
    </Box>
  );
}
