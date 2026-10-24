
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Alert, Box, Button, CircularProgress, Container,
  InputAdornment, Paper, TextField, Typography,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { apiRequest } from "@/lib/api";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await apiRequest("/auth/sign-up", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      window.alert(result.message || "Account created successfully.");
      router.push("/login");
    } catch (err) {
      setError(err.message || "We couldn't create your account. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10"
      sx={{ background: "linear-gradient(135deg, #eff6ff 0%, #f8fbff 48%, #dbeafe 100%)" }}
    >
      <Box sx={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", bgcolor: "#bfdbfe", opacity: 0.35, top: -160, right: -100, filter: "blur(4px)" }} />
      <Box sx={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", bgcolor: "#93c5fd", opacity: 0.2, bottom: -120, left: -70, filter: "blur(8px)" }} />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Paper
          elevation={0}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
            overflow: "hidden",
            borderRadius: { xs: 4, md: 6 },
            border: "1px solid rgba(255,255,255,0.9)",
            boxShadow: "0 30px 90px rgba(30,64,175,0.14)",
          }}
        >
          <Box
            sx={{
              p: { xs: 3, sm: 4, md: 5 }, color: "white",
              display: "flex", flexDirection: "column", justifyContent: "space-between",
              minHeight: { md: 510 }, position: "relative", overflow: "hidden",
              background: "linear-gradient(145deg, #1d4ed8, #2563eb 55%, #60a5fa)",
            }}
          >
            <Box sx={{ position: "absolute", width: 220, height: 220, border: "1px solid rgba(255,255,255,0.18)", borderRadius: "50%", right: -80, top: 100 }} />
            <Box sx={{ position: "relative" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box sx={{ width: 44, height: 44, borderRadius: 3, display: "grid", placeItems: "center", bgcolor: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)", fontWeight: 900, fontSize: 23 }}>
                  H
                </Box>
                <Box>
                  <Typography fontWeight={800} fontSize={20}>HCM Lite</Typography>
                  <Typography fontSize={11} sx={{ color: "#dbeafe" }}>PEOPLE FIRST</Typography>
                </Box>
              </Box>

              <Typography sx={{ mt: { xs: 4, md: 7 }, fontSize: { xs: 27, md: 34 }, lineHeight: 1.2, fontWeight: 800, letterSpacing: "-0.8px" }}>
                A better workplace begins with a better experience.
              </Typography>
              <Typography sx={{ mt: 2, color: "#dbeafe", lineHeight: 1.9, fontSize: 14 }}>
                Join a workspace designed to make everyday people management feel simpler, clearer, and more connected.
              </Typography>
            </Box>

            <Box sx={{ position: "relative", mt: 4, p: 2.5, borderRadius: 3, bgcolor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <FavoriteRoundedIcon sx={{ color: "#bfdbfe", mb: 1 }} />
              <Typography fontSize={14} fontWeight={600} lineHeight={1.8}>
                People are more than records. They are the heart of every organization.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ p: { xs: 3, sm: 4, md: 5 }, display: "flex", flexDirection: "column", justifyContent: "center", bgcolor: "#fff" }}>
            <Typography sx={{ color: "#2563eb", fontSize: 12, fontWeight: 800, letterSpacing: 1.5, mb: 1 }}>
              YOUR JOURNEY STARTS HERE
            </Typography>
            <Typography sx={{ fontSize: 30, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.8px" }}>
              Create an account
            </Typography>
            <Typography sx={{ color: "#64748b", mt: 1, mb: 3.5, fontSize: 14, lineHeight: 1.8 }}>
              Just two details to get you started.
            </Typography>

            {error && <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>{error}</Alert>}

            <Box component="form" onSubmit={handleSubmit}>
              <Typography component="label" htmlFor="signup-email" sx={{ display: "block", mb: 0.8, color: "#334155", fontWeight: 700, fontSize: 13 }}>
                Email address
              </Typography>
              <TextField
                id="signup-email"
                fullWidth
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                sx={{ mb: 2.5, "& .MuiOutlinedInput-root": { borderRadius: 2.5, bgcolor: "#f8fafc", "& fieldset": { borderColor: "#e2e8f0" }, "&.Mui-focused fieldset": { borderColor: "#3b82f6" } } }}
                slotProps={{ input: { startAdornment: <InputAdornment position="start"><EmailOutlinedIcon sx={{ color: "#94a3b8" }} /></InputAdornment> } }}
              />

              <Typography component="label" htmlFor="signup-password" sx={{ display: "block", mb: 0.8, color: "#334155", fontWeight: 700, fontSize: 13 }}>
                Password
              </Typography>
              <TextField
                id="signup-password"
                fullWidth
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
                sx={{ mb: 3, "& .MuiOutlinedInput-root": { borderRadius: 2.5, bgcolor: "#f8fafc", "& fieldset": { borderColor: "#e2e8f0" }, "&.Mui-focused fieldset": { borderColor: "#3b82f6" } } }}
                slotProps={{ input: { startAdornment: <InputAdornment position="start"><LockOutlinedIcon sx={{ color: "#94a3b8" }} /></InputAdornment> } }}
              />

              <Button
                type="submit"
                fullWidth
                disabled={loading}
                sx={{
                  py: 1.6, borderRadius: 2.5, textTransform: "none",
                  fontWeight: 800, fontSize: 15, color: "white",
                  background: "linear-gradient(100deg, #2563eb, #4f46e5)",
                  boxShadow: "0 10px 24px rgba(37,99,235,0.22)",
                  "&:hover": { background: "linear-gradient(100deg, #1d4ed8, #4338ca)", boxShadow: "0 13px 28px rgba(37,99,235,0.3)" },
                }}
              >
                {loading ? <CircularProgress size={23} sx={{ color: "white" }} /> : "Create my account"}
              </Button>
            </Box>

            <Typography sx={{ mt: 3, textAlign: "center", fontSize: 13, color: "#64748b" }}>
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-blue-700 no-underline hover:text-indigo-700">
                Sign in
              </Link>
            </Typography>
            <Typography sx={{ mt: 4, textAlign: "center", color: "#94a3b8", fontSize: 11 }}>
              HCM Lite · Human Capital Management
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
