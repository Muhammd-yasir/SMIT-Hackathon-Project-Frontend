
"use client";

import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  MenuItem,
  Alert,
} from "@mui/material";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function OrganizationSetupPage() {
  const [form, setForm] = useState({
    name: "",
    industry: "",
    email: "",
    phone: "",
    address: "",
    timezone: "Asia/Karachi",
  });
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(
      "Your details are ready. Connect this form to the organization setup API to save them."
    );
  };

  return (
    <Box>
      <DashboardHeader
        title="Organization Setup"
        description="Establish your organization's basic information and working preferences."
      />

      <Paper
        elevation={0}
        sx={{
          maxWidth: 900,
          p: { xs: 2.5, sm: 4 },
          borderRadius: 4,
          border: "1px solid #E5ECF5",
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center" mb={3}>
          <Box
            sx={{
              p: 1.5,
              display: "grid",
              placeItems: "center",
              borderRadius: 3,
              bgcolor: "#EAF1FF",
              color: "#245BC0",
            }}
          >
            <ApartmentRoundedIcon />
          </Box>
          <Box>
            <Typography fontWeight={800} color="#183454">
              Organization details
            </Typography>
            <Typography fontSize={13} color="#77869D">
              Enter the information for your workplace.
            </Typography>
          </Box>
        </Stack>

        {message && (
          <Alert severity="info" sx={{ mb: 3 }}>
            {message}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2.5,
            }}
          >
            <TextField
              label="Organization name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              fullWidth
            />

            <TextField
              select
              label="Industry"
              name="industry"
              value={form.industry}
              onChange={handleChange}
              required
              fullWidth
            >
              {[
                "Technology",
                "Education",
                "Healthcare",
                "Finance",
                "Retail",
                "Manufacturing",
                "Other",
              ].map((industry) => (
                <MenuItem key={industry} value={industry}>
                  {industry}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Organization email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              fullWidth
            />

            <TextField
              label="Contact number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Timezone"
              name="timezone"
              value={form.timezone}
              onChange={handleChange}
              required
              fullWidth
            />

            <TextField
              label="Organization address"
              name="address"
              value={form.address}
              onChange={handleChange}
              fullWidth
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            startIcon={<SaveRoundedIcon />}
            sx={{
              mt: 3,
              px: 3,
              py: 1.2,
              borderRadius: 2.5,
              textTransform: "none",
              fontWeight: 700,
              bgcolor: "#245FC0",
            }}
          >
            Save organization details
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
