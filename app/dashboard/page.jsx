
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { getToken, getUser, logout } from "@/lib/auth";

const drawerWidth = 250;

const modules = [
  {
    title: "Organization Setup",
    description:
      "Configure company information, departments, designations, leave types, and office rules.",
    icon: BusinessRoundedIcon,
    number: "01",
  },
  {
    title: "Employees",
    description:
      "Manage employee records, search the directory, and view employee profiles.",
    icon: GroupsRoundedIcon,
    number: "02",
  },
  {
    title: "Attendance",
    description:
      "Handle daily check-in and check-out, attendance records, and corrections.",
    icon: EventAvailableRoundedIcon,
    number: "03",
  },
  {
    title: "Leave Management",
    description:
      "Apply for leave, check balances, and manage approval workflows.",
    icon: CalendarMonthRoundedIcon,
    number: "04",
  },
  {
    title: "Payroll Lite",
    description:
      "Manage salary structures, monthly payroll runs, and employee payslips.",
    icon: PaymentsRoundedIcon,
    number: "05",
  },
  {
    title: "Dashboards & Analytics",
    description:
      "Explore workforce metrics, attendance trends, leave utilization, and insights.",
    icon: InsightsRoundedIcon,
    number: "06",
  },
  {
    title: "AI Assistant",
    description:
      "Ask questions about company data and get assistance with HR policies and leave.",
    icon: SmartToyRoundedIcon,
    number: "07",
  },
  {
    title: "Comms & Audit",
    description:
      "Manage company announcements, notifications, and recorded system activity.",
    icon: CampaignRoundedIcon,
    number: "08",
  },
];

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!getToken()) {
      router.replace("/login");
      return;
    }

    setUser(getUser());
    setCheckingAuth(false);
  }, [router]);

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  const displayName =
    user?.name ||
    user?.fullName ||
    user?.email?.split("@")[0] ||
    "Welcome";

  const displayEmail = user?.email || "Signed-in account";
  const displayRole = user?.role || user?.userType || "User";

  function sidebarContent() {
    return (
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          bgcolor: "#111827",
          color: "#fff",
        }}
      >
        <Box sx={{ px: 3, py: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Avatar
              variant="rounded"
              sx={{
                bgcolor: "#2563eb",
                width: 44,
                height: 44,
                borderRadius: 2.5,
                fontWeight: 800,
                fontSize: 22,
              }}
            >
              H
            </Avatar>
            <Box>
              <Typography fontSize={20} fontWeight={800}>
                HCM Lite
              </Typography>
              <Typography fontSize={11} sx={{ color: "#9ca3af" }}>
                People management
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "#273449" }} />

        <Box sx={{ px: 2, py: 2 }}>
          <Typography
            sx={{
              color: "#9ca3af",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1.2,
              px: 1.5,
              mb: 1,
            }}
          >
            WORKSPACE
          </Typography>

          <List disablePadding>
            <ListItemButton
              selected
              sx={{
                borderRadius: 2,
                color: "#fff",
                "&.Mui-selected": { bgcolor: "#1d4ed8" },
                "&.Mui-selected:hover": { bgcolor: "#1e40af" },
              }}
            >
              <ListItemIcon sx={{ minWidth: 38, color: "inherit" }}>
                <DashboardRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                primaryTypographyProps={{ fontSize: 14, fontWeight: 600 }}
              />
            </ListItemButton>
          </List>

          <Typography
            sx={{
              color: "#9ca3af",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1.2,
              px: 1.5,
              mt: 3,
              mb: 1,
            }}
          >
            ACCOUNT
          </Typography>

          <List disablePadding>
            <ListItemButton
              onClick={handleLogout}
              sx={{
                borderRadius: 2,
                color: "#d1d5db",
                "&:hover": { bgcolor: "#273449", color: "#fff" },
              }}
            >
              <ListItemIcon sx={{ minWidth: 38, color: "inherit" }}>
                <LogoutRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Log out"
                primaryTypographyProps={{ fontSize: 14, fontWeight: 600 }}
              />
            </ListItemButton>
          </List>
        </Box>

        <Box sx={{ mt: "auto", p: 2 }}>
          <Box
            sx={{
              p: 2,
              bgcolor: "#1f2937",
              border: "1px solid #374151",
              borderRadius: 3,
            }}
          >
            <Typography fontSize={12} fontWeight={700}>
              One people workspace
            </Typography>
            <Typography
              fontSize={11}
              sx={{ mt: 0.5, color: "#9ca3af", lineHeight: 1.6 }}
            >
              HR workflows and AI-assisted insights in one place.
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }

  if (checkingAuth) {
    return (
      <Box className="flex min-h-screen items-center justify-center bg-slate-50">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f8fafc" }}>
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: 0 }}>
        <Drawer
          variant="temporary"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth, border: 0 },
          }}
        >
          {sidebarContent()}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              border: 0,
              boxSizing: "border-box",
            },
          }}
          open
        >
          {sidebarContent()}
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, minWidth: 0 }}>
        <Box
          sx={{
            minHeight: 76,
            px: { xs: 2, sm: 4 },
            py: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            bgcolor: "#fff",
            borderBottom: "1px solid #e2e8f0",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation"
              sx={{ display: { xs: "inline-flex", md: "none" } }}
            >
              <MenuRoundedIcon />
            </IconButton>
            <Box>
              <Typography fontWeight={800} fontSize={20} color="#0f172a">
                Dashboard
              </Typography>
              <Typography fontSize={12} color="text.secondary">
                Human Capital Management
              </Typography>
            </Box>
          </Box>

          <Button
            variant="outlined"
            startIcon={<LogoutRoundedIcon />}
            onClick={handleLogout}
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              borderRadius: 2,
              textTransform: "none",
            }}
          >
            Log out
          </Button>
        </Box>

        <Box sx={{ p: { xs: 2, sm: 4 } }}>
          <Box
            sx={{
              p: { xs: 3, sm: 4 },
              mb: 4,
              borderRadius: 4,
              color: "#fff",
              background:
                "linear-gradient(120deg, #1e3a8a 0%, #2563eb 60%, #4f46e5 100%)",
              boxShadow: "0 16px 40px rgba(37,99,235,0.16)",
            }}
          >
            <Typography
              sx={{
                color: "#bfdbfe",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 1.5,
                mb: 1,
              }}
            >
              HCM LITE WORKSPACE
            </Typography>

            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: 26, sm: 34 },
                mb: 1,
              }}
            >
              Welcome, {displayName}
            </Typography>

            <Typography
              sx={{
                color: "#dbeafe",
                maxWidth: 680,
                lineHeight: 1.8,
                fontSize: 14,
              }}
            >
              Manage employees, attendance, leave requests, payroll, and
              workforce insights. Use the AI assistant to help answer HR
              questions from authorized company data.
            </Typography>

            <Box sx={{ mt: 3, display: "flex", gap: 1, flexWrap: "wrap" }}>
              <Chip
                label={`Role: ${displayRole}`}
                sx={{
                  color: "#fff",
                  bgcolor: "rgba(255,255,255,0.15)",
                }}
              />
              <Chip
                label="HCM Lite"
                sx={{
                  color: "#fff",
                  bgcolor: "rgba(255,255,255,0.15)",
                }}
              />
            </Box>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" fontWeight={800} color="#0f172a">
              HR workspace modules
            </Typography>
            <Typography sx={{ color: "#64748b", mt: 0.5, fontSize: 14 }}>
              Access the core areas of your Human Capital Management system.
            </Typography>
          </Box>

          <Alert severity="info" sx={{ mb: 3, borderRadius: 2 }}>
            Your workspace is being built module by module. Live figures will
            be displayed when their backend APIs are connected; no sample
            employee or payroll data is being shown.
          </Alert>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                xl: "repeat(3, minmax(0, 1fr))",
              },
              gap: 2.5,
            }}
          >
            {modules.map((module) => {
              const ModuleIcon = module.icon;

              return (
                <Card
                  key={module.title}
                  elevation={0}
                  sx={{
                    height: "100%",
                    border: "1px solid #e2e8f0",
                    borderRadius: 3,
                    transition: "all 180ms ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      borderColor: "#bfdbfe",
                      boxShadow: "0 14px 30px rgba(15,23,42,0.07)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2.5,
                      }}
                    >
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: 48,
                          height: 48,
                          bgcolor: "#eff6ff",
                          color: "#2563eb",
                          borderRadius: 2.5,
                        }}
                      >
                        <ModuleIcon />
                      </Avatar>
                      <Typography
                        sx={{
                          color: "#cbd5e1",
                          fontWeight: 800,
                          fontSize: 20,
                        }}
                      >
                        {module.number}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{ fontWeight: 750, color: "#0f172a", fontSize: 17 }}
                    >
                      {module.title}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 1,
                        mb: 2.5,
                        minHeight: 62,
                        color: "#64748b",
                        fontSize: 13,
                        lineHeight: 1.8,
                      }}
                    >
                      {module.description}
                    </Typography>

                    <Divider sx={{ mb: 2 }} />

                    <Chip
                      label="Coming soon"
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: "#cbd5e1",
                        color: "#64748b",
                        fontSize: 11,
                      }}
                    />
                  </CardContent>
                </Card>
              );
            })}
          </Box>

          <Box
            sx={{
              mt: 4,
              p: 2.5,
              bgcolor: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: 3,
            }}
          >
            <Typography fontWeight={700} color="#0f172a">
              Account information
            </Typography>
            <Typography sx={{ mt: 1, fontSize: 14, color: "#64748b" }}>
              {displayEmail}
            </Typography>
          </Box>

          <Typography
            sx={{ mt: 4, textAlign: "center", color: "#94a3b8", fontSize: 12 }}
          >
            HCM Lite · AI-assisted Human Capital Management
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
