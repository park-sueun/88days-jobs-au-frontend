"use client";

import MapSection from "./MapSection";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-16">

      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-4xl font-bold mb-4">
          Find Your Next Farm Job in Australia
        </h1>

        <p className="text-gray-500 mb-10">
          Find farm jobs across Australia and complete your 88 days for visa extension.
        </p>

        <div className="border-2 border-orange-400 rounded-xl p-6">

          {/* Search Bar */}
          <div className="flex gap-4 mb-6 justify-center">

            <input
              className="w-1/2 px-6 py-3 border rounded-full"
              placeholder="Search by location, farm name, or job title"
            />

            <button className="bg-orange-500 text-white px-6 py-3 rounded-full">
              Search
            </button>

            <button className="bg-gray-800 text-white px-6 py-3 rounded-full">
              Find Jobs Near Me
            </button>

          </div>

          <MapSection />

        </div>

      </div>

    </section>
  );
}