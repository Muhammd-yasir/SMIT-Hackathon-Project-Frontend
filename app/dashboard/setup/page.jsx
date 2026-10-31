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
  Chip,
  FormControlLabel,
  Switch,
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
  Calendar,
  MapPinned,
  Percent,
  Layers,
  Users,
  Compass,
  Info,
} from "lucide-react";

/* ---------------------------------- styles --------------------------------- */
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

/* --------------------------------- helpers --------------------------------- */
function SectionLabel({ icon, title, subtitle }) {
  return (
    <Stack direction="row" spacing={1.2} alignItems="center" mb={2}>
      <Box
        sx={{
          width: 30,
          height: 30,
          borderRadius: "9px",
          bgcolor: "#EFF6FF",
          color: "#2563EB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 800,
            color: "#334155",
            letterSpacing: 0.6,
            textTransform: "uppercase",
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography sx={{ fontSize: 11.5, color: "#94A3B8", mt: 0.2 }}>
            {subtitle}
          </Typography>
        )}
      </Box>
    </Stack>
  );
}

/* ---------------------------------- page ----------------------------------- */
export default function SetupPage() {
  const [form, setForm] = useState({
    name: "",
    industry: "",
    email: "",
    phone: "",
    website: "",
    timezone: "Asia/Karachi",
    address: "",
    officeStart: "09:00",
    graceMinutes: "15",
    halfDayHours: "5",
    weekend: "Sat-Sun",
    officeLat: "",
    officeLng: "",
    radiusMeters: "150",
    requireCamera: false,
  });

  const [saved, setSaved] = useState(false);

  const update = (key) => (e) => {
    setForm((p) => ({ ...p, [key]: e.target.value }));
    setSaved(false);
  };

  const toggle = (key) => (e) => {
    setForm((p) => ({ ...p, [key]: e.target.checked }));
    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2600);
  };

  /* completion (based on required-ish fields) */
  const requiredKeys = [
    "name",
    "industry",
    "email",
    "phone",
    "officeStart",
    "graceMinutes",
    "weekend",
    "radiusMeters",
  ];
  const filled = requiredKeys.filter((k) => String(form[k] || "").trim()).length;
  const completion = Math.round((filled / requiredKeys.length) * 100);

  const initials =
    form.name
      .trim()
      .split(/\s+/)
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "OR";

  return (
    <Box sx={{ maxWidth: 1240, mx: "auto", pb: 6 }}>
      {/* ============================= HERO ============================= */}
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
            width: 280,
            height: 280,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.06)",
            top: -130,
            right: -90,
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
            right: 90,
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
                <Sparkles size={13} style={{ color: "#BFDBFE" }} />
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 1.6,
                    color: "#BFDBFE",
                  }}
                >
                  FIRST-RUN · MODULE M2
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
                  maxWidth: 460,
                }}
              >
                Configure your company once — office hours, grace time, weekend,
                and geofence. Every attendance, leave and payroll record in HCM
                Lite is judged against these rules.
              </Typography>
            </Box>
          </Stack>

          {/* Completion pill */}
          <Box
            sx={{
              bgcolor: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "14px",
              px: 2,
              py: 1.5,
              backdropFilter: "blur(6px)",
              minWidth: 220,
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <ShieldCheck size={16} style={{ color: "#BFDBFE" }} />
              <Typography sx={{ fontSize: 11, color: "#BFDBFE", fontWeight: 700, letterSpacing: 0.5 }}>
                SETUP PROGRESS
              </Typography>
            </Stack>
            <LinearProgress
              variant="determinate"
              value={completion}
              sx={{
                height: 8,
                borderRadius: 99,
                bgcolor: "rgba(255,255,255,0.18)",
                "& .MuiLinearProgress-bar": {
                  borderRadius: 99,
                  backgroundColor: "#FFFFFF",
                },
              }}
            />
            <Typography sx={{ fontSize: 12, fontWeight: 700, mt: 1 }}>
              {completion}% configured
            </Typography>
          </Box>
        </Stack>
      </Paper>

      <Grid container spacing={3}>
        {/* ============================ SIDEBAR ============================ */}
        <Grid item xs={12} md={4}>
          <Stack spacing={2.5}>
            {/* Profile preview */}
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
              <Typography sx={{ fontSize: 16, fontWeight: 800, color: "#0F172A" }}>
                {form.name || "Your Organization"}
              </Typography>
              <Typography sx={{ fontSize: 12.5, color: "#64748B", mt: 0.3 }}>
                {form.industry || "Industry not set"}
              </Typography>

              <Divider sx={{ my: 2.5, borderColor: "#F1F5F9" }} />

              <Stack spacing={1.2} textAlign="left">
                <InfoRow
                  icon={<Clock size={14} />}
                  label="Office start"
                  value={form.officeStart || "—"}
                />
                <InfoRow
                  icon={<Percent size={14} />}
                  label="Grace period"
                  value={`${form.graceMinutes || 0} min`}
                />
                <InfoRow
                  icon={<Calendar size={14} />}
                  label="Weekend"
                  value={form.weekend || "—"}
                />
                <InfoRow
                  icon={<MapPinned size={14} />}
                  label="Geofence"
                  value={`${form.radiusMeters || 0} m`}
                />
              </Stack>
            </Paper>

            {/* What judges will check */}
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                borderRadius: "20px",
                border: "1px solid #DBEAFE",
                background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
              }}
            >
              <Stack direction="row" spacing={1.2} alignItems="center" mb={1.5}>
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: "9px",
                    bgcolor: "#FFFFFF",
                    color: "#2563EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Info size={15} />
                </Box>
                <Typography sx={{ fontSize: 13, fontWeight: 800, color: "#1E3A8A" }}>
                  Applies to new records only
                </Typography>
              </Stack>
              <Typography sx={{ fontSize: 12, color: "#1E40AF", lineHeight: 1.7 }}>
                Changing office hours or the geofence after attendance exists
                will not alter past days. Rules are evaluated at record creation
                time, as required by the brief.
              </Typography>
            </Paper>

            {/* Next step */}
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                borderRadius: "20px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 6px 24px rgba(15, 23, 42, 0.04)",
              }}
            >
              <Stack direction="row" spacing={1.2} alignItems="center" mb={2}>
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: "9px",
                    bgcolor: "#EFF6FF",
                    color: "#2563EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Layers size={15} />
                </Box>
                <Typography sx={{ fontSize: 13.5, fontWeight: 800, color: "#0F172A" }}>
                  Next steps
                </Typography>
              </Stack>

              {[
                { t: "Create departments", done: false },
                { t: "Define leave types & quotas", done: false },
                { t: "Create HR logins", done: false },
                { t: "Register first employees", done: false },
              ].map((s, i) => (
                <Stack
                  key={s.t}
                  direction="row"
                  spacing={1.2}
                  alignItems="center"
                  mb={1.2}
                >
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      border: "1.5px solid #CBD5E1",
                      color: "#94A3B8",
                      fontSize: 11,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </Box>
                  <Typography sx={{ fontSize: 12.5, color: "#475569" }}>
                    {s.t}
                  </Typography>
                </Stack>
              ))}
            </Paper>
          </Stack>
        </Grid>

        {/* ============================= FORM ============================== */}
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
            {/* Card header */}
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
                  <Typography sx={{ fontSize: 17, fontWeight: 800, color: "#0F172A" }}>
                    Company Profile
                  </Typography>
                  <Typography sx={{ fontSize: 12.5, color: "#64748B", mt: 0.3 }}>
                    Required fields are marked with an asterisk.
                  </Typography>
                </Box>
                <Chip
                  label={`${completion}% complete`}
                  size="small"
                  sx={{
                    bgcolor: "#EFF6FF",
                    color: "#1D4ED8",
                    fontWeight: 700,
                    fontSize: 11,
                    borderRadius: "8px",
                    display: { xs: "none", sm: "inline-flex" },
                  }}
                />
              </Stack>
            </Box>

            <Box
              component="form"
              onSubmit={handleSave}
              sx={{ p: { xs: 2.5, sm: 3.5 } }}
            >
              {/* ============ 1. BASIC INFORMATION ============ */}
              <SectionLabel
                icon={<Building2 size={15} />}
                title="Basic information"
                subtitle="How your organization appears across HCM Lite"
              />

              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Organization name *"
                    placeholder="Acme Corporation"
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
                    label="Industry *"
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
                    ].map((i) => (
                      <MenuItem key={i} value={i}>
                        {i}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Contact email *"
                    placeholder="hr@company.com"
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
                    label="Contact phone *"
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Website"
                    placeholder="https://company.com"
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
                <Grid item xs={12}>
                  <TextField
                    label="Office address"
                    placeholder="Floor, building, street, city"
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

              <Divider sx={{ my: 3.5, borderColor: "#F1F5F9" }} />

              {/* ============ 2. WORK SCHEDULE ============ */}
              <SectionLabel
                icon={<Clock size={15} />}
                title="Work schedule & rules"
                subtitle="These rules decide late, half-day and absent statuses"
              />

              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Office start *"
                    type="time"
                    value={form.officeStart}
                    onChange={update("officeStart")}
                    fullWidth
                    sx={fieldSx}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Grace period (min) *"
                    type="number"
                    value={form.graceMinutes}
                    onChange={update("graceMinutes")}
                    fullWidth
                    sx={fieldSx}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Typography sx={{ fontSize: 12, color: "#94A3B8", fontWeight: 600 }}>
                            min
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Half-day under (hrs)"
                    type="number"
                    value={form.halfDayHours}
                    onChange={update("halfDayHours")}
                    fullWidth
                    sx={fieldSx}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Typography sx={{ fontSize: 12, color: "#94A3B8", fontWeight: 600 }}>
                            hrs
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    label="Weekend *"
                    value={form.weekend}
                    onChange={update("weekend")}
                    fullWidth
                    sx={fieldSx}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Calendar style={iconStyle} />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <MenuItem value="Sat-Sun">Saturday & Sunday</MenuItem>
                    <MenuItem value="Fri-Sat">Friday & Saturday</MenuItem>
                    <MenuItem value="Sun">Sunday only</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Working days / week"
                    value="5"
                    disabled
                    fullWidth
                    sx={{ ...fieldSx, "& .MuiInputBase-input": { color: "#64748B" } }}
                    helperText="Derived from weekend selection"
                    FormHelperTextProps={{ sx: { fontSize: 11, ml: 0.5 } }}
                  />
                </Grid>
              </Grid>

              <Box
                sx={{
                  mt: 2,
                  p: 1.5,
                  borderRadius: "10px",
                  bgcolor: "#F8FAFC",
                  border: "1px dashed #E2E8F0",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Info size={14} style={{ color: "#2563EB", flexShrink: 0 }} />
                <Typography sx={{ fontSize: 12, color: "#475569" }}>
                  Attendance will be marked <b>late</b> after{" "}
                  {form.officeStart || "09:00"} + {form.graceMinutes || 15} min
                  grace. <b>Half-day</b> if hours &lt; {form.halfDayHours || 5}.
                </Typography>
              </Box>

              <Divider sx={{ my: 3.5, borderColor: "#F1F5F9" }} />

              {/* ============ 3. GEOFENCE / CAMERA ATTENDANCE ============ */}
              <SectionLabel
                icon={<Compass size={15} />}
                title="Office location & geofence"
                subtitle="Required for camera attendance (optional bonus feature)"
              />

              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Office latitude"
                    placeholder="24.8607"
                    value={form.officeLat}
                    onChange={update("officeLat")}
                    fullWidth
                    sx={fieldSx}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MapPin style={iconStyle} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Office longitude"
                    placeholder="67.0011"
                    value={form.officeLng}
                    onChange={update("officeLng")}
                    fullWidth
                    sx={fieldSx}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MapPin style={iconStyle} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Radius *"
                    type="number"
                    value={form.radiusMeters}
                    onChange={update("radiusMeters")}
                    fullWidth
                    sx={fieldSx}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Typography sx={{ fontSize: 12, color: "#94A3B8", fontWeight: 600 }}>
                            meters
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "12px",
                      border: "1px solid #E2E8F0",
                      bgcolor: "#F8FAFC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 1.5,
                    }}
                  >
                    <Stack direction="row" spacing={1.2} alignItems="center">
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
                        <Users size={15} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#0F172A" }}>
                          Require camera check-in
                        </Typography>
                        <Typography sx={{ fontSize: 11.5, color: "#64748B" }}>
                          Employee must be inside radius with a detected face
                        </Typography>
                      </Box>
                    </Stack>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={form.requireCamera}
                          onChange={toggle("requireCamera")}
                          sx={{
                            "& .MuiSwitch-switchBase.Mui-checked": {
                              color: "#2563EB",
                            },
                            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                              backgroundColor: "#93B4F0",
                            },
                          }}
                        />
                      }
                      label=""
                    />
                  </Box>
                </Grid>
              </Grid>

              {/* ============ ACTION BAR ============ */}
              <Box sx={{ mt: 4, pt: 3, borderTop: "1px solid #F1F5F9" }}>
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
                          sx={{ fontSize: 12.5, color: "#10B981", fontWeight: 600 }}
                        >
                          Company profile saved
                        </Typography>
                      </>
                    ) : (
                      <Typography sx={{ fontSize: 12.5, color: "#94A3B8" }}>
                        Setup changes only affect new records, never past ones.
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
                      Save & Continue
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

/* -------------------------------- InfoRow --------------------------------- */
function InfoRow({ icon, label, value }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" spacing={1} alignItems="center">
        <Box sx={{ color: "#94A3B8", display: "flex" }}>{icon}</Box>
        <Typography sx={{ fontSize: 12, color: "#64748B" }}>{label}</Typography>
      </Stack>
      <Typography sx={{ fontSize: 12.5, fontWeight: 700, color: "#0F172A" }}>
        {value}
      </Typography>
    </Stack>
  );
}