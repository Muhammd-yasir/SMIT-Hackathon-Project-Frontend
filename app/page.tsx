
"use client";

import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

import {
  ShieldCheck,
  Users,
  UserRound,
  ArrowRight,
  BriefcaseBusiness,
  Clock,
  ChartNoAxesCombined,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const roles = [
  {
    title: "Administrator",
    subtitle: "ADMIN",
    description:
      "Manage your organization, configure company settings, oversee employees, and monitor overall business performance.",
    icon: ShieldCheck,
    features: [
      "Organization management",
      "User and role management",
      "Company-wide analytics",
    ],
    href: "/signup/admin",
  },
  {
    title: "HR & People Operations",
    subtitle: "HR",
    description:
      "Manage employee records, attendance, leave requests, payroll, and everyday human resource operations.",
    icon: Users,
    features: [
      "Employee management",
      "Attendance and leave",
      "Payroll operations",
    ],
    href: "/signup/hr",
  },
  {
    title: "Employee",
    subtitle: "EMPLOYEE",
    description:
      "Access your personal workspace, track attendance, request leave, view payslips, and stay updated.",
    icon: UserRound,
    features: [
      "Personal dashboard",
      "Attendance tracking",
      "Leave and payslips",
    ],
    href: "/signup/employee",
  },
];

const highlights = [
  {
    icon: Clock,
    title: "Smart Attendance",
    description: "Simplified attendance tracking and monitoring.",
  },
  {
    icon: BriefcaseBusiness,
    title: "HR Management",
    description: "Manage your workforce in one place.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Insightful Analytics",
    description: "Make informed decisions with useful insights.",
  },
];

export default function Home() {
  return (
    <Box className="min-h-screen bg-white text-slate-800">

      {/* NAVBAR */}
      <Box className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <Container maxWidth="xl">
          <Box className="flex h-20 items-center justify-between">

            <Link href="/" className="flex items-center gap-3 no-underline">
              <Box className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
                <BriefcaseBusiness size={23} />
              </Box>

              <Box>
                <Typography className="text-xl font-extrabold tracking-tight text-slate-900">
                  HCM <span className="text-blue-600">Lite</span>
                </Typography>
                <Typography className="text-[10px] font-semibold tracking-[2px] text-slate-400">
                  PEOPLE MANAGEMENT
                </Typography>
              </Box>
            </Link>

            <Box className="hidden items-center gap-8 md:flex">
              <a href="#features" className="text-sm font-medium text-slate-600 transition hover:text-blue-600">
                Features
              </a>
              <a href="#roles" className="text-sm font-medium text-slate-600 transition hover:text-blue-600">
                User Roles
              </a>
            </Box>

            <Box className="flex items-center gap-3">
              <Button
                component={Link}
                href="/login"
                variant="outlined"
                className="rounded-lg border-blue-600 px-5 py-2 font-semibold normal-case text-blue-600 hover:bg-blue-50"
              >
                Sign In
              </Button>
            </Box>

          </Box>
        </Container>
      </Box>

      {/* HERO SECTION */}
      <Box className="relative overflow-hidden bg-linear-to-b from-blue-50 via-white to-white">

        <Box className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
        <Box className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-sky-100/50 blur-3xl" />

        <Container maxWidth="xl" className="relative">
          <Box className="mx-auto max-w-4xl py-20 text-center md:py-28">

            <Box className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
              <Sparkles size={15} className="text-blue-600" />
              <Typography className="text-xs font-bold tracking-wide text-blue-700">
                SMARTER WORKFORCE MANAGEMENT
              </Typography>
            </Box>

            <Typography
              component="h1"
              className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
            >
              Manage Your People.
              <br />
              <span className="text-blue-600">
                Empower Your Business.
              </span>
            </Typography>

            <Typography className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
              Welcome to HCM Lite, your intelligent human capital
              management platform. Simplify HR operations, streamline
              workforce management, and bring your entire organization
              together in one place.
            </Typography>

            <Box className="mt-9 flex flex-wrap justify-center gap-4">
              <Button
                component="a"
                href="#roles"
                variant="contained"
                endIcon={<ArrowRight size={18} />}
                className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold normal-case shadow-lg shadow-blue-200 hover:bg-blue-700"
              >
                Get Started
              </Button>

              <Button
                component={Link}
                href="/login"
                variant="outlined"
                className="rounded-xl border-slate-200 px-7 py-3.5 font-semibold normal-case text-slate-700 hover:border-blue-500 hover:bg-blue-50"
              >
                Existing User? Sign In
              </Button>
            </Box>

            <Box className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
              {[
                "Simplified HR Operations",
                "Role-Based Access",
                "AI-Assisted Platform",
              ].map((item) => (
                <Box key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-600" />
                  <Typography className="text-sm font-medium text-slate-500">
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>

          </Box>
        </Container>
      </Box>

      {/* ROLE SELECTION */}
      <Box id="roles" className="bg-slate-50 py-20 md:py-24">
        <Container maxWidth="xl">

          <Box className="mx-auto mb-14 max-w-2xl text-center">

            <Typography className="mb-3 text-sm font-bold uppercase tracking-[2px] text-blue-600">
              GET STARTED WITH HCM LITE
            </Typography>

            <Typography
              component="h2"
              className="text-3xl font-extrabold text-slate-900 md:text-4xl"
            >
              Choose Your Workspace
            </Typography>

            <Typography className="mt-4 text-base leading-7 text-slate-500">
              Select your role to explore the platform and access
              the tools designed for your responsibilities.
            </Typography>

          </Box>

          <Box className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

            {roles.map((role) => {
              const Icon = role.icon;

              return (
                <Card
                  key={role.subtitle}
                  elevation={0}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/70"
                >
                  <CardContent className="flex flex-1 flex-col p-7 md:p-8">

                    <Box className="mb-6 flex items-center justify-between">
                      <Box className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        <Icon size={27} />
                      </Box>

                      <Typography className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold tracking-wider text-blue-600">
                        {role.subtitle}
                      </Typography>
                    </Box>

                    <Typography className="mb-3 text-xl font-bold text-slate-900">
                      {role.title}
                    </Typography>

                    <Typography className="mb-7 text-sm leading-7 text-slate-500">
                      {role.description}
                    </Typography>

                    <Box className="mb-8 flex-1 space-y-4">
                      {role.features.map((feature) => (
                        <Box key={feature} className="flex items-center gap-3">
                          <CheckCircle2 size={17} className="shrink-0 text-blue-600" />
                          <Typography className="text-sm font-medium text-slate-600">
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Button
                      component={Link}
                      href={role.href}
                      fullWidth
                      variant="contained"
                      endIcon={<ArrowRight size={17} />}
                      className="rounded-xl bg-blue-600 py-3 font-semibold normal-case shadow-none hover:bg-blue-700"
                    >
                      Continue as {role.subtitle}
                    </Button>

                  </CardContent>
                </Card>
              );
            })}

          </Box>

          <Box className="mt-10 text-center">
            <Typography className="text-sm text-slate-500">
              Already have an account?
              <Link
                href="/login"
                className="ml-1 font-bold text-blue-600 no-underline hover:text-blue-800"
              >
                Sign in to your account
              </Link>
            </Typography>
          </Box>

        </Container>
      </Box>

      {/* FEATURES */}
      <Box id="features" className="bg-white py-20 md:py-24">
        <Container maxWidth="xl">

          <Box className="mx-auto mb-14 max-w-2xl text-center">
            <Typography className="mb-3 text-sm font-bold uppercase tracking-[2px] text-blue-600">
              EVERYTHING IN ONE PLACE
            </Typography>

            <Typography
              component="h2"
              className="text-3xl font-extrabold text-slate-900 md:text-4xl"
            >
              Designed for Modern Workplaces
            </Typography>

            <Typography className="mt-4 text-base leading-7 text-slate-500">
              Bring your people, processes, and workforce insights
              together with one integrated platform.
            </Typography>
          </Box>

          <Box className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <Box key={item.title} className="text-center">
                  <Box className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={29} />
                  </Box>

                  <Typography className="mb-3 text-lg font-bold text-slate-900">
                    {item.title}
                  </Typography>

                  <Typography className="mx-auto max-w-xs text-sm leading-7 text-slate-500">
                    {item.description}
                  </Typography>
                </Box>
              );
            })}
          </Box>

        </Container>
      </Box>

      {/* FOOTER */}
      <Box className="border-t border-slate-100 bg-slate-50">
        <Container maxWidth="xl">
          <Box className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">

            <Typography className="text-sm font-bold text-slate-700">
              HCM <span className="text-blue-600">Lite</span>
              <span className="ml-2 font-normal text-slate-400">
                | Human Capital Management
              </span>
            </Typography>

            <Typography className="text-xs text-slate-400">
              © 2026 HCM Lite. All rights reserved.
            </Typography>

          </Box>
        </Container>
      </Box>

    </Box>
  );
}
