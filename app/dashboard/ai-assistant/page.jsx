
"use client";

import { useState } from "react";
import {
  Box, Paper, Typography, Stack, TextField, Button, Chip,
} from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

const suggestions = [
  "Summarize workforce activity",
  "Explain an attendance report",
  "Help review leave policies",
];

export default function AIAssistantPage() {
  const [question, setQuestion] = useState("");

  return (
    <Box>
      <DashboardHeader
        title="AI Assistant"
        description="An AI workspace for HR questions, policy guidance, and workforce insights."
      />

      <Paper elevation={0} sx={{ maxWidth: 1000, mx: "auto", overflow: "hidden", borderRadius: 4, border: "1px solid #E5ECF5" }}>
        <Box sx={{ p: { xs: 2.5, sm: 3 }, display: "flex", alignItems: "center", gap: 1.5, background: "linear-gradient(120deg,#F3F7FF,#FFFFFF)", borderBottom: "1px solid #E5ECF5" }}>
          <Box sx={{ width: 48, height: 48, display: "grid", placeItems: "center", borderRadius: 3, bgcolor: "#F0E9FF", color: "#7651C8" }}>
            <AutoAwesomeRoundedIcon />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography fontWeight={850} color="#183454">HCM Assistant</Typography>
            <Typography fontSize={12} color="#77869D">Your HR conversation space</Typography>
          </Box>
          <Chip icon={<ShieldRoundedIcon />} label="Privacy-aware" size="small" sx={{ bgcolor: "#E5F8F1", color: "#168765", "& .MuiChip-icon": { color: "#168765" } }} />
        </Box>

        <Box sx={{ p: { xs: 2, sm: 4 }, minHeight: 350, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
          <Box sx={{ width: 70, height: 70, display: "grid", placeItems: "center", borderRadius: "23px", bgcolor: "#F0E9FF", color: "#7651C8", mb: 2 }}>
            <AutoAwesomeRoundedIcon sx={{ fontSize: 34 }} />
          </Box>
          <Typography fontSize={22} fontWeight={850} color="#183454">How can I help you today?</Typography>
          <Typography maxWidth={470} fontSize={13} lineHeight={1.9} color="#77869D" mt={1}>
            Ask about HR processes, workplace policies, or workforce reports.
          </Typography>

          <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1} mt={3}>
            {suggestions.map((suggestion) => (
              <Chip
                key={suggestion}
                label={suggestion}
                clickable
                onClick={() => setQuestion(suggestion)}
                variant="outlined"
                sx={{ borderColor: "#DCE5F2", color: "#34577E", bgcolor: "#FFFFFF", height: "auto", py: 0.7, "& .MuiChip-label": { whiteSpace: "normal" } }}
              />
            ))}
          </Stack>
        </Box>

        <Box component="form" onSubmit={(e) => e.preventDefault()} sx={{ p: 2, borderTop: "1px solid #E5ECF5" }}>
          <Stack direction="row" gap={1}>
            <TextField
              fullWidth
              size="small"
              placeholder="Write your question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2.5 } }}
            />
            <Button type="button" variant="contained" disabled={!question.trim()} aria-label="Send question" sx={{ minWidth: 48, borderRadius: 2.5 }}>
              <SendRoundedIcon />
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
