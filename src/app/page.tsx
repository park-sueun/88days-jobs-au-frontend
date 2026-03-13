import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import SearchBar from "@/components/home/SearchBar";
import MapPreview from "@/components/home/MapSection";
import Header from "@/components/home/Header";
import PopularJobs from "@/components/home/PopularJobs";
import Footer from "@/components/home/Footer";

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
