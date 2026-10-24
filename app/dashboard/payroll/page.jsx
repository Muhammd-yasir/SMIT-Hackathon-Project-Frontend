
"use client";

import { Box, Paper, Typography, Stack, TextField, Button, Grid } from "@mui/material";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";
import ModuleEmptyState from "@/components/dashboard/ModuleEmptyState";

export default function PayrollPage() {
  return (
    <Box sx={{ maxWidth: 1100, mx: "auto" }}>
      <Typography variant="h5" fontWeight={800} color="#173354">Payroll Lite</Typography>
      <Typography color="text.secondary" fontSize={14} mt={.5} mb={3}>
        Prepare payroll details and review payroll records.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4, border: "1px solid #E5EBF4" }}>
            <Stack direction="row" alignItems="center" gap={1} mb={.5}>
              <CalculateRoundedIcon sx={{ color: "#245BC0" }} />
              <Typography fontWeight={800} color="#173354">Payroll calculation</Typography>
            </Stack>
            <Typography fontSize={13} color="text.secondary" mb={3}>Enter payroll inputs for a pay period.</Typography>

            <Stack spacing={2}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}><TextField label="Pay period" type="month" InputLabelProps={{ shrink: true }} fullWidth /></Grid>
                <Grid item xs={12} sm={6}><TextField label="Employee ID" fullWidth placeholder="Enter employee ID" /></Grid>
              </Grid>
              <TextField label="Basic salary" type="number" fullWidth />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}><TextField label="Allowances" type="number" fullWidth /></Grid>
                <Grid item xs={12} sm={6}><TextField label="Deductions" type="number" fullWidth /></Grid>
              </Grid>
              <Button disabled variant="contained" startIcon={<CalculateRoundedIcon />} sx={{ alignSelf: "flex-start", borderRadius: 2, py: 1.2, textTransform: "none", fontWeight: 700 }}>
                Calculate payroll
              </Button>
              <Typography fontSize={12} color="text.secondary">Calculation and payroll saving will be connected to the backend.</Typography>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4, border: "1px solid #E5EBF4", height: "100%" }}>
            <Stack direction="row" alignItems="center" gap={1} mb={3}>
              <PaymentsRoundedIcon sx={{ color: "#245BC0" }} />
              <Typography fontWeight={800} color="#173354">Payroll records</Typography>
            </Stack>
            <ModuleEmptyState title="No payroll records yet" description="Saved payroll runs will appear here after payroll processing is implemented." />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
