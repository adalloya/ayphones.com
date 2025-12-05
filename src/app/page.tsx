import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Banners from "@/components/Banners";
import FeaturedProducts from "@/components/FeaturedProducts";
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Features />
      <Banners />
      <FeaturedProducts />
    </main>
  );
}
