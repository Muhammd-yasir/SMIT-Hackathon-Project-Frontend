
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
} from "@mui/material";

import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "#F8FAFD",
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
  "& .MuiInputLabel-root": {
    color: "#64748B",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#2868CF",
  },
};

const iconSx = {
  color: "#8293AA",
  fontSize: 19,
};

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

  const update = (key) => (event) => {
    setForm((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

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
            <BusinessRoundedIcon sx={{ fontSize: 28 }} />
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
              Organization Setup
            </Typography>

            <Typography
              sx={{
                color: "#718096",
                fontSize: 13.5,
                mt: 0.5,
              }}
            >
              Manage your organization's profile and business information.
            </Typography>
          </Box>
        </Stack>

        <Box
          sx={{
            px: 2,
            py: 1,
            borderRadius: "10px",
            bgcolor: "#EFF6FF",
            border: "1px solid #DBEAFE",
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              color: "#2868CF",
              fontWeight: 700,
            }}
          >
            Organization Profile
          </Typography>
        </Box>
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
              minHeight: { xs: 250, md: 390 },
              color: "#FFFFFF",
              background:
                "linear-gradient(145deg, #173A75 0%, #245BC0 55%, #3479DF 100%)",
              boxShadow: "0 12px 30px rgba(36, 91, 192, 0.16)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 190,
                height: 190,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.07)",
                top: -75,
                right: -65,
              }}
            />

            <Box
              sx={{
                position: "absolute",
                width: 130,
                height: 130,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.12)",
                bottom: -45,
                right: -30,
              }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "14px",
                  bgcolor: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <ApartmentRoundedIcon sx={{ fontSize: 27 }} />
              </Box>

              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  color: "#C7DAFF",
                  mb: 1.5,
                }}
              >
                ORGANIZATION PROFILE
              </Typography>

              <Typography
                sx={{
                  fontSize: 25,
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
                  color: "#DCE8FF",
                  fontSize: 13.5,
                  lineHeight: 1.9,
                  maxWidth: 280,
                }}
              >
                Maintain your organization's essential information in one
                centralized place. Keep your business profile organized
                and accessible.
              </Typography>

              <Divider
                sx={{
                  borderColor: "rgba(255,255,255,0.18)",
                  my: 3,
                }}
              />

              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box
                  sx={{
                    width: 35,
                    height: 35,
                    borderRadius: "10px",
                    bgcolor: "rgba(255,255,255,0.13)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <BusinessRoundedIcon sx={{ fontSize: 19 }} />
                </Box>

                <Box>
                  <Typography fontSize={12} fontWeight={700}>
                    Organization Information
                  </Typography>
                  <Typography fontSize={11} color="#C7DAFF">
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
              border: "1px solid #E7EDF5",
              boxShadow: "0 8px 30px rgba(23, 51, 84, 0.045)",
              height: "100%",
            }}
          >
            {/* Form Heading */}
            <Box mb={3}>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#173354",
                }}
              >
                Organization Details
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  color: "#8492A6",
                  mt: 0.7,
                }}
              >
                Provide the basic information about your organization.
              </Typography>
            </Box>

            <Divider sx={{ mb: 3, borderColor: "#EDF1F6" }} />

            <Box component="form" onSubmit={(e) => e.preventDefault()}>
              <Grid container spacing={2.5}>
                {/* Organization Name */}
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
                          <ApartmentRoundedIcon sx={iconSx} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* Industry */}
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

                {/* Email */}
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
                          <EmailRoundedIcon sx={iconSx} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* Phone */}
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
                          <PhoneRoundedIcon sx={iconSx} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* Website */}
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
                          <LanguageRoundedIcon sx={iconSx} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* Timezone */}
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

                {/* Address */}
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
                          <LocationOnRoundedIcon sx={iconSx} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              {/* Save Button */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="flex-end"
                alignItems={{ xs: "stretch", sm: "center" }}
                mt={3.5}
                pt={2.5}
                sx={{
                  borderTop: "1px solid #EDF1F6",
                }}
              >
                <Button
                  type="button"
                  variant="contained"
                  startIcon={<SaveRoundedIcon />}
                  sx={{
                    px: 3,
                    py: 1.3,
                    borderRadius: "11px",
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: 13.5,
                    background: "linear-gradient(90deg, #245BC0, #3479DF)",
                    boxShadow: "0 5px 14px rgba(36, 91, 192, 0.18)",
                    "&:hover": {
                      background: "#194DA8",
                      boxShadow: "0 7px 18px rgba(36, 91, 192, 0.25)",
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
