
"use client";

import { useState } from "react";
import {
  Box,
  Chip,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function AuditPage() {
  const [filter, setFilter] = useState("All activity");

  // Replace this array with records returned by your audit-log API.
  const auditRecords = [];

  const filteredRecords =
    filter === "All activity"
      ? auditRecords
      : auditRecords.filter((record) => record.category === filter);

  return (
    <Box>
      <DashboardHeader
        title="Audit Log"
        description="Review recorded system activity to support accountability and traceability."
      />

      <Paper elevation={0} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4, border: "1px solid #E5ECF5" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "stretch", sm: "center" }}
          justifyContent="space-between"
          gap={2}
          mb={3}
        >
          <Box>
            <Typography fontWeight={800} color="#183454">Activity history</Typography>
            <Typography fontSize={13} color="#77869D" mt={0.5}>
              {filteredRecords.length} recorded event{filteredRecords.length === 1 ? "" : "s"}
            </Typography>
          </Box>

          <TextField
            select
            size="small"
            label="Filter activity"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            sx={{ minWidth: 190 }}
          >
            {["All activity", "Authentication", "Employees", "Attendance", "Leave", "Payroll", "Organization"].map((category) => (
              <MenuItem key={category} value={category}>{category}</MenuItem>
            ))}
          </TextField>
        </Stack>

        {filteredRecords.length === 0 ? (
          <Box sx={{ py: 7, px: 2, textAlign: "center", bgcolor: "#F7F9FD", borderRadius: 3 }}>
            <Box sx={{ width: 58, height: 58, display: "grid", placeItems: "center", mx: "auto", mb: 2, borderRadius: 4, bgcolor: "#E8F5F9", color: "#237B91" }}>
              <FactCheckRoundedIcon fontSize="large" />
            </Box>
            <Typography fontWeight={800} color="#183454">No audit events to display</Typography>
            <Typography maxWidth={480} mx="auto" fontSize={13} lineHeight={1.9} color="#77869D" mt={1}>
              Activity will appear here when the backend records events such as sign-ins, employee changes, attendance actions, leave decisions, and payroll updates.
            </Typography>
          </Box>
        ) : (
          <Stack gap={0}>
            {filteredRecords.map((record) => (
              <Box key={record.id} sx={{ py: 2, display: "flex", alignItems: "flex-start", gap: 2, borderBottom: "1px solid #EDF1F7" }}>
                <Box sx={{ width: 38, height: 38, flexShrink: 0, display: "grid", placeItems: "center", borderRadius: 2.5, bgcolor: "#E8F5F9", color: "#237B91" }}>
                  <FactCheckRoundedIcon fontSize="small" />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography fontWeight={700} color="#183454">{record.action}</Typography>
                  <Typography fontSize={12} color="#77869D" mt={0.5}>
                    {record.actor} · {record.timestamp}
                  </Typography>
                </Box>
                <Chip size="small" label={record.category} />
              </Box>
            ))}
          </Stack>
        )}
      </Paper>
    </Box>
  );
}
