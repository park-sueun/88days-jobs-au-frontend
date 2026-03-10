"use client";

import { useState } from "react";
import { login } from "../api/authApi";
import { useAuthStore } from "@/store/authStore";

export default function LoginForm() {
    const setToken = useAuthStore((state) => state.setToken);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await login({ email, password });

        setToken(res.accessToken);
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
        />

        <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        </form>
    );
}