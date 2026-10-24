
"use client";

import { useState } from "react";
import {
  Box, Paper, Typography, Button, TextField, InputAdornment,
  Stack, Avatar, Chip, Dialog, DialogTitle, DialogContent,
  DialogActions, MenuItem
} from "@mui/material";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import ModuleEmptyState from "@/components/dashboard/ModuleEmptyState";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function EmployeesPage() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <Box>
      <DashboardHeader
        title="Employees"
        description="A clear, organized view of the people who make your organization work."
      />

      <Paper elevation={0} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4, border: "1px solid #E5ECF5" }}>
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "stretch", sm: "center" }} gap={2} mb={3}>
          <Stack direction="row" alignItems="center" gap={1.5}>
            <Avatar sx={{ width: 46, height: 46, bgcolor: "#E5F8F1", color: "#168765" }}>
              <GroupsRoundedIcon />
            </Avatar>
            <Box>
              <Typography fontWeight={850} color="#183454">Employee directory</Typography>
              <Typography fontSize={12} color="#77869D">Employee profiles and work details</Typography>
            </Box>
          </Stack>
          <Button onClick={() => setOpen(true)} variant="contained" startIcon={<PersonAddAlt1RoundedIcon />} sx={{ borderRadius: 2.5, textTransform: "none", py: 1.1 }}>
            Add employee
          </Button>
        </Stack>

        <TextField
          fullWidth
          size="small"
          placeholder="Search by employee name, email, or department"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 3, maxWidth: 520, "& .MuiOutlinedInput-root": { borderRadius: 2.5 } }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchRoundedIcon sx={{ color: "#91A0B4" }} /></InputAdornment>,
          }}
        />

        <ModuleEmptyState
          icon={GroupsRoundedIcon}
          title={search ? "No matching employees" : "Your team directory"}
          description={search ? "Try a different search term." : "Employee profiles will be listed here, with their departments, roles, and contact details."}
        />
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle fontWeight={850}>Add employee</DialogTitle>
        <DialogContent>
          <Stack gap={2} sx={{ pt: 1 }}>
            <TextField label="Full name" required fullWidth />
            <TextField label="Email address" type="email" required fullWidth />
            <TextField label="Employee ID" fullWidth />
            <TextField label="Job title" fullWidth />
            <TextField label="Department" fullWidth />
            <TextField label="Employment type" select defaultValue="Full-time" fullWidth>
              {["Full-time", "Part-time", "Contract", "Intern"].map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
            </TextField>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setOpen(false)}>Close</Button>
          <Button variant="contained" onClick={() => setOpen(false)}>Done</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
