import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import BrandsSection from "@/components/BrandsSection";
import StrategySection from "@/components/StrategySection";
import ProductsSection from "@/components/ProductsSection";
import RecipesSection from "@/components/RecipesSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <BrandsSection />
        <StrategySection />
        <ProductsSection />
        <RecipesSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
