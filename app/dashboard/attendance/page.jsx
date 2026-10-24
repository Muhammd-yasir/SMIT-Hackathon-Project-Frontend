
"use client";

import { Box, Paper, Typography, Stack, Button, Chip, Grid } from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import ModuleEmptyState from "@/components/dashboard/ModuleEmptyState";

function SummaryCard({ title, value, icon: Icon, caption }) {
  return (
    <Paper sx={{ p: 2.5, borderRadius: 3, border: "1px solid #E5EBF4", height: "100%" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={13} color="text.secondary">{title}</Typography>
        <Box sx={{ p: 1, bgcolor: "#EAF1FF", color: "#245BC0", borderRadius: 2 }}><Icon fontSize="small" /></Box>
      </Stack>
      <Typography variant="h4" fontWeight={800} color="#173354" mt={2}>{value}</Typography>
      <Typography fontSize={12} color="text.secondary" mt={1}>{caption}</Typography>
    </Paper>
  );
}

export default function AttendancePage() {
  return (
    <Box sx={{ maxWidth: 1100, mx: "auto" }}>
      <Typography variant="h5" fontWeight={800} color="#173354">Attendance</Typography>
      <Typography color="text.secondary" fontSize={14} mt={.5} mb={3}>
        Review attendance and manage daily check-in and check-out.
      </Typography>

      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={4}><SummaryCard title="Current status" value="—" icon={AccessTimeRoundedIcon} caption="No active attendance record" /></Grid>
        <Grid item xs={12} sm={4}><SummaryCard title="Check-in time" value="—" icon={LoginRoundedIcon} caption="No check-in recorded" /></Grid>
        <Grid item xs={12} sm={4}><SummaryCard title="Check-out time" value="—" icon={LogoutRoundedIcon} caption="No check-out recorded" /></Grid>
      </Grid>

      <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 3, borderRadius: 4, border: "1px solid #E5EBF4" }}>
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ sm: "center" }} gap={2}>
          <Box>
            <Typography fontWeight={800} color="#173354">Today’s attendance</Typography>
            <Typography fontSize={13} color="text.secondary" mt={.5}>Your attendance status will appear here.</Typography>
          </Box>
          <Chip label="No active record" sx={{ bgcolor: "#F1F5F9", color: "#64748B", fontWeight: 700 }} />
        </Stack>
        <Stack direction="row" gap={1.5} mt={3}>
          <Button disabled variant="contained" startIcon={<LoginRoundedIcon />} sx={{ borderRadius: 2, textTransform: "none" }}>Check in</Button>
          <Button disabled variant="outlined" startIcon={<LogoutRoundedIcon />} sx={{ borderRadius: 2, textTransform: "none" }}>Check out</Button>
        </Stack>
        <Typography fontSize={12} color="text.secondary" mt={1.5}>Attendance actions will be enabled when the backend is connected.</Typography>
      </Paper>

      <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4, border: "1px solid #E5EBF4" }}>
        <Stack direction="row" alignItems="center" gap={1} mb={3}>
          <HistoryRoundedIcon sx={{ color: "#245BC0" }} />
          <Typography fontWeight={800} color="#173354">Attendance history</Typography>
        </Stack>
        <ModuleEmptyState title="No attendance history available" description="Attendance records will appear here when the system has saved records to display." />
      </Paper>
    </Box>
  );
}
