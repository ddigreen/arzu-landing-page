import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacts" className="bg-charcoal text-card">
      <div className="container-wide section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <a
              href="#home"
              className="text-3xl font-display font-bold tracking-wider text-primary inline-block mb-4"
            >
              ARZU
            </a>
            <p className="text-card/70 mb-6 leading-relaxed">
              ТОО «Та-Мак» — ведущий производитель макаронных изделий
              премиум-класса в Казахстане с 2002 года.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-card">Навигация</h4>
            <ul className="space-y-3">
              {[
                { label: "Главная", href: "#home" },
                { label: "Продукция", href: "#products" },
                { label: "О нас", href: "#about" },
                { label: "Рецепты", href: "#recipes" },
                { label: "Контакты", href: "#contacts" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-card/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-card">Продукция</h4>
            <ul className="space-y-3">
              {["Жайма", "Яичная лапша", "Лапша Лагман", "Кеспе", "Спагетти"].map(
                (product) => (
                  <li key={product}>
                    <a
                      href="#products"
                      className="text-card/70 hover:text-primary transition-colors"
                    >
                      {product}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-card">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-card/70">
                  Жамбылская область, Казахстан
                  <br />
                  г. Тараз, ул. Сорокина, 1В
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+77262466363"
                  className="text-card/70 hover:text-primary transition-colors"
                >
                  +7 (7262) 46 63 63
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:info@arzu.kz"
                  className="text-card/70 hover:text-primary transition-colors"
                >
                  info@arzu.kz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-card/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-card/50 text-sm">
              © {currentYear} ТОО «Та-Мак». Все права защищены.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-card/50 hover:text-card transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-card/50 hover:text-card transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
