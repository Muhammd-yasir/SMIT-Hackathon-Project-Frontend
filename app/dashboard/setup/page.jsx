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
  Avatar,
  LinearProgress,
} from "@mui/material";

import {
  Building2,
  Save,
  Globe,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Palette,
  Users,
} from "lucide-react";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "#F8FAFC",
    transition: "all 0.2s ease",
    "& fieldset": { borderColor: "#E2E8F0" },
    "&:hover fieldset": { borderColor: "#93B4F0" },
    "&.Mui-focused": {
      backgroundColor: "#FFFFFF",
      boxShadow: "0 0 0 4px rgba(37, 99, 235, 0.08)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2563EB",
      borderWidth: "1.5px",
    },
  },
  "& .MuiInputLabel-root": { color: "#64748B", fontWeight: 500 },
  "& .MuiInputLabel-root.Mui-focused": { color: "#2563EB" },
};

const iconStyle = { color: "#94A3B8", width: 18, height: 18 };

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
    setTimeout(() => setSaved(false), 2600);
  };

  const filledFields = Object.values(form).filter(
    (v) => v && v.toString().trim() !== ""
  ).length;
  const completion = Math.round((filledFields / Object.keys(form).length) * 100);

  const initials = form.name
    ? form.name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "OR";

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", pb: 6 }}>
      {/* ============ HERO HEADER ============ */}
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          overflow: "hidden",
          mb: 4,
          p: { xs: 3, sm: 4 },
          borderRadius: "24px",
          background:
            "linear-gradient(135deg, #1E3A8A 0%, #2563EB 55%, #3B82F6 100%)",
          color: "#FFFFFF",
          boxShadow: "0 18px 40px rgba(37, 99, 235, 0.22)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.06)",
            top: -120,
            right: -80,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 160,
            height: 160,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.15)",
            bottom: -70,
            right: 80,
          }}
        />

        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          spacing={3}
          sx={{ position: "relative", zIndex: 1 }}
        >
          <Stack direction="row" spacing={2.5} alignItems="center">
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "18px",
                bgcolor: "rgba(255,255,255,0.16)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <Building2 size={30} strokeWidth={2.2} />
            </Box>
            <Box>
              <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
                <Sparkles size={14} style={{ color: "#BFDBFE" }} />
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    color: "#BFDBFE",
                  }}
                >
                  WORKSPACE SETTINGS
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontSize: { xs: 24, sm: 28 },
                  fontWeight: 800,
                  letterSpacing: "-0.6px",
                  lineHeight: 1.2,
                }}
              >
                Organization Setup
              </Typography>
              <Typography
                sx={{
                  fontSize: 13.5,
                  color: "#DBEAFE",
                  mt: 0.5,
                  maxWidth: 420,
                }}
              >
                Configure your organization profile. This information is
                shown across your workspace and shared with your team.
              </Typography>
            </Box>
          </Stack>

          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            sx={{
              bgcolor: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.18)",
              px: 2,
              py: 1.5,
              borderRadius: "14px",
              backdropFilter: "blur(6px)",
              minWidth: 200,
            }}
          >
            <ShieldCheck size={20} style={{ color: "#BFDBFE" }} />
            <Box>
              <Typography sx={{ fontSize: 11, color: "#BFDBFE", fontWeight: 600 }}>
                Status
              </Typography>
              <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
                Admin Verified
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Paper>

      <Grid container spacing={3}>
        {/* ============ LEFT SIDEBAR ============ */}
        <Grid item xs={12} md={4}>
          <Stack spacing={2.5}>
            {/* Profile Card */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: "20px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 6px 24px rgba(15, 23, 42, 0.04)",
                textAlign: "center",
              }}
            >
              <Avatar
                sx={{
                  width: 84,
                  height: 84,
                  mx: "auto",
                  mb: 2,
                  background:
                    "linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)",
                  fontSize: 28,
                  fontWeight: 800,
                  boxShadow: "0 10px 24px rgba(37, 99, 235, 0.28)",
                }}
              >
                {initials}
              </Avatar>

              <Typography
                sx={{ fontSize: 16, fontWeight: 800, color: "#0F172A" }}
              >
                {form.name || "Your Organization"}
              </Typography>
              <Typography sx={{ fontSize: 12.5, color: "#64748B", mt: 0.3 }}>
                {form.industry || "Industry not set"}
              </Typography>

              <Divider sx={{ my: 2.5, borderColor: "#F1F5F9" }} />

              <Box textAlign="left">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1}
                >
                  <Typography
                    sx={{ fontSize: 12.5, fontWeight: 700, color: "#334155" }}
                  >
                    Profile completion
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12.5, fontWeight: 800, color: "#2563EB" }}
                  >
                    {completion}%
                  </Typography>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={completion}
                  sx={{
                    height: 8,
                    borderRadius: 99,
                    bgcolor: "#EFF6FF",
                    "& .MuiLinearProgress-bar": {
                      borderRadius: 99,
                      background:
                        "linear-gradient(90deg, #2563EB, #60A5FA)",
                    },
                  }}
                />
                <Typography sx={{ fontSize: 11.5, color: "#94A3B8", mt: 1 }}>
                  Complete your profile to unlock full features.
                </Typography>
              </Box>
            </Paper>

            {/* Quick Info Card */}
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                borderRadius: "20px",
                border: "1px solid #E2E8F0",
                bgcolor: "#F8FAFC",
                boxShadow: "0 6px 24px rgba(15, 23, 42, 0.03)",
              }}
            >
              <Stack direction="row" spacing={1.2} alignItems="center" mb={2}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "9px",
                    bgcolor: "#EFF6FF",
                    color: "#2563EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Users size={17} strokeWidth={2.2} />
                </Box>
                <Typography
                  sx={{ fontSize: 13.5, fontWeight: 800, color: "#0F172A" }}
                >
                  Why this matters
                </Typography>
              </Stack>

              {[
                "Shown on invoices & receipts",
                "Used for team notifications",
                "Required for compliance",
              ].map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={1.2}
                  alignItems="center"
                  mb={1.2}
                >
                  <CheckCircle2
                    size={15}
                    style={{ color: "#10B981", flexShrink: 0 }}
                  />
                  <Typography sx={{ fontSize: 12.5, color: "#475569" }}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Paper>

            {/* Security Card */}
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                borderRadius: "20px",
                border: "1px solid #DBEAFE",
                background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
              }}
            >
              <Stack direction="row" spacing={1.2} alignItems="center" mb={1}>
                <Palette size={17} style={{ color: "#2563EB" }} />
                <Typography
                  sx={{ fontSize: 13, fontWeight: 800, color: "#1E3A8A" }}
                >
                  Brand Appearance
                </Typography>
              </Stack>
              <Typography sx={{ fontSize: 12, color: "#1E40AF", mb: 1.5 }}>
                Your branding is applied across the workspace.
              </Typography>
              <Button
                size="small"
                endIcon={<ArrowRight size={14} />}
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: 12,
                  color: "#1D4ED8",
                  px: 0,
                  "&:hover": { background: "transparent" },
                }}
              >
                Customize branding
              </Button>
            </Paper>
          </Stack>
        </Grid>

        {/* ============ RIGHT FORM ============ */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: "20px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 6px 24px rgba(15, 23, 42, 0.04)",
              overflow: "hidden",
            }}
          >
            {/* Card Header */}
            <Box
              sx={{
                px: { xs: 2.5, sm: 3.5 },
                py: 2.5,
                borderBottom: "1px solid #F1F5F9",
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    sx={{ fontSize: 17, fontWeight: 800, color: "#0F172A" }}
                  >
                    Organization Details
                  </Typography>
                  <Typography sx={{ fontSize: 12.5, color: "#64748B", mt: 0.3 }}>
                    Fill in the information below to complete your profile.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    px: 1.2,
                    py: 0.5,
                    borderRadius: "8px",
                    bgcolor: "#EFF6FF",
                    color: "#1D4ED8",
                    fontSize: 11,
                    fontWeight: 700,
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  {completion}% filled
                </Box>
              </Stack>
            </Box>

            <Box component="form" onSubmit={handleSave} sx={{ p: { xs: 2.5, sm: 3.5 } }}>
              {/* Section: Basic Information */}
              <SectionLabel icon={<Building2 size={15} />} title="Basic Information" />
              <Grid container spacing={2.5} sx={{ mt: 1.5, mb: 1 }}>
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
                          <Building2 style={iconStyle} />
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
              </Grid>

              <Divider sx={{ my: 3, borderColor: "#F1F5F9" }} />

              {/* Section: Contact */}
              <SectionLabel icon={<Mail size={15} />} title="Contact Information" />
              <Grid container spacing={2.5} sx={{ mt: 1.5, mb: 1 }}>
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
                          <Mail style={iconStyle} />
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
                          <Phone style={iconStyle} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Office address"
                    placeholder="Enter your organization's office address"
                    value={form.address}
                    onChange={update("address")}
                    multiline
                    minRows={2}
                    fullWidth
                    sx={fieldSx}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{ alignSelf: "flex-start", mt: 1.7 }}
                        >
                          <MapPin style={iconStyle} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              <Divider sx={{ my: 3, borderColor: "#F1F5F9" }} />

              {/* Section: Web & Locale */}
              <SectionLabel icon={<Globe size={15} />} title="Web & Locale" />
              <Grid container spacing={2.5} sx={{ mt: 1.5 }}>
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
                          <Globe style={iconStyle} />
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
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Clock style={iconStyle} />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <MenuItem value="Asia/Karachi">
                      Pakistan — Karachi (PKT)
                    </MenuItem>
                    <MenuItem value="UTC">UTC</MenuItem>
                  </TextField>
                </Grid>
              </Grid>

              {/* Action bar */}
              <Box
                sx={{
                  mt: 4,
                  pt: 3,
                  borderTop: "1px solid #F1F5F9",
                }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  justifyContent="space-between"
                  alignItems={{ xs: "stretch", sm: "center" }}
                  spacing={2}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ minHeight: 24 }}
                  >
                    {saved ? (
                      <>
                        <CheckCircle2 size={16} style={{ color: "#10B981" }} />
                        <Typography
                          sx={{
                            fontSize: 12.5,
                            color: "#10B981",
                            fontWeight: 600,
                          }}
                        >
                          Profile updated successfully
                        </Typography>
                      </>
                    ) : (
                      <Typography sx={{ fontSize: 12.5, color: "#94A3B8" }}>
                        All changes are saved locally until submitted.
                      </Typography>
                    )}
                  </Stack>

                  <Stack direction="row" spacing={1.5}>
                    <Button
                      type="button"
                      variant="outlined"
                      sx={{
                        px: 2.5,
                        py: 1.1,
                        borderRadius: "11px",
                        textTransform: "none",
                        fontWeight: 700,
                        fontSize: 13,
                        borderColor: "#E2E8F0",
                        color: "#475569",
                        "&:hover": {
                          borderColor: "#CBD5E1",
                          bgcolor: "#F8FAFC",
                        },
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      startIcon={<Save size={16} strokeWidth={2.2} />}
                      sx={{
                        px: 3,
                        py: 1.1,
                        borderRadius: "11px",
                        textTransform: "none",
                        fontWeight: 700,
                        fontSize: 13.5,
                        background:
                          "linear-gradient(90deg, #1D4ED8, #3B82F6)",
                        boxShadow: "0 6px 16px rgba(37, 99, 235, 0.25)",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, #1E40AF, #2563EB)",
                          boxShadow: "0 8px 22px rgba(37, 99, 235, 0.35)",
                          transform: "translateY(-1px)",
                        },
                      }}
                    >
                      Save Changes
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

/* ---------- Section Label Helper ---------- */
function SectionLabel({ icon, title }) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Box
        sx={{
          width: 26,
          height: 26,
          borderRadius: "8px",
          bgcolor: "#EFF6FF",
          color: "#2563EB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
      <Typography
        sx={{
          fontSize: 12,
          fontWeight: 800,
          color: "#334155",
          letterSpacing: 0.6,
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
}