
"use client";

import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function PayrollPage() {
  const [form, setForm] = useState({
    employeeName: "",
    month: "",
    basicSalary: "",
    allowances: "",
    deductions: "",
  });
  const [payroll, setPayroll] = useState(null);
  const [message, setMessage] = useState("");

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setPayroll(null);
    setMessage("");
  };

  const handleCalculate = (event) => {
    event.preventDefault();

    const basic = Number(form.basicSalary);
    const allowances = Number(form.allowances || 0);
    const deductions = Number(form.deductions || 0);

    if (basic < 0 || allowances < 0 || deductions < 0) {
      setMessage("Amounts cannot be negative.");
      return;
    }

    const gross = basic + allowances;

    setPayroll({
      employeeName: form.employeeName,
      month: form.month,
      gross,
      deductions,
      net: gross - deductions,
    });
  };

  const money = (amount) =>
    new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      maximumFractionDigits: 2,
    }).format(amount);

  return (
    <Box>
      <DashboardHeader
        title="Payroll Lite"
        description="Prepare a basic salary calculation for an employee and pay period."
      />

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1.1fr) minmax(0, 0.9fr)" }, gap: 3 }}>
        <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: "1px solid #E5ECF5" }}>
          <Stack direction="row" alignItems="center" gap={1.5} mb={3}>
            <Box sx={{ p: 1.3, bgcolor: "#E5F6FF", color: "#147FA7", borderRadius: 3, display: "grid", placeItems: "center" }}>
              <PaymentsRoundedIcon />
            </Box>
            <Typography fontWeight={800} color="#183454">Salary calculation</Typography>
          </Stack>

          {message && <Alert severity="error" sx={{ mb: 2 }}>{message}</Alert>}

          <Box component="form" onSubmit={handleCalculate}>
            <Stack gap={2}>
              <TextField label="Employee name" name="employeeName" value={form.employeeName} onChange={updateField} required fullWidth />
              <TextField label="Payroll month" name="month" type="month" value={form.month} onChange={updateField} required fullWidth slotProps={{ inputLabel: { shrink: true } }} />
              <TextField label="Basic salary (PKR)" name="basicSalary" type="number" value={form.basicSalary} onChange={updateField} required fullWidth slotProps={{ htmlInput: { min: 0, step: "0.01" } }} />
              <TextField label="Allowances (PKR)" name="allowances" type="number" value={form.allowances} onChange={updateField} fullWidth slotProps={{ htmlInput: { min: 0, step: "0.01" } }} />
              <TextField label="Deductions (PKR)" name="deductions" type="number" value={form.deductions} onChange={updateField} fullWidth slotProps={{ htmlInput: { min: 0, step: "0.01" } }} />
              <Button type="submit" variant="contained" startIcon={<CalculateRoundedIcon />} sx={{ textTransform: "none", py: 1.2 }}>
                Calculate payroll
              </Button>
            </Stack>
          </Box>
        </Paper>

        <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: "1px solid #E5ECF5", alignSelf: "start" }}>
          <Typography fontWeight={800} color="#183454" mb={0.5}>Calculation summary</Typography>
          <Typography fontSize={13} color="#77869D" mb={3}>Your calculation will appear here.</Typography>

          {payroll ? (
            <Stack gap={2}>
              <Box>
                <Typography fontSize={12} color="#77869D">Employee</Typography>
                <Typography fontWeight={700} color="#183454">{payroll.employeeName}</Typography>
                <Typography fontSize={12} color="#77869D">{payroll.month}</Typography>
              </Box>
              {[
                ["Basic + allowances", payroll.gross - (Number(form.allowances || 0)) + Number(form.allowances || 0)],
                ["Gross pay", payroll.gross],
                ["Deductions", -payroll.deductions],
              ].map(([label, amount]) => (
                <Stack key={label} direction="row" justifyContent="space-between" gap={2}>
                  <Typography fontSize={13} color="#526780">{label}</Typography>
                  <Typography fontSize={13} fontWeight={700} color="#183454">{money(amount)}</Typography>
                </Stack>
              ))}
              <Box sx={{ mt: 1, p: 2.5, borderRadius: 3, bgcolor: "#EAF1FF" }}>
                <Typography fontSize={12} color="#245BC0">ESTIMATED NET PAY</Typography>
                <Typography fontSize={27} fontWeight={850} color="#183454">{money(payroll.net)}</Typography>
              </Box>
              <Alert severity="info">
                This is an unsaved estimate, not an issued payslip.
              </Alert>
            </Stack>
          ) : (
            <Box sx={{ py: 5, textAlign: "center", bgcolor: "#F5F8FD", borderRadius: 3 }}>
              <Typography color="#77869D" fontSize={13}>Enter salary details and calculate to see the breakdown.</Typography>
            </Box>
          )}
        </Paper>
      </Box>
    </Box>
  );
}
