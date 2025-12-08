import {
  Calendar,
  Award,
  Cpu,
  MapPin,
  Phone,
  Shield,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Founded in 2002",
    description:
      "Over 20 years of expertise in producing premium quality pasta products for Kazakh families.",
  },
  {
    icon: Award,
    title: "Halal Certified",
    description:
      "All our products meet strict Halal standards (MS 1500-2004), ensuring quality and trust.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description:
      "State-of-the-art Italian equipment combined with traditional recipes for the best results.",
  },
];

const certificates = [
  "ISO 9001-2009",
  "ISO 22000-2005",
  "MS 1500-2004",
  "ISO 18000",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            About Ta-Mak LLP
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Quality You Can Trust
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ТОО «Та-Мак» — leading manufacturer of pasta products in Kazakhstan.
            The «Arzu-Astau» factory was founded in 2002 and is part of the
            Ta-Mak group of companies. Our mission is to preserve national
            traditions while creating quality products at affordable prices.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-8 shadow-soft card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company Info & Certificates */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Company Details */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-primary" />
              Company Details
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="font-semibold text-foreground min-w-32">
                  Location:
                </span>
                <span className="text-muted-foreground">
                  Republic of Kazakhstan, Zhambyl Region, Taraz, Sorokina St., 1V
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-foreground min-w-32">
                  Phone:
                </span>
                <a
                  href="tel:+77262466363"
                  className="text-primary hover:underline"
                >
                  +7 (7262) 46 63 63
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-foreground min-w-32">
                  Founded:
                </span>
                <span className="text-muted-foreground">2002</span>
              </li>
            </ul>
          </div>

          {/* Certificates & Awards */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              Certificates & Awards
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {certificates.map((cert) => (
                <span
                  key={cert}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 p-4 bg-accent/50 rounded-xl">
              <Trophy className="w-8 h-8 text-primary shrink-0" />
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">Altyn Sapa</strong> diploma
                recipient, laureate of national and regional quality competitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
