// app/companies/farms/page.tsx

import CompanyHero from "@/domains/company/components/CompanyHero";
import CompanyFilters from "@/domains/company/components/CompanyFilters";
import CompanyListLayout from "@/domains/company/components/CompanyListLayout";
import CompanyTable from "@/domains/company/components/CompanyTable";
import Navbar from "@/shared/components/layout/Navbar";
import MapSection from "@/domains/company/components/MapSection";
import CompanyListClient from "@/domains/company/components/CompanyListClient";
import { useCompanies } from "@/domains/company/hooks/useCompanies";

export default function FarmPage() {
  return (
    <main>
      <Navbar />
      <MapSection/>
      <CompanyListClient category="FARM" />;
    </main>
  );
}