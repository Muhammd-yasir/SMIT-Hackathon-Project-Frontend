
"use client";

import Link from "next/link";
import { Box, Paper, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function ModuleCard({
  title,
  description,
  href,
  icon: Icon,
  category = "WORKSPACE",
  tint = "#EAF1FF",
  iconColor = "#245BC0",
}) {
  return (
    <Paper
      component={Link}
      href={href}
      elevation={0}
      sx={{
        minHeight: 190,
        display: "flex",
        flexDirection: "column",
        p: 2.5,
        borderRadius: "20px",
        textDecoration: "none",
        bgcolor: "#FFFFFF",
        border: "1px solid #E9EEF6",
        boxShadow: "0 4px 16px rgba(28, 57, 96, 0.025)",
        transition: "all 180ms ease",
        "&:hover": {
          borderColor: "#B9D0F4",
          boxShadow: "0 15px 32px rgba(32, 80, 146, 0.09)",
          transform: "translateY(-4px)",
        },
        "&:focus-visible": {
          outline: "3px solid #7EAEFF",
          outlineOffset: 3,
        },
      }}
    >
      {/* Icon and category */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
          mb: 2.1,
        }}
      >
        <Box
          sx={{
            width: 46,
            height: 46,
            display: "grid",
            placeItems: "center",
            borderRadius: "15px",
            bgcolor: tint,
            color: iconColor,
          }}
        >
          {Icon && <Icon sx={{ fontSize: 24 }} />}
        </Box>

        <Typography
          sx={{
            fontSize: 9,
            letterSpacing: 0.9,
            color: "#8A98AC",
            fontWeight: 800,
          }}
        >
          {category}
        </Typography>
      </Box>

      {/* Card content */}
      <Typography
        sx={{
          fontSize: 15,
          fontWeight: 800,
          color: "#1B3355",
          mb: 0.8,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: 12,
          color: "#77869D",
          lineHeight: 1.8,
          flex: 1,
        }}
      >
        {description}
      </Typography>

      {/* Navigation hint */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.6,
          mt: 2,
          color: "#2A65BC",
          fontWeight: 800,
          fontSize: 11.5,
        }}
      >
        Open workspace
        <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
      </Box>
    </Paper>
  );
}
