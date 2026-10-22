"use client";

import { apiRequest } from "@/lib/api"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import {
    TextField,
    Button,
    InputAdornment,
    IconButton,
} from "@mui/material";
import {
    EmailOutlined,
    LockOutlined,
    Visibility,
    VisibilityOff,
    PersonAddAlt1Rounded,
} from "@mui/icons-material";

export default function SignupPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const formData = new FormData(e.currentTarget);

            const result = await apiRequest("/sign-up", {
                method: "POST",
                body: JSON.stringify({
                    email: formData.get("email"),
                    password: formData.get("password"),
                })
            });

           alert(result.message || "Account created successfully");
           router.push("/login");
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
            <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">

                <section className="hidden flex-col justify-between bg-linear-to-br from-indigo-700 to-violet-800 p-12 text-white md:flex">
                    <div>
                        <h1 className="text-3xl font-bold">AuthFlow</h1>

                        <h2 className="mt-16 text-4xl font-bold leading-tight">
                            Create your account.
                        </h2>

                        <p className="mt-4 leading-7 text-indigo-100">
                            Get started with a simple, secure authentication
                            experience.
                        </p>
                    </div>

                    <p className="text-sm text-indigo-200">
                        Hackathon Authentication Template
                    </p>
                </section>

                <section className="flex flex-col justify-center p-7 sm:p-12">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Create Account
                    </h2>

                    <p className="mb-8 mt-2 text-sm text-slate-500">
                        Enter your email and choose a password.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <TextField
                            fullWidth
                            required
                            name="email"
                            type="email"
                            label="Email address"
                            autoComplete="email"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailOutlined />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            required
                            name="password"
                            type={showPassword ? "text" : "password"}
                            label="Password"
                            autoComplete="new-password"
                            slotProps={{
                                htmlInput: { minLength: 8 },
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOutlined />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                type="button"
                                                aria-label="Toggle password visibility"
                                                onClick={() =>
                                                    setShowPassword((prev) => !prev)
                                                }
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />

                        {error && (
                            <p role="alert" className="text-sm text-red-600">
                                {error}
                            </p>
                        )}

                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            disabled={loading}
                            endIcon={<PersonAddAlt1Rounded />}
                            sx={{
                                py: 1.5,
                                borderRadius: "12px",
                                textTransform: "none",
                                fontSize: "16px",
                                fontWeight: 600,
                                boxShadow: "none",
                                background: "linear-gradient(90deg, #4f46e5, #6d28d9)",
                                "&:hover": {
                                    background: "linear-gradient(90deg, #4338ca, #5b21b6)",
                                },
                            }}
                        >
                            {loading ? "Creating account..." : "Sign Up"}
                        </Button>
                    </form>

                    <p className="mt-7 text-center text-sm text-slate-600">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-semibold text-indigo-600 hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </section>
            </div>
        </main>
    );
}
