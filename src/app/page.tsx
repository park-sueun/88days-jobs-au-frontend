import Hero from "@/domains/home/components/Hero";
import Footer from "@/domains/home/components/Footer";
import FeaturedJobs from "@/domains/home/components/FeaturedJobs";
import Navbar from "@/shared/components/layout/Navbar";
import TopCompanies from "@/domains/home/components/TopCompanies";

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedJobs />
      <TopCompanies />
      <Footer />
    </main>
  );
}
