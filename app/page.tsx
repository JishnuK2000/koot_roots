import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/home/Hero";
import BrandStory from "@/src/components/home/BrandStory";
import FeaturedProducts from "@/src/components/home/FeaturedProducts";
import WhyKooturoots from "@/src/components/home/WhyKooturoots";
import SpiceExperience from "@/src/components/home/SpiceExperience";
import Testimonials from "@/src/components/home/Testimonials";
import CTASection from "@/src/components/home/CTASection";
import Footer from "@/src/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <BrandStory />
        <FeaturedProducts />
        <WhyKooturoots />
        <SpiceExperience />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
