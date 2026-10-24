
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
        py: { xs: 4, sm: 6 },
        px: 2,
        textAlign: "center",
        borderRadius: 3,
        bgcolor: "#F8FAFE",
        border: "1px dashed #DCE5F2",
      }}
    >
      {Icon && (
        <Box
          sx={{
            width: 54,
            height: 54,
            display: "grid",
            placeItems: "center",
            mx: "auto",
            mb: 2,
            borderRadius: "17px",
            bgcolor: "#EAF1FF",
            color: "#245BC0",
          }}
        >
          <Icon sx={{ fontSize: 27 }} />
        </Box>
      )}
      <Typography fontWeight={800} color="#183454">
        {title}
      </Typography>
      <Typography
        sx={{
          maxWidth: 440,
          mx: "auto",
          mt: 1,
          fontSize: 13,
          lineHeight: 1.9,
          color: "#77869D",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
