
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Alert, Avatar, Box, Button, Card, CardContent, Chip,
  CircularProgress, Divider, Drawer, IconButton, List,
  ListItemButton, ListItemIcon, ListItemText, Typography,
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
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { getToken, getUser, logout } from "@/lib/auth";

const drawerWidth = 250;

const modules = [
  { title: "Organization Setup", description: "Company details, departments, designations, holidays, and workplace rules.", icon: BusinessRoundedIcon },
  { title: "Employees", description: "Employee directory, profile details, search, and workforce records.", icon: GroupsRoundedIcon },
  { title: "Attendance", description: "Daily check-in and check-out, attendance status, and corrections.", icon: EventAvailableRoundedIcon },
  { title: "Leave Management", description: "Leave requests, balances, history, and approval workflows.", icon: CalendarMonthRoundedIcon },
  { title: "Payroll Lite", description: "Salary structures, monthly payroll processing, and payslips.", icon: PaymentsRoundedIcon },
  { title: "Dashboards & Analytics", description: "Workforce metrics, attendance trends, and useful HR insights.", icon: InsightsRoundedIcon },
  { title: "AI Assistant", description: "Ask HR questions and get assistance using authorized company data.", icon: SmartToyRoundedIcon },
  { title: "Comms & Audit", description: "Company announcements, notifications, and system activity records.", icon: CampaignRoundedIcon },
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
    user?.name || user?.fullName || user?.email?.split("@")[0] || "Welcome";
  const displayEmail = user?.email || "Signed-in account";
  const displayRole = user?.role || user?.userType || "User";

  function sidebarContent() {
    return (
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column", bgcolor: "#fff", color: "#0f172a" }}>
        <Box sx={{ px: 3, py: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Avatar variant="rounded" sx={{ width: 44, height: 44, borderRadius: 2.5, fontSize: 22, fontWeight: 900, background: "linear-gradient(135deg,#2563eb,#4f46e5)" }}>
              H
            </Avatar>
            <Box>
              <Typography fontSize={20} fontWeight={850}>HCM Lite</Typography>
              <Typography fontSize={11} color="text.secondary">People first. Always.</Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "#eaf0f8" }} />

        <Box sx={{ px: 2, py: 2 }}>
          <Typography sx={{ color: "#94a3b8", fontSize: 10, fontWeight: 800, letterSpacing: 1.5, px: 1.5, mb: 1 }}>
            YOUR WORKSPACE
          </Typography>
          <List disablePadding>
            <ListItemButton selected sx={{ borderRadius: 2.5, color: "#1d4ed8", "&.Mui-selected": { bgcolor: "#eff6ff" }, "&.Mui-selected:hover": { bgcolor: "#dbeafe" } }}>
              <ListItemIcon sx={{ minWidth: 38, color: "inherit" }}><DashboardRoundedIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" primaryTypographyProps={{ fontSize: 14, fontWeight: 700 }} />
            </ListItemButton>
          </List>

          <Typography sx={{ color: "#94a3b8", fontSize: 10, fontWeight: 800, letterSpacing: 1.5, px: 1.5, mt: 3, mb: 1 }}>
            ACCOUNT
          </Typography>
          <List disablePadding>
            <ListItemButton onClick={handleLogout} sx={{ borderRadius: 2.5, color: "#64748b", "&:hover": { bgcolor: "#eff6ff", color: "#1d4ed8" } }}>
              <ListItemIcon sx={{ minWidth: 38, color: "inherit" }}><LogoutRoundedIcon /></ListItemIcon>
              <ListItemText primary="Log out" primaryTypographyProps={{ fontSize: 14, fontWeight: 600 }} />
            </ListItemButton>
          </List>
        </Box>

        <Box sx={{ mt: "auto", p: 2 }}>
          <Box sx={{ p: 2.5, borderRadius: 3, background: "linear-gradient(135deg,#eff6ff,#f5f3ff)", border: "1px solid #dbeafe" }}>
            <FavoriteRoundedIcon sx={{ color: "#3b82f6", fontSize: 19, mb: 1 }} />
            <Typography fontSize={12} fontWeight={800} color="#1e3a8a">Built around people</Typography>
            <Typography fontSize={11} sx={{ mt: 0.5, color: "#64748b", lineHeight: 1.7 }}>
              Making everyday people operations feel a little easier.
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }

  if (checkingAuth) {
    return (
      <Box className="flex min-h-screen items-center justify-center bg-blue-50">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f6f9ff" }}>
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: 0 }}>
        <Drawer
          variant="temporary"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: "block", md: "none" }, "& .MuiDrawer-paper": { width: drawerWidth, border: 0 } }}
        >
          {sidebarContent()}
        </Drawer>

        <Drawer
          variant="permanent"
          open
          sx={{ display: { xs: "none", md: "block" }, "& .MuiDrawer-paper": { width: drawerWidth, border: 0, boxSizing: "border-box", borderRight: "1px solid #e8eef8" } }}
        >
          {sidebarContent()}
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, minWidth: 0 }}>
        <Box sx={{ minHeight: 78, px: { xs: 2, sm: 4 }, py: 2, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, bgcolor: "rgba(255,255,255,0.9)", borderBottom: "1px solid #e8eef8" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton onClick={() => setMobileMenuOpen(true)} aria-label="Open navigation" sx={{ display: { xs: "inline-flex", md: "none" } }}>
              <MenuRoundedIcon />
            </IconButton>
            <Box>
              <Typography fontWeight={850} fontSize={20} color="#0f172a">Your dashboard</Typography>
              <Typography fontSize={12} color="#64748b">A little more clarity for your workday.</Typography>
            </Box>
          </Box>

          <Button onClick={handleLogout} startIcon={<LogoutRoundedIcon />} variant="outlined" sx={{ display: { xs: "none", sm: "inline-flex" }, borderRadius: 2.5, textTransform: "none", borderColor: "#dbeafe", color: "#1d4ed8" }}>
            Log out
          </Button>
        </Box>

        <Box sx={{ p: { xs: 2, sm: 4 } }}>
          <Box sx={{ p: { xs: 3, sm: 4 }, mb: 4, borderRadius: 5, position: "relative", overflow: "hidden", color: "white", background: "linear-gradient(120deg,#1e40af 0%,#2563eb 55%,#6366f1 100%)", boxShadow: "0 18px 45px rgba(37,99,235,0.17)" }}>
            <Box sx={{ position: "absolute", width: 220, height: 220, border: "1px solid rgba(255,255,255,0.16)", borderRadius: "50%", right: -70, top: -90 }} />
            <Box sx={{ position: "absolute", width: 150, height: 150, border: "1px solid rgba(255,255,255,0.16)", borderRadius: "50%", right: -30, top: -55 }} />

            <Box sx={{ position: "relative" }}>
              <Typography sx={{ color: "#dbeafe", fontSize: 11, fontWeight: 800, letterSpacing: 1.8, mb: 1.5 }}>
                A WARM WELCOME TO YOUR WORKSPACE
              </Typography>
              <Typography sx={{ fontSize: { xs: 27, sm: 36 }, lineHeight: 1.2, fontWeight: 850, letterSpacing: "-0.8px" }}>
                Hello, {displayName} 💙
              </Typography>
              <Typography sx={{ mt: 2, maxWidth: 650, color: "#e0e7ff", fontSize: 14, lineHeight: 1.9 }}>
                Every person makes a difference. HCM Lite brings your people operations together, helping your organization make room for better work, thoughtful decisions, and stronger teams.
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 3 }}>
                <Chip label={`Role: ${displayRole}`} sx={{ bgcolor: "rgba(255,255,255,0.16)", color: "#fff", fontWeight: 600 }} />
                <Chip label="People-first workspace" sx={{ bgcolor: "rgba(255,255,255,0.16)", color: "#fff" }} />
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontSize: 23, fontWeight: 850, color: "#0f172a", letterSpacing: "-0.5px" }}>
              Everything in one place
            </Typography>
            <Typography sx={{ mt: 0.7, color: "#64748b", fontSize: 14 }}>
              Choose a workspace area to explore the core HCM Lite features.
            </Typography>
          </Box>

          <Alert severity="info" sx={{ mb: 3, borderRadius: 3, bgcolor: "#eff6ff", color: "#1e40af", "& .MuiAlert-icon": { color: "#2563eb" } }}>
            These modules are being connected one by one. Live information will appear once the corresponding backend APIs are ready.
          </Alert>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2,minmax(0,1fr))", xl: "repeat(3,minmax(0,1fr))" }, gap: 2.5 }}>
            {modules.map((module, index) => {
              const ModuleIcon = module.icon;

              return (
                <Card
                  key={module.title}
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                    border: "1px solid #e5edf9",
                    bgcolor: "#fff",
                    transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                    "&:hover": { transform: "translateY(-4px)", borderColor: "#bfdbfe", boxShadow: "0 16px 34px rgba(37,99,235,0.09)" },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2.5 }}>
                      <Avatar variant="rounded" sx={{ width: 50, height: 50, borderRadius: 3, bgcolor: index % 2 === 0 ? "#eff6ff" : "#eef2ff", color: "#2563eb" }}>
                        <ModuleIcon />
                      </Avatar>
                      <Typography sx={{ color: "#dbeafe", fontWeight: 850, fontSize: 22 }}>
                        0{index + 1}
                      </Typography>
                    </Box>

                    <Typography sx={{ color: "#0f172a", fontSize: 16, fontWeight: 800 }}>
                      {module.title}
                    </Typography>
                    <Typography sx={{ mt: 1, minHeight: 66, color: "#64748b", fontSize: 13, lineHeight: 1.8 }}>
                      {module.description}
                    </Typography>

                    <Divider sx={{ my: 2, borderColor: "#eef2f7" }} />
                    <Chip label="Coming soon" size="small" variant="outlined" sx={{ color: "#64748b", borderColor: "#dbeafe", bgcolor: "#f8fbff", fontSize: 11 }} />
                  </CardContent>
                </Card>
              );
            })}
          </Box>

          <Box sx={{ mt: 4, p: 3, bgcolor: "#fff", border: "1px solid #e5edf9", borderRadius: 4 }}>
            <Typography fontWeight={800} color="#0f172a">Your account</Typography>
            <Typography sx={{ mt: 1, fontSize: 14, color: "#64748b" }}>{displayEmail}</Typography>
          </Box>

          <Typography sx={{ mt: 4, textAlign: "center", color: "#94a3b8", fontSize: 12 }}>
            Made for people. Designed for better work. · HCM Lite
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
