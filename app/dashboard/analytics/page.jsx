
"use client";

import { Box, Paper, Stack, Typography } from "@mui/material";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

const analyticsAreas = [
  {
    title: "Workforce overview",
    description: "Employee totals and workforce composition.",
    icon: GroupsRoundedIcon,
    color: "#245BC0",
    tint: "#EAF1FF",
  },
  {
    title: "Attendance trends",
    description: "Check-in patterns and attendance summaries.",
    icon: AccessTimeRoundedIcon,
    color: "#C57919",
    tint: "#FFF3E4",
  },
  {
    title: "Payroll overview",
    description: "Salary totals and payroll-period comparisons.",
    icon: PaymentsRoundedIcon,
    color: "#147FA7",
    tint: "#E5F6FF",
  },
];

export default function AnalyticsPage() {
  return (
    <Box>
      <DashboardHeader
        title="Dashboards & Analytics"
        description="Understand workforce activity through clear, meaningful reports based on your organization's data."
      />

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" }, gap: 2 }}>
        {analyticsAreas.map((item) => {
          const Icon = item.icon;

          return (
            <Paper key={item.title} elevation={0} sx={{ p: 2.5, borderRadius: 4, border: "1px solid #E5ECF5" }}>
              <Box sx={{ width: 46, height: 46, display: "grid", placeItems: "center", borderRadius: 3, bgcolor: item.tint, color: item.color, mb: 2 }}>
                <Icon />
              </Box>
              <Typography fontWeight={800} color="#183454">{item.title}</Typography>
              <Typography fontSize={13} lineHeight={1.8} color="#77869D" mt={1}>{item.description}</Typography>
            </Paper>
          );
        })}
      </Box>

      <Paper elevation={0} sx={{ mt: 3, p: { xs: 3, sm: 5 }, textAlign: "center", borderRadius: 4, border: "1px solid #E5ECF5" }}>
        <Box sx={{ width: 58, height: 58, display: "grid", placeItems: "center", mx: "auto", mb: 2, bgcolor: "#E8F0FF", color: "#355ED8", borderRadius: 4 }}>
          <InsightsRoundedIcon fontSize="large" />
        </Box>
        <Typography fontWeight={800} fontSize={19} color="#183454">Your reports deserve real data</Typography>
        <Typography maxWidth={500} mx="auto" mt={1} fontSize={13} lineHeight={1.9} color="#77869D">
          Connect employee, attendance, and payroll records to calculate meaningful metrics and display accurate charts here.
        </Typography>
      </Paper>
    </Box>
  );
}
