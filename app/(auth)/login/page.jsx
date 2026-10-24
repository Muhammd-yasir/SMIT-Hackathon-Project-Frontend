
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Alert,
  CircularProgress,
  InputAdornment,
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
      // Keep the existing backend endpoint and payload unchanged.
      const result = await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      // Save the returned token using your auth.js helper.
      saveSession(result);

      router.replace("/dashboard");
    } catch (err) {
      setError(err.message || "Unable to log in. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
        px: 2,
        background:
          "linear-gradient(135deg, #eff6ff 0%, #f8fafc 55%, #ecfeff 100%)",
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Box
            sx={{
              width: 58,
              height: 58,
              mx: "auto",
              mb: 1.5,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#1d4ed8",
              color: "white",
              fontSize: 25,
              fontWeight: 800,
              boxShadow: "0 8px 24px rgba(29,78,216,0.22)",
            }}
          >
            H
          </Box>

          <Typography variant="h4" fontWeight={800} color="#0f172a">
            HCM Lite
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Human Capital Management, made simpler.
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 4,
            border: "1px solid #e2e8f0",
            boxShadow: "0 20px 60px rgba(15,23,42,0.08)",
          }}
        >
          <Typography variant="h5" fontWeight={750} color="#0f172a">
            Welcome back
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1, mb: 3 }}>
            Log in to access your HCM Lite workspace.
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <Typography
              component="label"
              htmlFor="login-email"
              fontWeight={600}
              fontSize={14}
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
              required
              autoComplete="email"
              margin="dense"
              sx={{ mb: 2 }}
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
              fontWeight={600}
              fontSize={14}
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
              required
              autoComplete="current-password"
              margin="dense"
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
                py: 1.4,
                borderRadius: 2,
                textTransform: "none",
                fontSize: 16,
                fontWeight: 700,
                bgcolor: "#1d4ed8",
                "&:hover": { bgcolor: "#1e40af" },
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Log in"
              )}
            </Button>
          </Box>

          <Typography textAlign="center" sx={{ mt: 3 }} color="text.secondary">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              style={{
                color: "#1d4ed8",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Create account
            </Link>
          </Typography>
        </Paper>

        <Typography
          textAlign="center"
          color="text.secondary"
          fontSize={12}
          sx={{ mt: 3 }}
        >
          HCM Lite · Human Capital Management System
        </Typography>
      </Container>
    </Box>
  );
}
