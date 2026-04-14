import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-medium flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Наверх"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTop;
