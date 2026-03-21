"use client";

import CompanyListLayout from "./CompanyListLayout";
import CompanyFilters from "./CompanyFilters";
import CompanyTable from "./CompanyTable";
import { useCompanies } from "../hooks/useCompanies";
import { CompanyCategory } from "../types/company";

export default function CompanyListClient({
  category,
}: {
  category: CompanyCategory;
}) {
  const { companies, loading, error } = useCompanies(category);

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <CompanyListLayout
      filters={<CompanyFilters />}
      table={
        <CompanyTable
          companies={companies}
          loading={loading}
        />
      }
    />
  );
}