
"use client";

import { Box, Paper, Typography, Stack, Grid } from "@mui/material";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import ModuleEmptyState from "@/components/dashboard/ModuleEmptyState";

const items = [
  { title: "Workforce", subtitle: "Employee and department insights", icon: GroupsRoundedIcon },
  { title: "Attendance", subtitle: "Attendance and punctuality trends", icon: EventAvailableRoundedIcon },
  { title: "Leave", subtitle: "Leave requests and usage patterns", icon: QueryStatsRoundedIcon },
  { title: "Payroll", subtitle: "Payroll summaries and cost analysis", icon: PaymentsRoundedIcon },
];

export default function AnalyticsPage() {
  return (
    <Box sx={{ maxWidth: 1100, mx: "auto" }}>
      <Typography variant="h5" fontWeight={800} color="#173354">Dashboards & analytics</Typography>
      <Typography color="text.secondary" fontSize={14} mt={.5} mb={3}>
        Explore people operations insights and reporting areas.
      </Typography>

      <Grid container spacing={2} mb={3}>
        {items.map(({ title, subtitle, icon: Icon }) => (
          <Grid item xs={12} sm={6} md={3} key={title}>
            <Paper sx={{ p: 2.5, height: "100%", borderRadius: 3, border: "1px solid #E5EBF4" }}>
              <Box sx={{ width: 44, height: 44, display: "grid", placeItems: "center", borderRadius: 2.5, bgcolor: "#EAF1FF", color: "#245BC0" }}>
                <Icon />
              </Box>
              <Typography fontWeight={800} color="#173354" mt={2}>{title}</Typography>
              <Typography color="text.secondary" fontSize={12} mt={.7} lineHeight={1.7}>{subtitle}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4, border: "1px solid #E5EBF4" }}>
        <Stack direction="row" alignItems="center" gap={1} mb={3}>
          <QueryStatsRoundedIcon sx={{ color: "#245BC0" }} />
          <Box>
            <Typography fontWeight={800} color="#173354">Reporting workspace</Typography>
            <Typography color="text.secondary" fontSize={13}>Your selected reports will be displayed here.</Typography>
          </Box>
        </Stack>
        <ModuleEmptyState title="Analytics will appear here" description="Charts and summary metrics will be based on actual employee, attendance, leave, and payroll data." />
      </Paper>
    </Box>
  );
}
