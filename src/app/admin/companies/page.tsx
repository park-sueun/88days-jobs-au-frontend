import Sidebar from "@/domains/admin/components/Sidebar";
import StatCard from "@/domains/admin/components/StatCard";
import AdminCompanyTable from "@/domains/admin/components/AdminCompanyTable";

export default function AdminCompaniesPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Company Management</h1>
          <p className="text-gray-500">
            Manage farms, factories, agencies and hostels
          </p>
        </div>

        {/* stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Companies" value="128" />
          <StatCard title="Farms" value="54" />
          <StatCard title="Factories" value="31" />
        </div>

        {/* company list */}
        <AdminCompanyTable />
      </main>
    </div>
  );
}
