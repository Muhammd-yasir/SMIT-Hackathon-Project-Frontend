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
  Grid,
  Divider,
  InputAdornment,
  Chip,
} from "@mui/material";

import {
  Building2,
  Save,
  Briefcase,
  Globe,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "#F8FAFD",
    transition: "all 0.2s ease",
    "& fieldset": {
      borderColor: "#E2E8F0",
    },
    "&:hover fieldset": {
      borderColor: "#93B4F0",
    },
    "&.Mui-focused": {
      backgroundColor: "#FFFFFF",
      boxShadow: "0 0 0 4px rgba(37, 99, 235, 0.08)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2563EB",
      borderWidth: "1.5px",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#64748B",
    fontWeight: 500,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#2563EB",
  },
};

const iconSx = { color: "#94A3B8", width: 18, height: 18 };

export default function SetupPage() {
  const [form, setForm] = useState({
    name: "",
    industry: "",
    email: "",
    phone: "",
    website: "",
    timezone: "Asia/Karachi",
    address: "",
  });

  const [saved, setSaved] = useState(false);

  const update = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", pb: 5 }}>
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
              width: 52,
              height: 52,
              borderRadius: "14px",
              background: "linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 20px rgba(37, 99, 235, 0.25)",
            }}
          >
            <Building2 size={26} strokeWidth={2.2} />
          </Box>

          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                color: "#0F172A",
                letterSpacing: "-0.5px",
              }}
            >
              Organization Setup
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: 13.5, mt: 0.3 }}>
              Manage your organization's profile and business information.
            </Typography>
          </Box>
        </Stack>

        <Chip
          icon={<Sparkles size={14} style={{ color: "#2563EB" }} />}
          label="Organization Profile"
          sx={{
            bgcolor: "#EFF6FF",
            color: "#1D4ED8",
            fontWeight: 700,
            fontSize: 12,
            height: 32,
            borderRadius: "10px",
            border: "1px solid #DBEAFE",
            "& .MuiChip-icon": { ml: 1 },
          }}
        />
      </Stack>

      <Grid container spacing={3}>
        {/* Left Information Panel */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              position: "relative",
              overflow: "hidden",
              p: 3.5,
              borderRadius: "20px",
              minHeight: { xs: 240, md: 400 },
              color: "#FFFFFF",
              background:
                "linear-gradient(160deg, #1E3A8A 0%, #2563EB 55%, #3B82F6 100%)",
              boxShadow: "0 15px 35px rgba(37, 99, 235, 0.22)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 200,
                height: 200,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.06)",
                top: -80,
                right: -70,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: 120,
                height: 120,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.12)",
                bottom: -40,
                right: -25,
              }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Box
                sx={{
                  width: 46,
                  height: 46,
                  borderRadius: "12px",
                  bgcolor: "rgba(255,255,255,0.16)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                  backdropFilter: "blur(6px)",
                }}
              >
                <Briefcase size={24} strokeWidth={2.2} />
              </Box>

              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  color: "#BFDBFE",
                  mb: 1.5,
                }}
              >
                ORGANIZATION PROFILE
              </Typography>

              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 800,
                  lineHeight: 1.35,
                  maxWidth: 260,
                  letterSpacing: "-0.5px",
                }}
              >
                Build your organization's foundation.
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: "#DBEAFE",
                  fontSize: 13.5,
                  lineHeight: 1.85,
                  maxWidth: 280,
                }}
              >
                Maintain your organization's essential information in one
                centralized place. Keep your business profile organized and
                accessible.
              </Typography>

              <Divider
                sx={{ borderColor: "rgba(255,255,255,0.18)", my: 3 }}
              />

              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: "10px",
                    bgcolor: "rgba(255,255,255,0.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </Box>
                <Box>
                  <Typography fontSize={12.5} fontWeight={700}>
                    Organization Information
                  </Typography>
                  <Typography fontSize={11} color="#BFDBFE">
                    Business profile and contact details
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Paper>
        </Grid>

        {/* Organization Form */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2.5, sm: 3.5 },
              borderRadius: "20px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 6px 24px rgba(15, 23, 42, 0.04)",
              height: "100%",
            }}
          >
            <Box mb={3}>
              <Typography sx={{ fontSize: 18, fontWeight: 800, color: "#0F172A" }}>
                Organization Details
              </Typography>
              <Typography sx={{ fontSize: 13, color: "#64748B", mt: 0.5 }}>
                Provide the basic information about your organization.
              </Typography>
            </Box>

            <Divider sx={{ mb: 3, borderColor: "#F1F5F9" }} />

            <Box component="form" onSubmit={handleSave}>
              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Organization name"
                    placeholder="Enter organization name"
                    value={form.name}
                    onChange={update("name")}
                    fullWidth
                    sx={fieldSx}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Building2 style={iconSx} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    label="Industry"
                    value={form.industry}
                    onChange={update("industry")}
                    fullWidth
                    sx={fieldSx}
                  >
                    {[
                      "Technology",
                      "Education",
                      "Healthcare",
                      "Retail",
                      "Manufacturing",
                      "Finance",
                      "Construction",
                      "Other",
                    ].map((item) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Contact email"
                    placeholder="company@example.com"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    fullWidth
                    sx={fieldSx}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Mail style={iconSx} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone number"
                    placeholder="+92 300 1234567"
                    value={form.phone}
                    onChange={update("phone")}
                    fullWidth
                    sx={fieldSx}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Phone style={iconSx} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Website"
                    placeholder="https://www.example.com"
                    value={form.website}
                    onChange={update("website")}
                    fullWidth
                    sx={fieldSx}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Globe style={iconSx} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    label="Timezone"
                    value={form.timezone}
                    onChange={update("timezone")}
                    fullWidth
                    sx={fieldSx}
                  >
                    <MenuItem value="Asia/Karachi">
                      Pakistan — Karachi (PKT)
                    </MenuItem>
                    <MenuItem value="UTC">UTC</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Office address"
                    placeholder="Enter your organization's office address"
                    value={form.address}
                    onChange={update("address")}
                    multiline
                    minRows={3}
                    fullWidth
                    sx={fieldSx}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{ alignSelf: "flex-start", mt: 1.7 }}
                        >
                          <MapPin style={iconSx} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              {/* Save Button */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "stretch", sm: "center" }}
                spacing={2}
                mt={3.5}
                pt={2.5}
                sx={{ borderTop: "1px solid #F1F5F9" }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  {saved && (
                    <>
                      <CheckCircle2 size={16} style={{ color: "#10B981" }} />
                      <Typography
                        sx={{ fontSize: 12.5, color: "#10B981", fontWeight: 600 }}
                      >
                        Changes saved successfully
                      </Typography>
                    </>
                  )}
                </Stack>

                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<Save size={17} strokeWidth={2.2} />}
                  sx={{
                    px: 3,
                    py: 1.2,
                    borderRadius: "11px",
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: 13.5,
                    background: "linear-gradient(90deg, #1D4ED8, #3B82F6)",
                    boxShadow: "0 6px 16px rgba(37, 99, 235, 0.25)",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      background: "linear-gradient(90deg, #1E40AF, #2563EB)",
                      boxShadow: "0 8px 22px rgba(37, 99, 235, 0.35)",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  Save Changes
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}