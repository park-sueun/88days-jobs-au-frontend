"use client";

import { useState } from "react";
import { login } from "../api/authApi";
import { getMe } from "@/domains/user/api/userApi";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function LoginForm() {

    const router = useRouter();

    const setToken = useAuthStore((state) => state.setToken);
    const setUser = useAuthStore((state) => state.setUser);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 1. 로그인
        const res = await login({ email, password });

        // 2. 토큰 저장
        const token = res.accessToken;
        setToken(token);

        // 3. 유저 조회
        const user = await getMe();

        // 4. 유저 저장
        setUser(user);

        // 5. 메인 이동
        router.push("/");
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