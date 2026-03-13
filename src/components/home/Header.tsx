"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import Link from "next/link";

export default function Header() {

  const user = useAuthStore((state) => state.user);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);
  const [open, setOpen] = useState(false);

  if (!hasHydrated) {
    return null;
  }
  
  return (
    <header className="w-full h-16 border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-gray-800 text-lg"
        >
          🇦🇺 FARM JOBS
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-10 text-gray-500 font-medium text-sm">
          <Link href="/jobs" className="hover:text-gray-900 transition">
            Find Jobs
          </Link>

          <Link href="/farms" className="hover:text-gray-900 transition">
            Farms
          </Link>

          <Link href="/factories" className="hover:text-gray-900 transition">
            Factories
          </Link>

          <Link href="/communities" className="hover:text-gray-900 transition">
            Communities
          </Link>

          <Link href="/about" className="hover:text-gray-900 transition">
            About
          </Link>
        </nav>

        {/* Auth Area */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3 cursor-pointer">
              <span className="text-m font-medium text-gray-700">
                Hi, {user.firstName}
              </span>

              <img
                src={user.profileImageUrl || "/avatar.png"}
                alt="avatar"
                className="w-7 h-7 rounded-full object-cover"
              />
            </div>
          ) : (
            <>
              <Link
                href="/auth/signup"
                className="px-5 py-2 bg-orange-500 text-white rounded-lg"
              >
                Sign Up
              </Link>

              <Link href="/auth/signin" className="px-5 py-2 border rounded-lg">
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}