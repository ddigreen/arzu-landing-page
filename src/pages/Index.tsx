import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ProductionTimeline from "@/components/ProductionTimeline";
import StrategySection from "@/components/StrategySection";
import ProductsSection from "@/components/ProductsSection";
import RecipesSection from "@/components/RecipesSection";
import PartnersSection from "@/components/PartnersSection";
import EventCalculator from "@/components/EventCalculator";
import ContactSection from "@/components/ContactSection";
import StoreMapSection from "@/components/StoreMapSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedSection from "@/components/AnimatedSection";

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
        <AnimatedSection>
          <StrategySection />
        </AnimatedSection>
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
        <AnimatedSection>
          <EventCalculator />
        </AnimatedSection>
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
