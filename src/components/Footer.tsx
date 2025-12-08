import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacts" className="bg-charcoal text-card">
      <div className="container-wide section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              className="text-3xl font-display font-bold tracking-wider text-primary inline-block mb-4"
            >
              ARZU
            </a>
            <p className="text-card/70 mb-6 leading-relaxed">
              Ta-Mak LLP - Leading manufacturer of premium pasta products in
              Kazakhstan since 2002.
            </p>
            {/* Social Links */}
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

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-card">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Products", "About", "Recipes", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-card/70 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-card">Products</h4>
            <ul className="space-y-3">
              {[
                "Zhaima",
                "Egg Noodles",
                "Lagman Noodles",
                "Kespe",
                "Spaghetti",
              ].map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-card/70 hover:text-primary transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-card">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-card/70">
                  Almaty Region, Kazakhstan
                  <br />
                  Industrial Zone, Building 15
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+77001234567"
                  className="text-card/70 hover:text-primary transition-colors"
                >
                  +7 (700) 123-45-67
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

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-card/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-card/50 text-sm">
              © {currentYear} Ta-Mak LLP. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-card/50 hover:text-card transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-card/50 hover:text-card transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
