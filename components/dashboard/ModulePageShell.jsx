
"use client";

import Link from "next/link";
import {
  Box,
  Paper,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

export default function ModulePageShell({
  title,
  description,
  icon: Icon,
  features = [],
}) {
  return (
    <Box sx={{ maxWidth: 1300, mx: "auto" }}>
      <Button
        component={Link}
        href="/dashboard"
        startIcon={<ArrowBackRoundedIcon />}
        sx={{
          mb: 2.5,
          color: "#47709F",
          fontWeight: 700,
          textTransform: "none",
          "&:hover": { bgcolor: "#E9F1FF" },
        }}
      >
        Back to overview
      </Button>

      <Paper
        elevation={0}
        sx={{
          p: { xs: 2.5, sm: 4 },
          borderRadius: "24px",
          bgcolor: "#FFFFFF",
          border: "1px solid #E7EDF6",
          boxShadow: "0 12px 36px rgba(29, 61, 105, 0.04)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              width: 58,
              height: 58,
              display: "grid",
              placeItems: "center",
              borderRadius: "18px",
              bgcolor: "#E8F0FF",
              color: "#245FC0",
            }}
          >
            {Icon && <Icon sx={{ fontSize: 30 }} />}
          </Box>

          <Box sx={{ flex: 1, minWidth: 180 }}>
            <Chip
              label="HCM LITE WORKSPACE"
              size="small"
              sx={{
                mb: 1,
                bgcolor: "#EDF4FF",
                color: "#285DA6",
                fontSize: 9,
                fontWeight: 800,
                letterSpacing: 0.8,
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: 25, sm: 31 },
                fontWeight: 850,
                letterSpacing: -0.6,
                color: "#183454",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                mt: 1,
                maxWidth: 720,
                color: "#73839B",
                fontSize: 13,
                lineHeight: 1.9,
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 4,
            p: { xs: 2, sm: 3 },
            borderRadius: "20px",
            bgcolor: "#F6F9FE",
            border: "1px solid #EAF0F8",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <AutoAwesomeRoundedIcon sx={{ color: "#3572CE", fontSize: 20 }} />
            <Typography sx={{ fontSize: 14, fontWeight: 800, color: "#23466F" }}>
              What belongs here
            </Typography>
          </Box>

          <Typography sx={{ fontSize: 12, color: "#75869E", mb: 2 }}>
            This page is ready for its module UI and backend integration.
          </Typography>

          <Box
            component="ul"
            sx={{
              pl: 2.5,
              my: 0,
              display: "grid",
              gap: 1.2,
              color: "#405B7C",
              fontSize: 13,
              lineHeight: 1.8,
            }}
          >
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </Box>
        </Box>

        <Typography
          sx={{
            mt: 2.5,
            fontSize: 11,
            color: "#8391A6",
            lineHeight: 1.8,
          }}
        >
          No sample records are shown. Once the relevant API is implemented,
          this area can load real data and display loading, empty, and error states.
        </Typography>
      </Paper>
    </Box>
  );
}
