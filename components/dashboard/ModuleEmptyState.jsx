
"use client";

import { Box, Typography } from "@mui/material";

export default function ModuleEmptyState({
  icon: Icon,
  title,
  description,
}) {
  return (
    <Box
      sx={{
        py: 5,
        px: 2.5,
        textAlign: "center",
        border: "1px dashed #D7E2F0",
        borderRadius: 3,
        bgcolor: "#F8FAFD",
      }}
    >
      {Icon && (
        <Box
          sx={{
            width: 58,
            height: 58,
            mx: "auto",
            mb: 2,
            display: "grid",
            placeItems: "center",
            borderRadius: 3,
            bgcolor: "#E9F1FF",
            color: "#245BC0",
          }}
        >
          <Icon sx={{ fontSize: 28 }} />
        </Box>
      )}
      <Typography fontWeight={800} color="#183454">
        {title}
      </Typography>
      <Typography
        sx={{
          mt: 1,
          maxWidth: 420,
          mx: "auto",
          color: "#73839A",
          fontSize: 13,
          lineHeight: 1.8,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
