
"use client";

import { Box, Paper, Typography, Button, Stack, Chip } from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import ModuleEmptyState from "@/components/dashboard/ModuleEmptyState";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

const cardSx = {
  p: 2.5,
  borderRadius: 3.5,
  border: "1px solid #E5ECF5",
  boxShadow: "none",
  flex: 1,
};

export default function AttendancePage() {
  return (
    <Box>
      <DashboardHeader
        title="Attendance"
        description="Keep daily attendance and working hours organized in one place."
      />

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3,minmax(0,1fr))" }, gap: 2, mb: 3 }}>
        {[
          { label: "Check-in", value: "—", detail: "Today's start time", icon: LoginRoundedIcon, tint: "#E5F8F1", color: "#168765" },
          { label: "Check-out", value: "—", detail: "Today's finish time", icon: LogoutRoundedIcon, tint: "#FFF3E4", color: "#C57919" },
          { label: "Working hours", value: "—", detail: "Daily duration", icon: AccessTimeRoundedIcon, tint: "#EAF1FF", color: "#245BC0" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <Paper key={item.label} sx={cardSx}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography fontSize={13} color="#77869D">{item.label}</Typography>
                <Box sx={{ p: 1, borderRadius: 2.5, bgcolor: item.tint, color: item.color, display: "grid", placeItems: "center" }}>
                  <Icon fontSize="small" />
                </Box>
              </Stack>
              <Typography fontSize={29} fontWeight={850} color="#183454" mt={2}>{item.value}</Typography>
              <Typography fontSize={12} color="#77869D" mt={0.5}>{item.detail}</Typography>
            </Paper>
          );
        })}
      </Box>

      <Paper elevation={0} sx={{ p: { xs: 2.5, sm: 3 }, borderRadius: 4, border: "1px solid #E5ECF5", mb: 3 }}>
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "center" }} gap={2}>
          <Stack direction="row" alignItems="center" gap={1.5}>
            <Box sx={{ p: 1.3, borderRadius: 3, bgcolor: "#EAF1FF", color: "#245BC0", display: "grid", placeItems: "center" }}>
              <CalendarMonthRoundedIcon />
            </Box>
            <Box>
              <Typography fontWeight={850} color="#183454">Daily attendance</Typography>
              <Typography fontSize={12} color="#77869D">Check-in and check-out controls</Typography>
            </Box>
          </Stack>
          <Chip label="No active attendance record" variant="outlined" sx={{ borderColor: "#DCE5F2", color: "#71829A" }} />
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} gap={1.5} mt={3}>
          <Button disabled variant="contained" startIcon={<LoginRoundedIcon />} sx={{ textTransform: "none", py: 1.2 }}>
            Check in
          </Button>
          <Button disabled variant="outlined" startIcon={<LogoutRoundedIcon />} sx={{ textTransform: "none", py: 1.2 }}>
            Check out
          </Button>
        </Stack>
      </Paper>

      <Paper elevation={0} sx={{ p: 2.5, borderRadius: 4, border: "1px solid #E5ECF5" }}>
        <Typography fontWeight={850} color="#183454" mb={2}>Attendance history</Typography>
        <ModuleEmptyState
          icon={AccessTimeRoundedIcon}
          title="No attendance records"
          description="Daily records will appear here with check-in times, check-out times, and total working hours."
        />
      </Paper>
    </Box>
  );
}
