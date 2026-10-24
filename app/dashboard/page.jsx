
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
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { getToken, getUser, logout } from "@/lib/auth";

const drawerWidth = 250;

const modules = [
  {
    title: "Organization Setup",
    description: "Configure company details and organizational settings.",
    icon: BusinessRoundedIcon,
  },
  {
    title: "Employee Management",
    description: "Create, view, and manage employee records.",
    icon: GroupsRoundedIcon,
  },
  {
    title: "Attendance",
    description: "Manage employee check-in, check-out, and attendance.",
    icon: EventAvailableRoundedIcon,
  },
  {
    title: "Leave Management",
    description: "Submit leave requests and manage approval workflows.",
    icon: CalendarMonthRoundedIcon,
  },
  {
    title: "Payroll & Payslips",
    description: "Manage monthly payroll and employee payslips.",
    icon: PaymentsRoundedIcon,
  },
  {
    title: "Analytics & Reports",
    description: "Review workforce information and business reports.",
    icon: InsightsRoundedIcon,
  },
  {
    title: "AI Assistant",
    description: "Ask questions about authorized company information.",
    icon: SmartToyRoundedIcon,
  },
  {
    title: "Announcements",
    description: "Share company updates and important announcements.",
    icon: CampaignRoundedIcon,
  },
  {
    title: "Audit Log",
    description: "Review system activity and recorded actions.",
    icon: FactCheckRoundedIcon,
  },
];

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const token = getToken();

    if (!token) {
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
    "HCM Lite User";

  const displayEmail = user?.email || "Signed-in account";
  const displayRole = user?.role || user?.userType || "Authenticated user";

  const sidebarContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#0f172a",
        color: "white",
      }}
    >
      <Box sx={{ px: 3, py: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar
            variant="rounded"
            sx={{
              bgcolor: "#2563eb",
              width: 42,
              height: 42,
              fontWeight: 800,
              borderRadius: 2,
            }}
          >
            H
          </Avatar>

          <Box>
            <Typography fontWeight={800} fontSize={20}>
              HCM Lite
            </Typography>
            <Typography fontSize={11} sx={{ color: "#94a3b8" }}>
              Human Capital Management
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#263449" }} />

      <Box sx={{ px: 2, py: 2 }}>
        <Typography
          sx={{
            px: 1.5,
            mb: 1,
            color: "#94a3b8",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          WORKSPACE
        </Typography>

        <List disablePadding>
          <ListItemButton
            selected
            sx={{
              borderRadius: 2,
              mb: 0.5,
              color: "white",
              "&.Mui-selected": {
                bgcolor: "#1e40af",
                color: "white",
              },
              "&.Mui-selected:hover": {
                bgcolor: "#1d4ed8",
              },
            }}
          >
            <ListItemIcon sx={{ color: "inherit", minWidth: 38 }}>
              <DashboardRoundedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              primaryTypographyProps={{ fontWeight: 600, fontSize: 14 }}
            />
          </ListItemButton>
        </List>

        <Typography
          sx={{
            px: 1.5,
            mt: 3,
            mb: 1,
            color: "#94a3b8",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          ACCOUNT
        </Typography>

        <List disablePadding>
          <ListItemButton
            onClick={handleLogout}
            sx={{
              borderRadius: 2,
              color: "#cbd5e1",
              "&:hover": { bgcolor: "#1e293b", color: "white" },
            }}
          >
            <ListItemIcon sx={{ color: "inherit", minWidth: 38 }}>
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
            borderRadius: 3,
            bgcolor: "#1e293b",
            border: "1px solid #334155",
          }}
        >
          <Typography fontSize={12} fontWeight={700}>
            HCM Lite Workspace
          </Typography>
          <Typography fontSize={11} sx={{ mt: 0.5, color: "#94a3b8" }}>
            Your people operations, in one place.
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  if (checkingAuth) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f8fafc",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f8fafc" }}>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              border: 0,
            },
          }}
        >
          {sidebarContent}
        </Drawer>

        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              border: 0,
              boxSizing: "border-box",
            },
          }}
        >
          {sidebarContent}
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
            bgcolor: "white",
            borderBottom: "1px solid #e2e8f0",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              onClick={() => setMobileMenuOpen(true)}
              sx={{ display: { xs: "inline-flex", md: "none" } }}
              aria-label="Open navigation menu"
            >
              <MenuRoundedIcon />
            </IconButton>

            <Box>
              <Typography fontWeight={800} color="#0f172a" fontSize={20}>
                Dashboard
              </Typography>
              <Typography color="text.secondary" fontSize={12}>
                Your HCM Lite workspace overview
              </Typography>
            </Box>
          </Box>

          <Button
            onClick={handleLogout}
            startIcon={<LogoutRoundedIcon />}
            variant="outlined"
            sx={{
              textTransform: "none",
              borderRadius: 2,
              display: { xs: "none", sm: "inline-flex" },
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
              color: "white",
              background:
                "linear-gradient(120deg, #1e3a8a 0%, #2563eb 65%, #0891b2 100%)",
              boxShadow: "0 14px 35px rgba(37,99,235,0.16)",
            }}
          >
            <Typography sx={{ color: "#dbeafe", fontSize: 13, mb: 1 }}>
              WELCOME TO HCM LITE
            </Typography>

            <Typography
              variant="h4"
              fontWeight={800}
              sx={{ fontSize: { xs: 25, sm: 32 }, mb: 1 }}
            >
              Welcome, {displayName}
            </Typography>

            <Typography sx={{ color: "#e0f2fe", maxWidth: 650 }}>
              Manage people operations through one workspace for employees,
              attendance, leave, payroll, announcements, and AI-assisted
              insights.
            </Typography>

            <Box
              sx={{
                mt: 3,
                display: "flex",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              <Chip
                icon={<PersonOutlineRoundedIcon />}
                label={displayRole}
                sx={{
                  bgcolor: "rgba(255,255,255,0.14)",
                  color: "white",
                  "& .MuiChip-icon": { color: "white" },
                }}
              />
              <Chip
                label="Authenticated session"
                sx={{
                  bgcolor: "rgba(255,255,255,0.14)",
                  color: "white",
                }}
              />
            </Box>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" fontWeight={800} color="#0f172a">
              Your workspace
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 0.5 }}>
              Explore the modules planned for your organization.
            </Typography>
          </Box>

          <Alert severity="info" sx={{ mb: 3, borderRadius: 2 }}>
            The frontend workspace is being built module by module. Live
            employee, attendance, and payroll information will appear after
            the corresponding backend APIs are connected.
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
                    borderRadius: 3,
                    border: "1px solid #e2e8f0",
                    transition: "transform 160ms ease, box-shadow 160ms ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 12px 28px rgba(15,23,42,0.07)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 2.5,
                        bgcolor: "#eff6ff",
                        color: "#1d4ed8",
                        mb: 2.5,
                      }}
                    >
                      <ModuleIcon fontSize="medium" />
                    </Box>

                    <Typography fontWeight={750} fontSize={17} color="#0f172a">
                      {module.title}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      fontSize={13}
                      sx={{ mt: 1, minHeight: 42, lineHeight: 1.7 }}
                    >
                      {module.description}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Chip
                      label="In development"
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: "#cbd5e1",
                        color: "#475569",
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
              borderRadius: 3,
              bgcolor: "white",
              border: "1px solid #e2e8f0",
            }}
          >
            <Typography fontWeight={700} color="#0f172a">
              Signed-in account
            </Typography>
            <Typography color="text.secondary" fontSize={14} sx={{ mt: 1 }}>
              {displayEmail}
            </Typography>
          </Box>

          <Typography
            color="text.secondary"
            fontSize={12}
            textAlign="center"
            sx={{ mt: 4 }}
          >
            HCM Lite · Human Capital Management System
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
