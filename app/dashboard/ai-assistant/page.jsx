
"use client";

import { useState } from "react";
import { Box, Paper, Typography, Stack, TextField, Button, Chip } from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";

const suggestions = [
  "Summarize workforce activity",
  "Explain an attendance report",
  "Help review a leave policy",
];

export default function AIAssistantPage() {
  const [question, setQuestion] = useState("");

  return (
    <Box sx={{ maxWidth: 1000, mx: "auto" }}>
      <Stack direction="row" alignItems="center" gap={2} mb={3}>
        <Box sx={{ p: 1.5, borderRadius: 3, bgcolor: "#EAF1FF", color: "#245BC0" }}>
          <AutoAwesomeRoundedIcon />
        </Box>
        <Box>
          <Typography variant="h5" fontWeight={800} color="#173354">AI assistant</Typography>
          <Typography color="text.secondary" fontSize={14}>A workspace for HR questions and people operations support.</Typography>
        </Box>
      </Stack>

      <Paper sx={{ borderRadius: 4, overflow: "hidden", border: "1px solid #E5EBF4", boxShadow: "0 8px 30px #18345408" }}>
        <Box sx={{ p: 3, background: "linear-gradient(120deg,#173A75,#2868CF)", color: "white" }}>
          <Stack direction="row" alignItems="center" gap={1}>
            <SmartToyRoundedIcon />
            <Typography fontWeight={800}>HCM Assistant</Typography>
            <Chip label="AI workspace" size="small" sx={{ ml: "auto", color: "white", bgcolor: "#FFFFFF20" }} />
          </Stack>
          <Typography fontSize={13} sx={{ mt: 1, color: "#E0EAFF", lineHeight: 1.8 }}>
            Ask a question or choose a suggested prompt to get started.
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          <Box sx={{ textAlign: "center", py: 3 }}>
            <Box sx={{ width: 64, height: 64, borderRadius: 4, bgcolor: "#EAF1FF", color: "#245BC0", display: "grid", placeItems: "center", mx: "auto", mb: 2 }}>
              <AutoAwesomeRoundedIcon sx={{ fontSize: 30 }} />
            </Box>
            <Typography fontWeight={800} color="#173354">How can I help you today?</Typography>
            <Typography fontSize={13} color="text.secondary" mt={1}>Choose a prompt below or type your own question.</Typography>
          </Box>

          <Stack direction="row" flexWrap="wrap" useFlexGap gap={1} justifyContent="center" mb={3}>
            {suggestions.map((item) => (
              <Chip key={item} label={item} onClick={() => setQuestion(item)} variant="outlined"
                sx={{ borderColor: "#D7E2F0", borderRadius: 2, cursor: "pointer", py: 2.2 }} />
            ))}
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} gap={1.5}>
            <TextField
              fullWidth multiline maxRows={4}
              placeholder="Ask about HR processes, policies, or reports..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
            />
            <Button disabled={!question.trim()} variant="contained" endIcon={<SendRoundedIcon />}
              sx={{ borderRadius: 2, px: 3, textTransform: "none", fontWeight: 700 }}>
              Send
            </Button>
          </Stack>
          <Typography fontSize={12} color="text.secondary" mt={1.5}>
            AI responses will be enabled after the assistant service is connected.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
