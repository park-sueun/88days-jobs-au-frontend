// CompanySearchBar.tsx

export default function CompanySearchBar() {
  return (
    <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
      <input
        className="flex-1 border-none outline-none text-sm"
        placeholder="Search by name or location..."
      />

      <button className="bg-orange-500 text-white px-5 py-2 rounded-lg">
        Search
      </button>
    </div>
  );
}