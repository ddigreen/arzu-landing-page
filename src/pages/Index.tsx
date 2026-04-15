import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ProductionTimeline from "@/components/ProductionTimeline";
import StrategySection from "@/components/StrategySection";
import ProductsSection from "@/components/ProductsSection";
import RecipesSection from "@/components/RecipesSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import StoreMapSection from "@/components/StoreMapSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import parallaxWheat1 from "@/assets/parallax-wheat-1.jpg";
import parallaxWheat2 from "@/assets/parallax-wheat-2.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection>
          <ProductionTimeline />
        </AnimatedSection>
        <ParallaxSection image={parallaxWheat1}>
          <AnimatedSection>
            <StrategySection />
          </AnimatedSection>
        </ParallaxSection>
        <AnimatedSection>
          <ProductsSection />
        </AnimatedSection>
        <AnimatedSection>
          <RecipesSection />
        </AnimatedSection>
        <AnimatedSection>
          <StoreMapSection />
        </AnimatedSection>
        <AnimatedSection>
          <PartnersSection />
        </AnimatedSection>
        <ParallaxSection image={parallaxWheat2}>
          <AnimatedSection>
            <ContactSection />
          </AnimatedSection>
        </ParallaxSection>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
