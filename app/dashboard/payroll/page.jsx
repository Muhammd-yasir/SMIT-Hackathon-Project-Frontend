
"use client";

import { Box, Paper, Typography, Button, TextField, Stack, MenuItem } from "@mui/material";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import ModuleEmptyState from "@/components/dashboard/ModuleEmptyState";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function PayrollPage() {
  return (
    <Box>
      <DashboardHeader
        title="Payroll Lite"
        description="Organize payroll periods, salary calculations, and employee payslips."
      />

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "minmax(0,0.9fr) minmax(0,1.1fr)" }, gap: 3 }}>
        <Paper elevation={0} sx={{ p: { xs: 2.5, sm: 3 }, borderRadius: 4, border: "1px solid #E5ECF5" }}>
          <Stack direction="row" gap={1.5} alignItems="center" mb={3}>
            <Box sx={{ p: 1.3, borderRadius: 3, bgcolor: "#E5F6FF", color: "#147FA7", display: "grid", placeItems: "center" }}>
              <PaymentsRoundedIcon />
            </Box>
            <Box>
              <Typography fontWeight={850} color="#183454">Payroll preparation</Typography>
              <Typography fontSize={12} color="#77869D">Select a pay period and employee</Typography>
            </Box>
          </Stack>

          <Stack gap={2}>
            <TextField select label="Payroll period" defaultValue="" fullWidth>
              <MenuItem value="monthly">Monthly</MenuItem>
              <MenuItem value="biweekly">Biweekly</MenuItem>
            </TextField>
            <TextField label="Pay period" type="month" fullWidth slotProps={{ inputLabel: { shrink: true } }} />
            <TextField label="Employee ID or email" fullWidth />
            <TextField label="Basic salary (PKR)" type="number" fullWidth slotProps={{ htmlInput: { min: 0 } }} />
            <TextField label="Allowances (PKR)" type="number" fullWidth slotProps={{ htmlInput: { min: 0 } }} />
            <TextField label="Deductions (PKR)" type="number" fullWidth slotProps={{ htmlInput: { min: 0 } }} />
            <Button disabled variant="contained" sx={{ py: 1.2, borderRadius: 2.5, textTransform: "none" }}>
              Calculate payroll
            </Button>
          </Stack>
        </Paper>

        <Paper elevation={0} sx={{ p: { xs: 2.5, sm: 3 }, borderRadius: 4, border: "1px solid #E5ECF5" }}>
          <Stack direction="row" alignItems="center" gap={1.5} mb={3}>
            <Box sx={{ p: 1.3, borderRadius: 3, bgcolor: "#EAF1FF", color: "#245BC0", display: "grid", placeItems: "center" }}>
              <ReceiptLongRoundedIcon />
            </Box>
            <Box>
              <Typography fontWeight={850} color="#183454">Payroll records</Typography>
              <Typography fontSize={12} color="#77869D">Payroll runs and payslip history</Typography>
            </Box>
          </Stack>
          <ModuleEmptyState
            icon={ReceiptLongRoundedIcon}
            title="No payroll records"
            description="Payroll periods, calculated salaries, and issued payslips will be listed here when records exist."
          />
        </Paper>
      </Box>
    </Box>
  );
}
