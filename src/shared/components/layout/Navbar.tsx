"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
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
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LEFT - Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg text-blue-600"
        >
          <Image
            src="/logo.png" // public 폴더에 위치
            alt="88Days Jobs"
            width={60}
            height={10}
            className="object-contain"
          />
        </Link>

        {/* CENTER - Nav */}
        <nav className="flex items-center gap-8 text-gray-600 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/jobs" className="hover:text-blue-600 transition">
            Find Jobs
          </Link>
          <Link href="/farms" className="hover:text-blue-600 transition">
            Farms
          </Link>
          <Link href="/factories" className="hover:text-blue-600 transition">
            Factories
          </Link>
          <Link
            href="/workingHostels"
            className="hover:text-blue-600 transition"
          >
            Working Hostel
          </Link>
          <Link href="/agencies" className="hover:text-blue-600 transition">
            Agencies
          </Link>
          <Link href="/community" className="hover:text-blue-600 transition">
            Community
          </Link>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* Profile */}
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
                  className="px-5 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-950 transition"
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
      </div>
    </header>
  );
}
