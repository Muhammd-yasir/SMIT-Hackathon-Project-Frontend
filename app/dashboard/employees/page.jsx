
"use client";

import { useState } from "react";
import {
  Box, Paper, Typography, Button, TextField, Stack,
  InputAdornment, Dialog, DialogTitle, DialogContent,
  DialogActions, MenuItem,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ModuleEmptyState from "@/components/dashboard/ModuleEmptyState";

export default function EmployeesPage() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto" }}>
      <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ sm: "center" }} gap={2} mb={3}>
        <Box>
          <Typography variant="h5" fontWeight={800} color="#173354">Employees</Typography>
          <Typography color="text.secondary" fontSize={14} mt={.5}>
            Manage employee profiles and directory information.
          </Typography>
        </Box>
        <Button onClick={() => setOpen(true)} variant="contained" startIcon={<PersonAddAlt1RoundedIcon />} sx={{ borderRadius: 2, py: 1.2, textTransform: "none", fontWeight: 700 }}>
          Add employee
        </Button>
      </Stack>

      <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4, border: "1px solid #E5EBF4", boxShadow: "0 8px 30px #18345408" }}>
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" gap={2} mb={3}>
          <Box>
            <Typography fontWeight={800} color="#173354">Employee directory</Typography>
            <Typography fontSize={13} color="text.secondary" mt={.5}>Search and manage your workforce.</Typography>
          </Box>
          <TextField
            size="small"
            placeholder="Search employees"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ width: { xs: "100%", sm: 280 }, "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
            InputProps={{ startAdornment: <InputAdornment position="start"><SearchRoundedIcon fontSize="small" /></InputAdornment> }}
          />
        </Stack>
        <ModuleEmptyState
          icon={GroupsRoundedIcon}
          title={search ? "No matching employees yet" : "Your employee directory is ready"}
          description={search
            ? "Employee search will work once employee records are available."
            : "Employee profiles will appear here after records are loaded from the backend."}
        />
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle sx={{ fontWeight: 800, color: "#173354" }}>Add employee</DialogTitle>
        <DialogContent>
          <Typography fontSize={13} color="text.secondary" mb={2}>
            Employee creation will be connected to the backend next.
          </Typography>
          <Stack spacing={2} sx={{ pt: 1 }}>
            <TextField label="Full name" fullWidth />
            <TextField label="Work email" type="email" fullWidth />
            <TextField select label="Department" defaultValue="" fullWidth>
              {["Engineering", "Human Resources", "Finance", "Operations", "Other"].map((d) => <MenuItem key={d} value={d}>{d}</MenuItem>)}
            </TextField>
            <TextField label="Job title" fullWidth />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 2.5 }}>
          <Button onClick={() => setOpen(false)} sx={{ textTransform: "none" }}>Close</Button>
          <Button disabled variant="contained" sx={{ textTransform: "none" }}>Create employee</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
