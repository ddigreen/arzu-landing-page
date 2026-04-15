import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Главная", href: "#home" },
    { name: "О нас", href: "#about" },
    { name: "Стратегия", href: "#strategy" },
    { name: "Продукция", href: "#products" },
    { name: "Рецепты", href: "#recipes" },
    { name: "Где купить", href: "#store-map" },
    { name: "Партнёры", href: "#partners" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="text-3xl font-display font-bold tracking-wider text-primary transition-colors hover:text-primary/80"
          >
            ARZU
          </a>

          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${
                    isScrolled
                      ? "text-foreground/80 hover:text-primary"
                      : "text-card/90 hover:text-primary"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <Button
            className="hidden lg:inline-flex btn-secondary"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Связаться
          </Button>

          <button
            className={`lg:hidden p-2 relative z-[80] ${
              isMobileMenuOpen ? "text-foreground" : isScrolled ? "text-foreground" : "text-card"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "top-3 rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute left-0 top-3 block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "top-3 -rotate-45" : "top-5"
                }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-foreground/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden z-[60] ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-card shadow-lg transition-transform duration-300 ease-out lg:hidden z-[70] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-24 px-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block px-4 py-3 text-foreground/80 font-medium hover:text-primary hover:bg-accent/50 rounded-xl transition-all duration-200"
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div
            className="mt-6 px-4"
            style={{
              transitionDelay: isMobileMenuOpen ? `${navLinks.length * 50}ms` : "0ms",
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? "translateX(0)" : "translateX(20px)",
              transition: "all 0.3s ease-out",
            }}
          >
            <Button
              className="w-full btn-secondary"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Связаться
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
