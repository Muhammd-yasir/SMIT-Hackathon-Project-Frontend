
"use client";

import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  Stack,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  IconButton,
  Divider,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import ModuleEmptyState from "@/components/dashboard/ModuleEmptyState";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    bgcolor: "#F8FAFD",
    transition: "all 0.2s ease",
    "& fieldset": {
      borderColor: "#E2E8F0",
    },
    "&:hover fieldset": {
      borderColor: "#9BB9ED",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2868CF",
      borderWidth: "1.5px",
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#2868CF",
  },
};

export default function EmployeesPage() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        pb: 5,
      }}
    >
      {/* Page Header */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={2}
        mb={4}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              width: 54,
              height: 54,
              borderRadius: "16px",
              bgcolor: "#EAF1FF",
              color: "#2868CF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GroupsRoundedIcon sx={{ fontSize: 29 }} />
          </Box>

          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                color: "#173354",
                letterSpacing: "-0.5px",
              }}
            >
              Employees
            </Typography>

            <Typography
              sx={{
                color: "#718096",
                fontSize: 13.5,
                mt: 0.5,
              }}
            >
              Manage employee profiles and your organization's workforce.
            </Typography>
          </Box>
        </Stack>

        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          startIcon={<PersonAddAlt1RoundedIcon />}
          sx={{
            borderRadius: "11px",
            px: 2.5,
            py: 1.3,
            fontWeight: 700,
            fontSize: 13.5,
            textTransform: "none",
            background: "linear-gradient(90deg, #245BC0, #3479DF)",
            boxShadow: "0 5px 14px rgba(36, 91, 192, 0.18)",
            "&:hover": {
              background: "#194DA8",
              boxShadow: "0 7px 18px rgba(36, 91, 192, 0.25)",
            },
          }}
        >
          Add Employee
        </Button>
      </Stack>

      {/* Directory Overview */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2.5, sm: 3 },
          borderRadius: "20px",
          border: "1px solid #E7EDF5",
          boxShadow: "0 8px 30px rgba(23, 51, 84, 0.045)",
        }}
      >
        {/* Directory Header */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "stretch", sm: "center" }}
          spacing={2.5}
          mb={3}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 800,
                color: "#173354",
              }}
            >
              Employee Directory
            </Typography>

            <Typography
              sx={{
                fontSize: 13,
                color: "#8492A6",
                mt: 0.6,
              }}
            >
              View, search, and manage your workforce.
            </Typography>
          </Box>

          <TextField
            size="small"
            placeholder="Search employees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              width: { xs: "100%", sm: 290 },
              "& .MuiOutlinedInput-root": {
                borderRadius: "11px",
                bgcolor: "#F8FAFD",
                "& fieldset": {
                  borderColor: "#E2E8F0",
                },
                "&:hover fieldset": {
                  borderColor: "#9BB9ED",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2868CF",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon
                    sx={{ color: "#8293AA", fontSize: 20 }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Divider sx={{ borderColor: "#EDF1F6", mb: 3 }} />

        {/* Empty Directory State */}
        <Box
          sx={{
            py: { xs: 2, sm: 3 },
            px: 1,
          }}
        >
          <ModuleEmptyState
            icon={GroupsRoundedIcon}
            title={
              search
                ? "No matching employees found"
                : "Your employee directory is ready"
            }
            description={
              search
                ? "There are currently no employee records matching your search."
                : "Start building your workforce directory by adding employee profiles."
            }
          />

          {!search && (
            <Stack alignItems="center" mt={2}>
              <Button
                onClick={() => setOpen(true)}
                variant="outlined"
                startIcon={<PersonAddAlt1RoundedIcon />}
                sx={{
                  borderRadius: "10px",
                  px: 2.5,
                  py: 1,
                  textTransform: "none",
                  fontWeight: 700,
                  color: "#2868CF",
                  borderColor: "#C8D9F5",
                  "&:hover": {
                    bgcolor: "#F0F6FF",
                    borderColor: "#2868CF",
                  },
                }}
              >
                Add your first employee
              </Button>
            </Stack>
          )}
        </Box>
      </Paper>

      {/* Add Employee Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: "20px",
            boxShadow: "0 20px 60px rgba(23, 51, 84, 0.16)",
          },
        }}
      >
        {/* Dialog Header */}
        <DialogTitle sx={{ p: 3, pb: 2 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "13px",
                  bgcolor: "#EAF1FF",
                  color: "#2868CF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PersonAddAlt1RoundedIcon />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: 800,
                    color: "#173354",
                    fontSize: 18,
                  }}
                >
                  Add Employee
                </Typography>

                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#8492A6",
                    mt: 0.3,
                  }}
                >
                  Create a new employee profile
                </Typography>
              </Box>
            </Stack>

            <IconButton
              onClick={() => setOpen(false)}
              size="small"
              sx={{
                bgcolor: "#F1F5F9",
                color: "#64748B",
                "&:hover": {
                  bgcolor: "#E2E8F0",
                },
              }}
            >
              <CloseRoundedIcon fontSize="small" />
            </IconButton>
          </Stack>
        </DialogTitle>

        <Divider sx={{ borderColor: "#EDF1F6" }} />

        <DialogContent sx={{ p: 3 }}>
          <Stack spacing={2.5} sx={{ pt: 1 }}>
            <TextField
              label="Full name"
              placeholder="Enter employee's full name"
              fullWidth
              sx={fieldSx}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BadgeRoundedIcon
                      sx={{ color: "#8293AA", fontSize: 19 }}
                    />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Work email"
              placeholder="employee@company.com"
              type="email"
              fullWidth
              sx={fieldSx}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailRoundedIcon
                      sx={{ color: "#8293AA", fontSize: 19 }}
                    />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              select
              label="Department"
              defaultValue=""
              fullWidth
              sx={fieldSx}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ApartmentRoundedIcon
                      sx={{ color: "#8293AA", fontSize: 19 }}
                    />
                  </InputAdornment>
                ),
              }}
            >
              {[
                "Engineering",
                "Human Resources",
                "Finance",
                "Operations",
                "Marketing",
                "Sales",
                "Other",
              ].map((department) => (
                <MenuItem key={department} value={department}>
                  {department}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Job title"
              placeholder="e.g. Software Engineer"
              fullWidth
              sx={fieldSx}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <WorkOutlineRoundedIcon
                      sx={{ color: "#8293AA", fontSize: 19 }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </DialogContent>

        <Divider sx={{ borderColor: "#EDF1F6" }} />

        <DialogActions
          sx={{
            p: 3,
            gap: 1,
          }}
        >
          <Button
            onClick={() => setOpen(false)}
            sx={{
              px: 2.5,
              borderRadius: "10px",
              color: "#64748B",
              fontWeight: 700,
              textTransform: "none",
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            startIcon={<PersonAddAlt1RoundedIcon />}
            sx={{
              px: 2.5,
              py: 1.1,
              borderRadius: "10px",
              fontWeight: 700,
              textTransform: "none",
              background: "linear-gradient(90deg, #245BC0, #3479DF)",
              boxShadow: "0 5px 14px rgba(36, 91, 192, 0.16)",
              "&:hover": {
                background: "#194DA8",
              },
            }}
          >
            Create Employee
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
