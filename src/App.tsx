import { useState } from "react";
import { AnimatePresence } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import StorySection from "./components/StorySection";
import FeaturedCarousel from "./components/FeaturedCarousel";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <main className="min-h-screen bg-paper overflow-x-hidden">
          <Navbar />
          <Hero />
          <ProductGrid />
          <StorySection />
          <FeaturedCarousel />
          <Footer />
        </main>
      )}
    </>
  );
}
