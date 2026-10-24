
"use client";

import { Box, Paper, Typography, Button, TextField, Stack, MenuItem, Chip } from "@mui/material";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import ModuleEmptyState from "@/components/dashboard/ModuleEmptyState";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function LeavePage() {
  return (
    <Box>
      <DashboardHeader
        title="Leave Management"
        description="Organize time-off requests, leave categories, and approval workflows."
      />

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "minmax(0,0.9fr) minmax(0,1.1fr)" }, gap: 3 }}>
        <Paper elevation={0} sx={{ p: { xs: 2.5, sm: 3 }, borderRadius: 4, border: "1px solid #E5ECF5" }}>
          <Stack direction="row" gap={1.5} alignItems="center" mb={3}>
            <Box sx={{ p: 1.3, borderRadius: 3, bgcolor: "#F1EAFE", color: "#7951C8", display: "grid", placeItems: "center" }}>
              <EventAvailableRoundedIcon />
            </Box>
            <Box>
              <Typography fontWeight={850} color="#183454">Leave request</Typography>
              <Typography fontSize={12} color="#77869D">Request time away from work</Typography>
            </Box>
          </Stack>

          <Box component="form" onSubmit={(e) => e.preventDefault()}>
            <Stack gap={2}>
              <TextField select label="Leave type" defaultValue="" required fullWidth>
                {["Annual leave", "Sick leave", "Personal leave", "Unpaid leave", "Other"].map((item) => (
                  <MenuItem key={item} value={item}>{item}</MenuItem>
                ))}
              </TextField>
              <TextField label="Start date" type="date" required fullWidth slotProps={{ inputLabel: { shrink: true } }} />
              <TextField label="End date" type="date" required fullWidth slotProps={{ inputLabel: { shrink: true } }} />
              <TextField label="Reason for leave" multiline minRows={3} required fullWidth />
              <Button type="button" variant="contained" sx={{ py: 1.2, borderRadius: 2.5, textTransform: "none" }}>
                Submit request
              </Button>
            </Stack>
          </Box>
        </Paper>

        <Paper elevation={0} sx={{ p: { xs: 2.5, sm: 3 }, borderRadius: 4, border: "1px solid #E5ECF5" }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1} mb={3}>
            <Box>
              <Typography fontWeight={850} color="#183454">Leave overview</Typography>
              <Typography fontSize={12} color="#77869D" mt={0.5}>Request history and approvals</Typography>
            </Box>
            <Chip label="All requests" variant="outlined" sx={{ borderColor: "#DCE5F2" }} />
          </Stack>

          <ModuleEmptyState
            icon={CalendarMonthRoundedIcon}
            title="No leave requests"
            description="Submitted requests will be listed here with their dates, leave type, and approval status."
          />
        </Paper>
      </Box>
    </Box>
  );
}
