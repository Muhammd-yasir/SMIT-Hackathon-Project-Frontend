
"use client";

import { Box, Paper, Typography, Chip } from "@mui/material";

import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";

import ModuleCard from "@/components/dashboard/ModuleCard";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

const modules = [
  {
    title: "Organization Setup",
    description:
      "Set up company details, departments, designations, and workplace policies.",
    href: "/dashboard/setup",
    icon: ApartmentRoundedIcon,
    category: "FOUNDATION",
    tint: "#EAF1FF",
    iconColor: "#245BC0",
  },
  {
    title: "Employees",
    description:
      "Manage employee profiles, departments, and your workforce directory.",
    href: "/dashboard/employees",
    icon: GroupsRoundedIcon,
    category: "PEOPLE",
    tint: "#E5F8F1",
    iconColor: "#168765",
  },
  {
    title: "Attendance",
    description:
      "Manage daily attendance, working hours, check-ins, and check-outs.",
    href: "/dashboard/attendance",
    icon: AccessTimeRoundedIcon,
    category: "DAILY WORK",
    tint: "#FFF3E4",
    iconColor: "#C57919",
  },
  {
    title: "Leave Management",
    description:
      "Handle leave applications, balances, and approval workflows.",
    href: "/dashboard/leave",
    icon: EventAvailableRoundedIcon,
    category: "TIME OFF",
    tint: "#F1EAFE",
    iconColor: "#7951C8",
  },
  {
    title: "Payroll Lite",
    description:
      "Organize monthly payroll, salary calculations, and employee payslips.",
    href: "/dashboard/payroll",
    icon: PaymentsRoundedIcon,
    category: "COMPENSATION",
    tint: "#E5F6FF",
    iconColor: "#147FA7",
  },
  {
    title: "Dashboards & Analytics",
    description:
      "Explore workforce trends, attendance summaries, and HR insights.",
    href: "/dashboard/analytics",
    icon: InsightsRoundedIcon,
    category: "INSIGHTS",
    tint: "#E8F0FF",
    iconColor: "#355ED8",
  },
  {
    title: "AI Assistant",
    description:
      "Interact with an AI assistant for HR information and workplace policies.",
    href: "/dashboard/ai-assistant",
    icon: AutoAwesomeRoundedIcon,
    category: "INTELLIGENCE",
    tint: "#F0E9FF",
    iconColor: "#7651C8",
  },
  {
    title: "Communications",
    description:
      "Share company announcements and keep employees informed.",
    href: "/dashboard/communications",
    icon: CampaignRoundedIcon,
    category: "UPDATES",
    tint: "#FFECEF",
    iconColor: "#C44E71",
  },
  {
    title: "Audit Log",
    description:
      "Review important system activities and maintain accountability.",
    href: "/dashboard/audit",
    icon: FactCheckRoundedIcon,
    category: "GOVERNANCE",
    tint: "#E8F5F9",
    iconColor: "#237B91",
  },
];

export default function DashboardPage() {
  return (
    <Box sx={{ maxWidth: 1500, mx: "auto" }}>
      {/* Page heading */}
      <DashboardHeader
        title="Your people, in focus."
        description="Your people operations, thoughtfully organized in one workspace."
      />

      {/* Welcome banner */}
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: { xs: "22px", md: "28px" },
          p: { xs: 2.5, sm: 3.5, lg: 4.5 },
          mb: 4,
          color: "#FFFFFF",
          background:
            "linear-gradient(115deg, #174A96 0%, #236BD0 55%, #5A9AF0 100%)",
          boxShadow: "0 18px 45px rgba(36, 95, 181, 0.16)",
        }}
      >
        {/* Decorative circles */}
        <Box
          sx={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.17)",
            right: -75,
            top: -115,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 190,
            height: 190,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.17)",
            right: 20,
            bottom: -130,
          }}
        />

        <Box sx={{ position: "relative", zIndex: 1, maxWidth: 700 }}>
          <Chip
            icon={
              <FavoriteRoundedIcon
                sx={{ fontSize: "15px !important" }}
              />
            }
            label="BUILT AROUND PEOPLE"
            size="small"
            sx={{
              mb: 2,
              bgcolor: "rgba(255,255,255,0.16)",
              color: "#FFFFFF",
              fontWeight: 800,
              fontSize: 9.5,
              letterSpacing: 1,
              border: "1px solid rgba(255,255,255,0.18)",
              "& .MuiChip-icon": { color: "#FFFFFF" },
            }}
          />

          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 26, sm: 35, lg: 41 },
              lineHeight: 1.2,
              fontWeight: 850,
              letterSpacing: -1,
              mb: 1.5,
            }}
          >
            Great teams start with great people.
          </Typography>

          <Typography
            sx={{
              maxWidth: 600,
              fontSize: { xs: 13, sm: 14 },
              lineHeight: 1.9,
              color: "#E6F0FF",
            }}
          >
            Bring your people operations together in one place. From employee
            management to attendance, leave, and payroll, HCM Lite helps
            simplify the everyday work that keeps a team moving forward.
          </Typography>
        </Box>
      </Paper>

      {/* Module section heading */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "flex-end" },
          flexWrap: "wrap",
          gap: 1.5,
          mb: 2.5,
        }}
      >
        <Box>
          <Typography
            component="h2"
            sx={{
              fontSize: 22,
              fontWeight: 850,
              color: "#172F52",
              letterSpacing: -0.4,
            }}
          >
            Explore your workspace
          </Typography>

          <Typography
            sx={{
              mt: 0.7,
              fontSize: 13,
              color: "#75839A",
              lineHeight: 1.8,
            }}
          >
            Everything you need to support your people and manage daily HR work.
          </Typography>
        </Box>

        <Chip
          label={`${modules.length} modules`}
          sx={{
            bgcolor: "#E7F0FF",
            color: "#2456A5",
            fontWeight: 800,
            fontSize: 11,
            borderRadius: "10px",
          }}
        />
      </Box>

      {/* Reusable module cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            xl: "repeat(3, minmax(0, 1fr))",
          },
          gap: 2,
        }}
      >
        {modules.map((module) => (
          <ModuleCard key={module.href} {...module} />
        ))}
      </Box>

      {/* Closing message */}
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          mt: 3,
          p: { xs: 2, sm: 2.5 },
          borderRadius: "18px",
          bgcolor: "#FFFFFF",
          border: "1px solid #E7EDF6",
        }}
      >
        <Box
          sx={{
            width: 42,
            height: 42,
            minWidth: 42,
            display: "grid",
            placeItems: "center",
            borderRadius: "13px",
            bgcolor: "#EAF1FF",
            color: "#245FC0",
          }}
        >
          <FavoriteRoundedIcon />
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 800,
              color: "#23466F",
            }}
          >
            People first. Always.
          </Typography>

          <Typography
            sx={{
              mt: 0.4,
              fontSize: 12,
              color: "#75869E",
              lineHeight: 1.8,
            }}
          >
            A more organized workplace starts with taking care of the people
            who make it possible.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
