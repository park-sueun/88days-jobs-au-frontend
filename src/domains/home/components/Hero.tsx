"use client";

export default function HeroSection() {
  return (
    <div
      className="w-full h-[420px] bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative text-center text-white w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">
          Find Farm & Factory Jobs in Australia
        </h1>

        {/* search bar */}
        <div className="bg-white rounded-xl shadow-lg flex items-center overflow-hidden">
          <input
            placeholder="Search for ..."
            className="flex-1 px-4 py-4 text-gray-700 outline-none"
          />
          <button className="bg-blue-900 text-white px-6 py-4 font-semibold">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
