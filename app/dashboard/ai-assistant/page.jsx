
"use client";

import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

const suggestions = [
  "Summarize attendance for this month",
  "How many leave requests need review?",
  "Help me understand a payroll report",
];

export default function AIAssistantPage() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();

    const trimmed = question.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { id: crypto.randomUUID(), text: trimmed },
    ]);
    setQuestion("");
  };

  return (
    <Box>
      <DashboardHeader
        title="AI Assistant"
        description="A conversational workspace for HR questions, summaries, and guidance grounded in authorized company data."
      />

      <Paper elevation={0} sx={{ maxWidth: 950, mx: "auto", overflow: "hidden", borderRadius: 4, border: "1px solid #E5ECF5" }}>
        <Box sx={{ p: 2.5, display: "flex", alignItems: "center", gap: 1.5, borderBottom: "1px solid #E5ECF5" }}>
          <Avatar sx={{ bgcolor: "#F0E9FF", color: "#7651C8" }}>
            <AutoAwesomeRoundedIcon />
          </Avatar>
          <Box>
            <Typography fontWeight={800} color="#183454">HCM Assistant</Typography>
            <Typography fontSize={12} color="#77869D">HR support and data insights</Typography>
          </Box>
        </Box>

        <Box sx={{ minHeight: 320, maxHeight: 480, overflowY: "auto", p: { xs: 2, sm: 3 }, bgcolor: "#FBFCFF" }}>
          {messages.length === 0 ? (
            <Box sx={{ textAlign: "center", py: 5 }}>
              <Avatar sx={{ width: 60, height: 60, mx: "auto", mb: 2, bgcolor: "#F0E9FF", color: "#7651C8" }}>
                <AutoAwesomeRoundedIcon fontSize="large" />
              </Avatar>
              <Typography fontWeight={800} color="#183454" fontSize={18}>How can I help your team?</Typography>
              <Typography color="#77869D" fontSize={13} mt={1} mb={3}>
                Choose a sample question to get started.
              </Typography>
              <Stack gap={1.2} alignItems="center">
                {suggestions.map((suggestion) => (
                  <Button
                    key={suggestion}
                    variant="outlined"
                    onClick={() => setQuestion(suggestion)}
                    sx={{ textTransform: "none", borderColor: "#DCE6F4", color: "#34577E", borderRadius: 3 }}
                  >
                    {suggestion}
                  </Button>
                ))}
              </Stack>
            </Box>
          ) : (
            <Stack gap={2}>
              {messages.map((message) => (
                <Box key={message.id} sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Box sx={{ maxWidth: "85%", p: 2, bgcolor: "#245FC0", color: "#FFFFFF", borderRadius: "16px 16px 4px 16px" }}>
                    <Typography fontSize={14}>{message.text}</Typography>
                  </Box>
                </Box>
              ))}
              <Box sx={{ p: 2, borderRadius: 3, bgcolor: "#F0E9FF", color: "#6545A7" }}>
                <Typography fontSize={13} fontWeight={700}>AI connection needed</Typography>
                <Typography fontSize={13} mt={0.5}>
                  Your question has been added to this local conversation. Connect your AI backend to generate an answer using authorized HCM data.
                </Typography>
              </Box>
            </Stack>
          )}
        </Box>

        <Box component="form" onSubmit={sendMessage} sx={{ p: 2, borderTop: "1px solid #E5ECF5" }}>
          <Stack direction="row" gap={1}>
            <TextField
              fullWidth
              size="small"
              placeholder="Ask an HR-related question..."
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
            />
            <Button type="submit" variant="contained" aria-label="Send question" disabled={!question.trim()} sx={{ minWidth: 48 }}>
              <SendRoundedIcon />
            </Button>
          </Stack>
          <Typography fontSize={11} color="#8A98AC" mt={1}>
            AI responses should respect user roles and access permissions.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
