
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Button,
  Avatar,
} from "@mui/material";
import {
  DashboardRounded,
  PeopleAltRounded,
  SettingsRounded,
  LogoutRounded,
  SecurityRounded,
  CheckCircleOutlineRounded,
} from "@mui/icons-material";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear your authentication session/token here.
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 md:flex">

      {/* Sidebar */}
      <aside className="flex w-full flex-col bg-slate-950 p-5 text-white md:min-h-screen md:w-64">
        <h1 className="mb-8 px-2 text-2xl font-bold">
          AuthFlow
        </h1>

        <nav className="flex flex-col gap-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-xl bg-indigo-600 px-4 py-3 font-medium"
          >
            <DashboardRounded />
            Dashboard
          </Link>

          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800"
          >
            <PeopleAltRounded />
            My Account
          </Link>

          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800"
          >
            <SettingsRounded />
            Settings
          </Link>
        </nav>

        <div className="mt-8 border-t border-slate-800 pt-5 md:mt-auto">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            <LogoutRounded />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="min-w-0 flex-1 p-5 sm:p-8 lg:p-10">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Dashboard
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Welcome to your authentication dashboard.
            </p>
          </div>

          <Avatar
            sx={{
              bgcolor: "#4f46e5",
              width: 48,
              height: 48,
            }}
          >
            U
          </Avatar>
        </header>

        {/* Welcome card */}
        <section className="mb-8 rounded-2xl bg-linear-to-r from-indigo-600 to-violet-700 p-6 text-white shadow-lg sm:p-8">
          <div className="flex items-center gap-3">
            <SecurityRounded sx={{ fontSize: 36 }} />

            <div>
              <h3 className="text-xl font-bold sm:text-2xl">
                Welcome to AuthFlow!
              </h3>

              <p className="mt-2 text-sm leading-6 text-indigo-100">
                Your dashboard is ready. Manage your account
                and authentication settings from here.
              </p>
            </div>
          </div>
        </section>

        {/* Overview cards */}
        <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <PeopleAltRounded />
            </div>

            <p className="text-sm text-slate-500">Account</p>

            <h3 className="mt-1 text-xl font-bold text-slate-900">
              My Profile
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              View your account information.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <CheckCircleOutlineRounded />
            </div>

            <p className="text-sm text-slate-500">Authentication</p>

            <h3 className="mt-1 text-xl font-bold text-slate-900">
              Get Started
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Connect this dashboard to your backend.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2 xl:col-span-1">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
              <SecurityRounded />
            </div>

            <p className="text-sm text-slate-500">Security</p>

            <h3 className="mt-1 text-xl font-bold text-slate-900">
              Account Security
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Authentication features will appear here.
            </p>
          </div>
        </section>

        <footer className="mt-10 text-center text-sm text-slate-400">
          AuthFlow · Hackathon Starter Template
        </footer>
      </main>
    </div>
  );
}
