"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useAuthStore } from "@/store/authStore";
import { getMe } from "@/services/users/userService";

export default function Navbar() {

    const user = useAuthStore((state) => state.user);
    const setUser = useAuthStore((state) => state.setUser);

    useEffect(() => {

        const loadUser = async () => {
            try {
                const me = await getMe();
                setUser(me);
            } catch (err) {
                console.error(err);
            }
        };

        if (!user) {
            loadUser();
        }

    }, []);

    return (
        <header className="flex items-center justify-between px-12 py-6">

        <nav className="flex gap-8 text-sm text-gray-700">
            <a href="#">Find Jobs</a>
            <a href="#">My Page</a>
            <a href="#">Get the App</a>
        </nav>

        <div className="flex items-center gap-2 border border-orange-400 px-4 py-2 rounded-xl">
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <span className="font-semibold">Australia Jobs</span>
        </div>

        <div className="flex items-center gap-6">
            <button className="text-gray-600">🔔</button>

            <div className="flex items-center gap-2">
                <img src="/avatar.jpg" className="w-8 h-8 rounded-full" />

                <span className="text-sm">
                    Welcome, {user?.firstName ?? "Guest"}
                </span>

            </div>
        </div>

        </header>
    );
}