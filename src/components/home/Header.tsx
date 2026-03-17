"use client";

import { useState, useRef, useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  /* close dropdown when clicking outside */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!hasHydrated) return null;

  return (
    <header className="w-full h-16 border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
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
            <div ref={dropdownRef} className="relative">
              {/* Avatar + Name */}
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Hi, {user.firstName}
                </span>

                <img
                  src={user.profileImageUrl || "/avatar.png"}
                  alt="avatar"
                  className="w-7 h-7 rounded-full object-cover"
                />
              </div>

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 top-12 w-44 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => {
                      router.push("/profile");
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-gray-100"
                  >
                    My Profile
                  </button>

                  <button
                    onClick={() => {
                      router.push("/saved");
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-gray-100"
                  >
                    Saved List
                  </button>

                  {/* ADMIN MENU */}
                  {user.role === "ADMIN" && (
                    <>
                      <div className="border-t border-gray-200" />

                      <button
                        onClick={() => {
                          router.push("/admin");
                          setOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-gray-100 font-medium text-indigo-600"
                      >
                        Admin Dashboard
                      </button>
                    </>
                  )}

                  <div className="border-t border-gray-200" />

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-gray-100 text-red-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/auth/signup"
                className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
              >
                Sign Up
              </Link>

              <Link
                href="/auth/signin"
                className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}