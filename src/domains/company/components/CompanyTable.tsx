"use client";

function StatusBadge({ active }: { active: boolean }) {
  return (
    <span
      className={`text-xs px-2 py-1 rounded-full ${
        active
          ? "bg-green-100 text-green-700"
          : "bg-gray-100 text-gray-500"
      }`}
    >
      {active ? "Active" : "Closed"}
    </span>
  );
}

export default function CompanyTable({
  companies,
  loading,
}: {
  companies: any[];
  loading: boolean;
}) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm rounded w-20">
        <thead className="text-left text-blue-950 bg-blue-50">
          <tr>
            <th className="p-4">Name</th>
            <th>Category</th>
            <th>Season</th>
            <th>Location</th>
            <th>Postcode</th>
            <th>State</th>
          </tr>
        </thead>

        <tbody>
          {/* 1. Loading */}
          {loading &&
            [...Array(5)].map((_, i) => (
              <tr key={i} className="animate-pulse">
                <td className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-32" />
                </td>
                <td><div className="h-4 bg-gray-200 rounded w-20" /></td>
                <td><div className="h-4 bg-gray-200 rounded w-20" /></td>
                <td><div className="h-4 bg-gray-200 rounded w-24" /></td>
                <td><div className="h-4 bg-gray-200 rounded w-16" /></td>
                <td><div className="h-4 bg-gray-200 rounded w-12" /></td>
              </tr>
            ))}

          {/* 2. Empty */}
          {!loading && companies.length === 0 && (
            <tr>
              <td
                colSpan={7}
                className="text-center py-10 text-gray-400"
              >
                No companies found
              </td>
            </tr>
          )}

          {/* 3. Data */}
          {!loading &&
            companies.map((c: any) => (
              <tr
                key={c.id}
                className="
                  odd:bg-white 
                  even:bg-gray-50 
                  hover:bg-blue-50 
                  transition 
                  cursor-pointer
                "
              >
                <td className="p-4 font-medium text-blue-950">
                  {c.name}
                </td>
                <td>{c.crop_type}</td>
                <td>{c.season}</td>
                <td>{c.suburb}</td>
                <td>{c.postcode}</td>
                <td>{c.state}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}