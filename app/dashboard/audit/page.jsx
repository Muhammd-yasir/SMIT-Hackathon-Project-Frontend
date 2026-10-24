
"use client";

import { Box, Paper, Typography, Stack, TextField, MenuItem, Chip } from "@mui/material";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ModuleEmptyState from "@/components/dashboard/ModuleEmptyState";

export default function AuditPage() {
  return (
    <Box>
      <DashboardHeader
        title="Audit Log"
        description="Maintain visibility into important actions and changes across your HCM workspace."
      />

      <Paper elevation={0} sx={{ p: { xs: 2.5, sm: 3 }, borderRadius: 4, border: "1px solid #E5ECF5" }}>
        <Stack direction={{ xs: "column", sm: "row" }} alignItems={{ xs: "stretch", sm: "center" }} justifyContent="space-between" gap={2} mb={3}>
          <Stack direction="row" alignItems="center" gap={1.5}>
            <Box sx={{ p: 1.3, borderRadius: 3, bgcolor: "#E8F5F9", color: "#237B91", display: "grid", placeItems: "center" }}>
              <FactCheckRoundedIcon />
            </Box>
            <Box>
              <Typography fontWeight={850} color="#183454">Activity history</Typography>
              <Typography fontSize={12} color="#77869D">System events and user actions</Typography>
            </Box>
          </Stack>

          <Stack direction="row" gap={1} alignItems="center">
            <TextField select size="small" label="Category" defaultValue="all" sx={{ minWidth: 170 }}>
              <MenuItem value="all">All categories</MenuItem>
              <MenuItem value="authentication">Authentication</MenuItem>
              <MenuItem value="employees">Employees</MenuItem>
              <MenuItem value="attendance">Attendance</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
              <MenuItem value="payroll">Payroll</MenuItem>
            </TextField>
            <Chip icon={<SecurityRoundedIcon />} label="Audit" variant="outlined" sx={{ borderColor: "#DCE5F2", color: "#526780" }} />
          </Stack>
        </Stack>

        <ModuleEmptyState
          icon={FactCheckRoundedIcon}
          title="No activity recorded"
          description="Recorded sign-ins, employee changes, attendance actions, leave decisions, and payroll events will be displayed here."
        />
      </Paper>
    </Box>
  );
}
