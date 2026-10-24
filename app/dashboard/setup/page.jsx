
"use client";

import { useState } from "react";
import {
  Box, Paper, Typography, TextField, Button, Stack,
  MenuItem, Grid, InputAdornment,
} from "@mui/material";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    bgcolor: "#fff",
  },
};

export default function SetupPage() {
  const [form, setForm] = useState({
    name: "", industry: "", email: "", phone: "",
    website: "", timezone: "Asia/Karachi", address: "",
  });

  const update = (key) => (event) =>
    setForm({ ...form, [key]: event.target.value });

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto" }}>
      <Stack direction="row" spacing={2} alignItems="center" mb={3}>
        <Box sx={{ p: 1.5, borderRadius: 3, bgcolor: "#EAF1FF", color: "#245BC0" }}>
          <BusinessRoundedIcon />
        </Box>
        <Box>
          <Typography variant="h5" fontWeight={800} color="#173354">
            Organization setup
          </Typography>
          <Typography color="text.secondary" fontSize={14}>
            Set up the organization profile for your people operations.
          </Typography>
        </Box>
      </Stack>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{
            p: 3, borderRadius: 4, color: "#fff",
            background: "linear-gradient(145deg,#173A75,#2868CF)",
            minHeight: 280,
          }}>
            <Typography fontSize={12} sx={{ opacity: .8, letterSpacing: 1 }}>
              ORGANIZATION PROFILE
            </Typography>
            <Typography variant="h5" fontWeight={800} mt={2}>
              A strong foundation starts here.
            </Typography>
            <Typography sx={{ mt: 2, color: "#E0EAFF", lineHeight: 1.9, fontSize: 14 }}>
              Keep your organization details in one place. These details can
              support employee management, reporting, and administration.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4, border: "1px solid #E5EBF4", boxShadow: "0 8px 30px #18345408" }}>
            <Typography fontWeight={800} color="#173354" mb={.5}>
              Organization details
            </Typography>
            <Typography color="text.secondary" fontSize={13} mb={3}>
              Enter the information you want to configure.
            </Typography>

            <Box component="form" onSubmit={(e) => e.preventDefault()}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Organization name" value={form.name} onChange={update("name")} fullWidth sx={fieldSx} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField select label="Industry" value={form.industry} onChange={update("industry")} fullWidth sx={fieldSx}>
                    {["Technology", "Education", "Healthcare", "Retail", "Manufacturing", "Other"].map((item) =>
                      <MenuItem key={item} value={item}>{item}</MenuItem>
                    )}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Contact email" type="email" value={form.email} onChange={update("email")} fullWidth sx={fieldSx} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Phone number" value={form.phone} onChange={update("phone")} fullWidth sx={fieldSx} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Website" value={form.website} onChange={update("website")} fullWidth sx={fieldSx} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField select label="Timezone" value={form.timezone} onChange={update("timezone")} fullWidth sx={fieldSx}>
                    <MenuItem value="Asia/Karachi">Pakistan — Karachi (PKT)</MenuItem>
                    <MenuItem value="UTC">UTC</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Office address" value={form.address} onChange={update("address")} multiline minRows={2} fullWidth sx={fieldSx} />
                </Grid>
              </Grid>
              <Button
                type="button"
                variant="contained"
                startIcon={<SaveRoundedIcon />}
                disabled
                sx={{ mt: 3, py: 1.2, px: 2.5, borderRadius: 2, textTransform: "none", fontWeight: 700 }}
              >
                Save organization details
              </Button>
              <Typography fontSize={12} color="text.secondary" mt={1}>
                Saving will be enabled when the backend endpoint is connected.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
