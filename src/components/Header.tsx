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

  const navLinks = [
    { name: "Главная", href: "#home" },
    { name: "О нас", href: "#about" },
    { name: "Стратегия", href: "#strategy" },
    { name: "Продукция", href: "#products" },
    { name: "Рецепты", href: "#recipes" },
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
                .getElementById("contacts")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Связаться
          </Button>

          <button
            className={`lg:hidden p-2 ${
              isScrolled ? "text-foreground" : "text-card"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-card shadow-medium animate-fade-up">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block px-6 py-3 text-foreground/80 font-medium hover:text-primary hover:bg-accent/50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="px-6 py-3">
                <Button
                  className="w-full btn-secondary"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document
                      .getElementById("contacts")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Связаться
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
