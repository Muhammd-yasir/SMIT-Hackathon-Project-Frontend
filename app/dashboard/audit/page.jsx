
"use client";

import { useState } from "react";
import { Box, Paper, Typography, Stack, TextField, MenuItem, Chip } from "@mui/material";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import ModuleEmptyState from "@/components/dashboard/ModuleEmptyState";

export default function AuditPage() {
  const [category, setCategory] = useState("all");

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto" }}>
      <Typography variant="h5" fontWeight={800} color="#173354">Audit log</Typography>
      <Typography color="text.secondary" fontSize={14} mt={.5} mb={3}>
        Review system activity and maintain visibility into important actions.
      </Typography>

      <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4, border: "1px solid #E5EBF4", boxShadow: "0 8px 30px #18345408" }}>
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ sm: "center" }} gap={2} mb={3}>
          <Stack direction="row" alignItems="center" gap={1.5}>
            <Box sx={{ p: 1.2, bgcolor: "#EAF1FF", color: "#245BC0", borderRadius: 2.5 }}>
              <FactCheckRoundedIcon />
            </Box>
            <Box>
              <Typography fontWeight={800} color="#173354">Activity history</Typography>
              <Typography fontSize={13} color="text.secondary">System events and administrative actions.</Typography>
            </Box>
          </Stack>
          <Chip icon={<FilterListRoundedIcon />} label="Filters" variant="outlined" sx={{ borderColor: "#D7E2F0" }} />
        </Stack>

        <TextField select label="Activity category" value={category} onChange={(e) => setCategory(e.target.value)}
          sx={{ width: { xs: "100%", sm: 260 }, mb: 3, "& .MuiOutlinedInput-root": { borderRadius: 2 } }}>
          <MenuItem value="all">All activity</MenuItem>
          <MenuItem value="auth">Authentication</MenuItem>
          <MenuItem value="employee">Employee changes</MenuItem>
          <MenuItem value="leave">Leave management</MenuItem>
          <MenuItem value="payroll">Payroll</MenuItem>
        </TextField>

        <ModuleEmptyState
          icon={FactCheckRoundedIcon}
          title="No activity records available"
          description={category === "all"
            ? "Recorded actions will appear here once audit logging is connected."
            : "There are no loaded records for this category yet. Audit results will be filterable when data is available."}
        />
      </Paper>
    </Box>
  );
}
