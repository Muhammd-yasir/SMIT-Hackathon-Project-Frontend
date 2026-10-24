
"use client";

import Link from "next/link";
import { Box, Typography, Button, Breadcrumbs } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function DashboardHeader({
  title,
  description,
  actionLabel,
  actionHref,
}) {
  return (
    <Box sx={{ mb: 3.5 }}>
      {/* Breadcrumb navigation */}
      <Breadcrumbs
        separator="/"
        aria-label="breadcrumb"
        sx={{
          mb: 1.5,
          "& .MuiBreadcrumbs-separator": {
            mx: 1,
            color: "#A0AEC0",
          },
        }}
      >
        <Typography
          component={Link}
          href="/dashboard"
          sx={{
            fontSize: 12,
            color: "#71829A",
            textDecoration: "none",
            fontWeight: 600,
            "&:hover": {
              color: "#245FC0",
            },
          }}
        >
          Workspace
        </Typography>

        <Typography
          sx={{
            fontSize: 12,
            color: "#285DA6",
            fontWeight: 800,
          }}
        >
          {title}
        </Typography>
      </Breadcrumbs>

      {/* Page title and optional action */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
        }}
      >
        <Box>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: 25, sm: 31 },
              fontWeight: 850,
              color: "#183454",
              letterSpacing: -0.7,
              lineHeight: 1.3,
            }}
          >
            {title}
          </Typography>

          {description && (
            <Typography
              sx={{
                mt: 0.8,
                maxWidth: 700,
                fontSize: 13,
                color: "#73839B",
                lineHeight: 1.9,
              }}
            >
              {description}
            </Typography>
          )}
        </Box>

        {actionLabel && actionHref && (
          <Button
            component={Link}
            href={actionHref}
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              flexShrink: 0,
              px: 2.2,
              py: 1.25,
              borderRadius: "12px",
              bgcolor: "#245FC0",
              boxShadow: "0 7px 18px rgba(36, 95, 192, 0.18)",
              fontSize: 12.5,
              fontWeight: 800,
              textTransform: "none",
              "&:hover": {
                bgcolor: "#174A9D",
                boxShadow: "0 9px 22px rgba(36, 95, 192, 0.25)",
              },
            }}
          >
            {actionLabel}
          </Button>
        )}
      </Box>
    </Box>
  );
}
