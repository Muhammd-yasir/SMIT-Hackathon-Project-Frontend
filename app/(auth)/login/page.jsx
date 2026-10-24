
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { apiRequest } from "@/lib/api";
import { saveSession } from "@/lib/auth";

export default function LoginPage() {
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
      const result = await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      saveSession(result);
      router.replace("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      className="flex min-h-screen items-center justify-center px-4 py-10"
      sx={{
        background:
          "radial-gradient(circle at top left, #dbeafe 0, transparent 40%), linear-gradient(135deg, #f8fafc, #eef2ff)",
      }}
    >
      <Container maxWidth="sm">
        <Box className="mb-7 text-center">
          <Box
            className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-extrabold text-white"
            sx={{
              background: "linear-gradient(135deg, #2563eb, #4f46e5)",
              boxShadow: "0 10px 25px rgba(37,99,235,0.25)",
            }}
          >
            H
          </Box>

          <Typography
            variant="h4"
            className="font-extrabold tracking-tight"
            sx={{ color: "#0f172a", fontWeight: 800 }}
          >
            HCM Lite
          </Typography>

          <Typography sx={{ color: "#64748b", mt: 1 }}>
            AI-assisted Human Capital Management
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 4,
            border: "1px solid #e2e8f0",
            backgroundColor: "rgba(255,255,255,0.94)",
            boxShadow: "0 24px 70px rgba(15,23,42,0.09)",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 800, color: "#0f172a" }}
          >
            Welcome back
          </Typography>

          <Typography sx={{ color: "#64748b", mt: 1, mb: 3 }}>
            Sign in to access your people management workspace.
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <Typography
              component="label"
              htmlFor="login-email"
              sx={{ display: "block", mb: 0.5, fontWeight: 600, fontSize: 14 }}
            >
              Email address
            </Typography>

            <TextField
              id="login-email"
              fullWidth
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
              sx={{ mb: 2.5 }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon color="action" />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <Typography
              component="label"
              htmlFor="login-password"
              sx={{ display: "block", mb: 0.5, fontWeight: 600, fontSize: 14 }}
            >
              Password
            </Typography>

            <TextField
              id="login-password"
              fullWidth
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
              sx={{ mb: 3 }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon color="action" />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                py: 1.5,
                borderRadius: 2.5,
                textTransform: "none",
                fontWeight: 700,
                fontSize: 15,
                background: "linear-gradient(90deg, #2563eb, #4f46e5)",
                boxShadow: "none",
                "&:hover": {
                  background: "linear-gradient(90deg, #1d4ed8, #4338ca)",
                  boxShadow: "0 8px 18px rgba(37,99,235,0.2)",
                },
              }}
            >
              {loading ? (
                <CircularProgress size={23} color="inherit" />
              ) : (
                "Sign in to HCM Lite"
              )}
            </Button>
          </Box>

          <Typography
            sx={{ mt: 3, textAlign: "center", color: "#64748b", fontSize: 14 }}
          >
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-bold text-blue-700 no-underline hover:text-indigo-700"
            >
              Create account
            </Link>
          </Typography>
        </Paper>

        <Typography
          sx={{ mt: 3, textAlign: "center", color: "#94a3b8", fontSize: 12 }}
        >
          HCM Lite · Admin, HR and Employee workspace
        </Typography>
      </Container>
    </Box>
  );
}
