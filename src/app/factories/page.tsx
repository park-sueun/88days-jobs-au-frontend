"use client";

import Navbar from "@/shared/components/layout/Navbar";
import MapSection from "@/domains/company/components/MapSection";
import CompanyListClient from "@/domains/company/components/CompanyListClient";
import { useCompanies } from "@/domains/company/hooks/useCompanies";

export default function FactoryPage() {
  const { companies, loading, error } = useCompanies("FACTORY");

  return (
    <main>
      <Navbar />

      {/* Map */}
      <MapSection companies={companies} loading={loading} error={error} />

      {/* List */}
      <CompanyListClient
        companies={companies}
        loading={loading}
        error={error}
      />
    </main>
  );
}
