
"use client";

import { useMemo, useState } from "react";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    jobTitle: "",
  });

  const filteredEmployees = useMemo(
    () =>
      employees.filter((employee) =>
        `${employee.name} ${employee.email} ${employee.department}`
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    [employees, search]
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmployees((current) => [
      ...current,
      { ...form, id: crypto.randomUUID() },
    ]);
    setForm({ name: "", email: "", department: "", jobTitle: "" });
    setOpen(false);
    setMessage(
      "Employee added to this page's temporary state. Database saving is not connected yet."
    );
  };

  return (
    <Box>
      <DashboardHeader
        title="Employees"
        description="Keep employee information organized and easy to find."
        actionLabel="Add employee"
        actionHref="#employee-form"
      />

      <Paper elevation={0} sx={{ p: 2.5, borderRadius: 4, border: "1px solid #E5ECF5" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "stretch", sm: "center" }}
          gap={2}
          mb={3}
        >
          <Box>
            <Typography fontWeight={800} color="#183454">
              Employee directory
            </Typography>
            <Typography fontSize={13} color="#77869D">
              {employees.length} employee{employees.length === 1 ? "" : "s"} in this session
            </Typography>
          </Box>

          <Stack direction="row" gap={1}>
            <TextField
              size="small"
              placeholder="Search employees"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              slotProps={{ input: { startAdornment: <SearchRoundedIcon sx={{ mr: 1, color: "#8A98AC" }} /> } }}
            />
            <Button
              variant="contained"
              startIcon={<AddRoundedIcon />}
              onClick={() => setOpen(true)}
              sx={{ textTransform: "none", whiteSpace: "nowrap" }}
            >
              Add
            </Button>
          </Stack>
        </Stack>

        {message && <Alert severity="info" sx={{ mb: 2 }}>{message}</Alert>}

        {filteredEmployees.length === 0 ? (
          <Box sx={{ py: 7, textAlign: "center" }}>
            <Avatar sx={{ mx: "auto", mb: 2, width: 58, height: 58, bgcolor: "#EAF1FF", color: "#245BC0" }}>
              <GroupsRoundedIcon fontSize="large" />
            </Avatar>
            <Typography fontWeight={800} color="#183454">
              {search ? "No matching employees" : "Your employee directory starts here"}
            </Typography>
            <Typography sx={{ mt: 1, mb: 2, color: "#77869D", fontSize: 13 }}>
              {search
                ? "Try another name, email, or department."
                : "Add an employee to begin organizing your team."}
            </Typography>
            {!search && (
              <Button variant="outlined" onClick={() => setOpen(true)} sx={{ textTransform: "none" }}>
                Add your first employee
              </Button>
            )}
          </Box>
        ) : (
          <Stack gap={1.5}>
            {filteredEmployees.map((employee) => (
              <Box
                key={employee.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2,
                  border: "1px solid #EDF1F7",
                  borderRadius: 3,
                }}
              >
                <Avatar sx={{ bgcolor: "#EAF1FF", color: "#245BC0" }}>
                  {employee.name.charAt(0).toUpperCase()}
                </Avatar>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography fontWeight={700} color="#183454">{employee.name}</Typography>
                  <Typography sx={{ fontSize: 12, color: "#77869D", overflowWrap: "anywhere" }}>
                    {employee.email}
                  </Typography>
                </Box>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <Typography fontSize={12} color="#526780">{employee.jobTitle || "No job title"}</Typography>
                  <Typography fontSize={12} color="#77869D">{employee.department || "No department"}</Typography>
                </Box>
                <Chip size="small" label="Added locally" />
              </Box>
            ))}
          </Stack>
        )}
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle fontWeight={800}>Add employee</DialogTitle>
          <DialogContent>
            <Stack gap={2} sx={{ pt: 1 }}>
              <TextField label="Full name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <TextField label="Email address" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <TextField label="Job title" value={form.jobTitle} onChange={(e) => setForm({ ...form, jobTitle: e.target.value })} />
              <TextField label="Department" value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ p: 3 }}>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" variant="contained">Add employee</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
}
