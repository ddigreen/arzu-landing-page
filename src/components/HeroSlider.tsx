import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-beshbarmak.jpg";
import sliderWheat from "@/assets/slider-wheat.jpg";
import sliderFactory from "@/assets/slider-factory.jpg";
import heroBeshbarmak from "@/assets/hero-beshbarmak.png";
import heroArzuBrand from "@/assets/hero-arzu-brand.png";

const slides = [
  {
    image: heroArzuBrand,
    title: "",
    subtitle: "",
    description: "",
    hideText: true,
  },
  {
    image: heroBeshbarmak,
    title: "Народные традиции",
    subtitle: "На вашем столе",
    description: "Ведущий производитель макаронных изделий в Казахстане с 2002 года",
    hideText: false,
  },
  {
    image: sliderWheat,
    title: "Казахстанская пшеница",
    subtitle: "Высшее качество",
    description: "Мы используем только лучшую отечественную пшеницу твёрдых сортов",
    hideText: false,
  },
  {
    image: sliderFactory,
    title: "Современное производство",
    subtitle: "Итальянские технологии",
    description: "Передовое оборудование в сочетании с традиционными рецептами",
    hideText: false,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-charcoal">
            <img
              src={slide.image}
              alt={slide.title || "Arzu"}
              className="absolute inset-0 w-full h-full object-contain md:object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {!slide.hideText && (
              <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
            )}
          </div>

          {!slide.hideText && (
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="container-wide text-center text-card">
                <div
                  className={`max-w-4xl mx-auto transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-primary">
                      С 2002 года
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-2 leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-primary">
                    {slide.subtitle}
                  </h2>

                  <p className="text-xl md:text-2xl text-card/80 mb-10 max-w-2xl mx-auto font-light">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      className="btn-primary text-lg px-8 py-4"
                      onClick={() =>
                        document
                          .getElementById("products")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Наша продукция
                    </button>
                    <button
                      className="text-lg px-8 py-4 border border-card/30 rounded-lg text-card hover:bg-card/10 backdrop-blur-sm transition-all"
                      onClick={() =>
                        document
                          .getElementById("about")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/80 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors shadow-medium"
        onClick={() => { setIsAutoPlaying(false); prevSlide(); }}
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/80 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors shadow-medium"
        onClick={() => { setIsAutoPlaying(false); nextSlide(); }}
        aria-label="Следующий слайд"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-card/50 hover:bg-card/80"
            }`}
            onClick={() => { setIsAutoPlaying(false); setCurrentSlide(index); }}
            aria-label={`Слайд ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
