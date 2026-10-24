
"use client";

import { Box, Paper, Typography, Stack } from "@mui/material";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import ModuleEmptyState from "@/components/dashboard/ModuleEmptyState";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

const reports = [
  { title: "Workforce", detail: "Employee distribution and department breakdowns.", icon: GroupsRoundedIcon, color: "#245BC0", tint: "#EAF1FF" },
  { title: "Attendance", detail: "Attendance patterns and working hours.", icon: AccessTimeRoundedIcon, color: "#C57919", tint: "#FFF3E4" },
  { title: "Leave", detail: "Leave activity and request trends.", icon: EventAvailableRoundedIcon, color: "#7951C8", tint: "#F1EAFE" },
  { title: "Payroll", detail: "Payroll totals and pay-period comparisons.", icon: PaymentsRoundedIcon, color: "#147FA7", tint: "#E5F6FF" },
];

export default function AnalyticsPage() {
  return (
    <Box>
      <DashboardHeader
        title="Dashboards & Analytics"
        description="Turn workforce activity into clear insights that support better decisions."
      />

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2,minmax(0,1fr))" }, gap: 2, mb: 3 }}>
        {reports.map((report) => {
          const Icon = report.icon;
          return (
            <Paper key={report.title} elevation={0} sx={{ p: 2.5, borderRadius: 4, border: "1px solid #E5ECF5" }}>
              <Stack direction="row" gap={2} alignItems="flex-start">
                <Box sx={{ width: 48, height: 48, flexShrink: 0, display: "grid", placeItems: "center", bgcolor: report.tint, color: report.color, borderRadius: 3 }}>
                  <Icon />
                </Box>
                <Box>
                  <Typography fontWeight={850} color="#183454">{report.title}</Typography>
                  <Typography fontSize={13} lineHeight={1.8} color="#77869D" mt={0.5}>{report.detail}</Typography>
                </Box>
              </Stack>
            </Paper>
          );
        })}
      </Box>

      <Paper elevation={0} sx={{ p: { xs: 2.5, sm: 3 }, borderRadius: 4, border: "1px solid #E5ECF5" }}>
        <Stack direction="row" alignItems="center" gap={1.5} mb={3}>
          <Box sx={{ p: 1.3, borderRadius: 3, bgcolor: "#E8F0FF", color: "#355ED8", display: "grid", placeItems: "center" }}>
            <InsightsRoundedIcon />
          </Box>
          <Box>
            <Typography fontWeight={850} color="#183454">Reporting workspace</Typography>
            <Typography fontSize={12} color="#77869D">Workforce metrics and trends</Typography>
          </Box>
        </Stack>
        <ModuleEmptyState
          icon={InsightsRoundedIcon}
          title="No reports to display"
          description="Your analytics view will display workforce metrics and charts calculated from actual organization records."
        />
      </Paper>
    </Box>
  );
}
