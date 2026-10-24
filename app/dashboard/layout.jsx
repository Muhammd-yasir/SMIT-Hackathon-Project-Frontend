
"use client";

import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { getToken } from "@/lib/auth";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!getToken()) {
      router.replace("/login");
      return;
    }

    setReady(true);
  }, [pathname, router]);

  if (!ready) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          bgcolor: "#F4F7FC",
        }}
      >
        <CircularProgress sx={{ color: "#1D5CC6" }} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        bgcolor: "#F4F7FC",
      }}
    >
      <DashboardSidebar />

      <Box
        component="main"
        sx={{
          flex: 1,
          minWidth: 0,
          p: { xs: 2, sm: 3, lg: 4 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
