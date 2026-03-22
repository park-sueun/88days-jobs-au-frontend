"use client";

import CompanyListLayout from "./CompanyListLayout";
import CompanyFilters from "./CompanyFilters";
import CompanyTable from "./CompanyTable";
import { Company } from "../types/company";

export default function CompanyListClient({
  companies,
  loading,
  error,
}: {
  companies: Company[];
  loading: boolean;
  error: string | null;
}) {
  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <CompanyListLayout
      filters={<CompanyFilters />}
      table={<CompanyTable companies={companies} loading={loading} />}
    />
  );
}