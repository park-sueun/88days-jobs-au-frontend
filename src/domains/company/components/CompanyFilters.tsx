// CompanyFilters.tsx

export default function CompanyFilters() {
  return (
    <aside className="w-[260px] sticky top-20 h-fit bg-gray-50 p-5 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-4">Filters</h3>

      {/* State */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-2">State</p>

        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
          {["NSW", "QLD", "VIC", "SA", "NT", "TAS", "WA"].map((state) => (
            <label key={state} className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              {state}
            </label>
          ))}
        </div>
      </div>

      {/* Season */}
      <div>
        <p className="text-sm font-medium mb-2">Season</p>
        
        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
          {["All Year", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"].map((s) => (
          <label key={s} className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            {s}
          </label>
        ))}
        </div>
      
      </div>

      <button className="w-full mt-6 bg-blue-900 text-white py-2 rounded-lg">
        Apply Filters
      </button>
    </aside>
  );
}