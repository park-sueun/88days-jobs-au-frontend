"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        <div className="text-xl font-bold flex items-center gap-2">
          💧 FARM JOBS
        </div>

        <nav className="flex gap-8 text-gray-600">
          <Link href="#">Find Jobs</Link>
          <Link href="#">Companies</Link>
          <Link href="#">Communities</Link>
          <Link href="#">About</Link>
        </nav>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
            Sign Up
          </button>
          <button className="px-4 py-2 border rounded-md">
            Sign In
          </button>
        </div>

      </div>
    </header>
  );
}