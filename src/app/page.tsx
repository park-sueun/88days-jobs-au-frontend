import Header from "@/domains/home/components/Header";
import Hero from "@/domains/home/components/Hero";
import PopularJobs from "@/domains/home/components/PopularJobs";
import Footer from "@/domains/home/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />
      <Hero />
      <PopularJobs />
      <Footer />
    </main>
  );
}
