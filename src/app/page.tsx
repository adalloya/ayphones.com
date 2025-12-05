import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <FeaturedProducts />
    </main>
  );
}
