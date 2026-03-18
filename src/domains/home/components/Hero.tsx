"use client";

import MapSection from "./MapSection";
import { MapPin, Locate } from "lucide-react";

export default function Hero() {
    return (
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Find Your Next Farm Job in Australia
          </h1>

          <p className="text-gray-500 mb-10">
            Find farm jobs across Australia and complete your 88 days for visa
            extension.
          </p>

          <div className="border-2 border-orange-400 rounded-xl p-6">
            {/* Search Bar */}
            <div className="flex gap-4 mb-6 justify-center">
              <div className="relative w-1/2">
                <MapPin
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  className="w-full pl-10 pr-6 py-3 border rounded-full focus:outline-none focus:border-orange-400"
                  placeholder="Search by location, farm name, or job title"
                />
              </div>

              <button className="bg-orange-500 text-white px-6 py-3 rounded-full">
                Search
              </button>

              <button className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full">
                <Locate
                  size={18}
                  //   className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                Find Jobs Near Me
              </button>
            </div>

            <MapSection />
          </div>
        </div>
      </section>
    );
}