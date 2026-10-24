
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Box,
  Typography,
  Button,
  Avatar,
  Tooltip,
} from "@mui/material";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import { getUser, logout } from "@/lib/auth";

const navigation = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: DashboardRoundedIcon,
  },
  {
    label: "Organization Setup",
    href: "/dashboard/setup",
    icon: ApartmentRoundedIcon,
  },
  {
    label: "Employees",
    href: "/dashboard/employees",
    icon: GroupsRoundedIcon,
  },
  {
    label: "Attendance",
    href: "/dashboard/attendance",
    icon: AccessTimeRoundedIcon,
  },
  {
    label: "Leave Management",
    href: "/dashboard/leave",
    icon: EventAvailableRoundedIcon,
  },
  {
    label: "Payroll Lite",
    href: "/dashboard/payroll",
    icon: PaymentsRoundedIcon,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: InsightsRoundedIcon,
  },
  {
    label: "AI Assistant",
    href: "/dashboard/ai-assistant",
    icon: AutoAwesomeRoundedIcon,
  },
  {
    label: "Communications",
    href: "/dashboard/communications",
    icon: CampaignRoundedIcon,
  },
  {
    label: "Audit Log",
    href: "/dashboard/audit",
    icon: FactCheckRoundedIcon,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const user = getUser();

  const email = user?.email || "Signed-in user";
  const initial = email.charAt(0).toUpperCase();

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  return (
    <Box
      component="aside"
      sx={{
        width: { xs: "100%", md: 276 },
        minWidth: { md: 276 },
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        background:
          "linear-gradient(165deg, #123A78 0%, #0B2450 58%, #071A3B 100%)",
        px: 2,
        py: 2.5,
        position: { md: "sticky" },
        top: 0,
        alignSelf: "flex-start",
        boxSizing: "border-box",
      }}
    >
      {/* Brand */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, px: 1, mb: 3.5 }}>
        <Box
          sx={{
            width: 45,
            height: 45,
            display: "grid",
            placeItems: "center",
            borderRadius: "15px",
            color: "#14417D",
            bgcolor: "#FFFFFF",
            boxShadow: "0 8px 24px rgba(0,0,0,0.16)",
          }}
        >
          <GroupsRoundedIcon sx={{ fontSize: 28 }} />
        </Box>

        <Box>
          <Typography sx={{ fontSize: 21, fontWeight: 800, lineHeight: 1.15 }}>
            HCM Lite
          </Typography>
          <Typography sx={{ fontSize: 11, color: "#C5D8F5", mt: 0.5 }}>
            PEOPLE • WORK • GROWTH
          </Typography>
        </Box>
      </Box>

      {/* Workspace label */}
      <Typography
        sx={{
          px: 1.5,
          mb: 1.2,
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: 2,
          color: "#9DBBE8",
          textTransform: "uppercase",
        }}
      >
        Workspace
      </Typography>

      {/* Navigation */}
      <Box
        component="nav"
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: 0.6,
          overflowX: { xs: "auto", md: "visible" },
        }}
      >
        {navigation.map((item) => {
          const Icon = item.icon;
          const active =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

          return (
            <Button
              key={item.href}
              component={Link}
              href={item.href}
              startIcon={<Icon />}
              fullWidth
              sx={{
                justifyContent: "flex-start",
                flexShrink: 0,
                minWidth: { xs: "auto", md: 0 },
                px: 1.6,
                py: 1.25,
                borderRadius: "12px",
                color: active ? "#153D77" : "#D5E3FA",
                bgcolor: active ? "#FFFFFF" : "transparent",
                fontSize: 12.5,
                fontWeight: active ? 800 : 500,
                textTransform: "none",
                whiteSpace: "nowrap",
                transition: "all 180ms ease",
                "& .MuiButton-startIcon": {
                  mr: 1.3,
                  "& svg": { fontSize: 20 },
                },
                "&:hover": {
                  bgcolor: active
                    ? "#FFFFFF"
                    : "rgba(255,255,255,0.12)",
                  color: "#FFFFFF",
                  transform: { md: "translateX(3px)" },
                },
                ...(active && {
                  boxShadow: "0 8px 20px rgba(3,15,39,0.18)",
                  "&:hover": { bgcolor: "#FFFFFF", color: "#153D77" },
                }),
              }}
            >
              {item.label}
            </Button>
          );
        })}
      </Box>

      <Box sx={{ flexGrow: 1, minHeight: 20 }} />

      {/* People-first footer panel */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          p: 2,
          mb: 2,
          borderRadius: "17px",
          border: "1px solid rgba(255,255,255,0.13)",
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
        }}
      >
        <Box
          sx={{
            width: 34,
            height: 34,
            display: "grid",
            placeItems: "center",
            borderRadius: "11px",
            bgcolor: "rgba(255,255,255,0.15)",
            mb: 1.2,
          }}
        >
          <AutoAwesomeRoundedIcon sx={{ fontSize: 19, color: "#BBD7FF" }} />
        </Box>
        <Typography sx={{ fontWeight: 750, fontSize: 13, mb: 0.6 }}>
          People come first.
        </Typography>
        <Typography sx={{ fontSize: 11.5, lineHeight: 1.7, color: "#C2D4F1" }}>
          A thoughtful workspace for your people, their growth, and their work.
        </Typography>
      </Box>

      {/* User and logout */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.2,
          p: 1.2,
          borderRadius: "15px",
          bgcolor: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.09)",
        }}
      >
        <Avatar
          sx={{
            width: 38,
            height: 38,
            bgcolor: "#DCEBFF",
            color: "#153D77",
            fontWeight: 800,
          }}
        >
          {initial}
        </Avatar>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
            Your workspace
          </Typography>
          <Tooltip title={email}>
            <Typography
              noWrap
              sx={{ fontSize: 10.5, color: "#BFD2EF", mt: 0.3 }}
            >
              {email}
            </Typography>
          </Tooltip>
        </Box>

        <Tooltip title="Log out">
          <Button
            onClick={handleLogout}
            aria-label="Log out"
            sx={{
              minWidth: 38,
              width: 38,
              height: 38,
              p: 0,
              color: "#E3EDFF",
              borderRadius: "11px",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.14)",
                color: "#FFFFFF",
              },
            }}
          >
            <LogoutRoundedIcon fontSize="small" />
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
}
