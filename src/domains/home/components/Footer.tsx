"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-200 border-t mt-20 border-gray-300">
      <div className="max-w-screen-xl mx-auto px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold mb-4">🇦🇺 FARM JOBS</h2>
            <p className="text-gray-600 text-sm">
              Find farm jobs across Australia and complete your 88 days for visa extension.
            </p>
          </div>

          {/* Jobs */}
          <div>
            <h3 className="font-semibold mb-3">Jobs</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link href="#">Find Jobs</Link></li>
              <li><Link href="#">Browse Farms</Link></li>
              <li><Link href="#">Popular Locations</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Careers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* bottom line */}
        <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Farm Jobs. All rights reserved.
        </div>

      </div>
    </footer>
  );
}