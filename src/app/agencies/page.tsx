import CompanyListClient from "@/domains/company/components/CompanyListClient";
import Navbar from "@/shared/components/layout/Navbar";
import MapSection from "@/domains/company/components/MapSection";

export default function AgenciesPage() {
  return (
    <main>
        <Navbar />
        <MapSection/>
        <CompanyListClient category="AGENCY" />;
    </main>
  );
}