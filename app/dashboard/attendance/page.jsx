
"use client";

import { useState } from "react";
import { Alert, Box, Button, Paper, Stack, Typography } from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function AttendancePage() {
  const [status, setStatus] = useState("not-checked-in");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [message, setMessage] = useState("");

  const currentTime = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const handleCheckIn = () => {
    const time = currentTime();
    setCheckIn(time);
    setCheckOut("");
    setStatus("checked-in");
    setMessage(`Check-in recorded locally at ${time}.`);
  };

  const handleCheckOut = () => {
    const time = currentTime();
    setCheckOut(time);
    setStatus("checked-out");
    setMessage(`Check-out recorded locally at ${time}.`);
  };

  return (
    <Box>
      <DashboardHeader
        title="Attendance"
        description="Record the start and end of your working day."
      />

      <Paper elevation={0} sx={{ p: { xs: 3, sm: 4 }, maxWidth: 850, borderRadius: 4, border: "1px solid #E5ECF5" }}>
        <Stack direction="row" alignItems="center" gap={2} mb={3}>
          <Box sx={{ p: 1.5, borderRadius: 3, bgcolor: "#FFF3E4", color: "#C57919", display: "grid", placeItems: "center" }}>
            <AccessTimeRoundedIcon />
          </Box>
          <Box>
            <Typography fontWeight={800} color="#183454">Today's attendance</Typography>
            <Typography fontSize={13} color="#77869D">
              {new Date().toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </Typography>
          </Box>
        </Stack>

        {message && <Alert severity="info" sx={{ mb: 3 }}>{message}</Alert>}

        <Box sx={{ bgcolor: "#F5F8FD", borderRadius: 3, p: 3, mb: 3 }}>
          <Typography fontSize={12} color="#77869D" mb={1}>CURRENT STATUS</Typography>
          <Typography fontSize={23} fontWeight={800} color="#183454">
            {status === "checked-in" ? "You're checked in" : status === "checked-out" ? "Workday completed" : "Not checked in yet"}
          </Typography>
          <Typography fontSize={13} color="#77869D" mt={1}>
            {status === "checked-in"
              ? "Remember to check out when your workday ends."
              : status === "checked-out"
                ? "Your local check-in and check-out times are shown below."
                : "Check in when you start your workday."}
          </Typography>
        </Box>

        <Stack direction={{ xs: "column", sm: "row" }} gap={2} mb={3}>
          <Paper variant="outlined" sx={{ flex: 1, p: 2.5, borderRadius: 3 }}>
            <Typography fontSize={12} color="#77869D">Check-in time</Typography>
            <Typography fontSize={24} fontWeight={800} color="#183454" mt={1}>{checkIn || "—"}</Typography>
          </Paper>
          <Paper variant="outlined" sx={{ flex: 1, p: 2.5, borderRadius: 3 }}>
            <Typography fontSize={12} color="#77869D">Check-out time</Typography>
            <Typography fontSize={24} fontWeight={800} color="#183454" mt={1}>{checkOut || "—"}</Typography>
          </Paper>
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} gap={1.5}>
          <Button
            variant="contained"
            startIcon={<LoginRoundedIcon />}
            disabled={status === "checked-in"}
            onClick={handleCheckIn}
            sx={{ textTransform: "none", py: 1.2 }}
          >
            Check in
          </Button>
          <Button
            variant="outlined"
            startIcon={<LogoutRoundedIcon />}
            disabled={status !== "checked-in"}
            onClick={handleCheckOut}
            sx={{ textTransform: "none", py: 1.2 }}
          >
            Check out
          </Button>
        </Stack>
        <Typography fontSize={12} color="#8A98AC" mt={3}>
          This is a frontend demonstration. Connect the attendance API to record verified attendance.
        </Typography>
      </Paper>
    </Box>
  );
}
