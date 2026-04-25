import { Award, ShieldCheck, Globe } from "lucide-react";

const certificates = [
  {
    icon: ShieldCheck,
    title: "ISO 9001-2009",
    description: "Международный стандарт системы менеджмента качества",
  },
  {
    icon: Award,
    title: "ISO 22000-2005",
    description: "Безопасность пищевой продукции на всех этапах производства",
  },
  {
    icon: Globe,
    title: "ISO 18000",
    description: "Международная система охраны труда и безопасности",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Гарантия качества
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Сертификаты и стандарты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Качество продукции Arzu подтверждено международными сертификатами
            и многолетним доверием наших покупателей
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className="group relative bg-card rounded-2xl p-8 shadow-soft card-hover border border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <cert.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
