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
    title: "Основана в 2002 году",
    description:
      "Более 20 лет опыта в производстве высококачественных макаронных изделий для казахстанских семей.",
  },
  {
    icon: Cpu,
    title: "Современные технологии",
    description:
      "Итальянское оборудование последнего поколения в сочетании с традиционными рецептами.",
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
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            О компании ТОО «Та-Мак»
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Качество, которому доверяют
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ТОО «Та-Мак» — ведущий производитель макаронных изделий в Казахстане.
            Фабрика «Арзу-Астау» основана в 2002 году и входит в группу компаний
            «Та-Мак». Наша миссия — сохранять народные традиции, создавая
            качественный продукт по доступной цене.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-8 shadow-soft card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-primary" />
              Реквизиты компании
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="font-semibold text-foreground min-w-32">
                  Адрес:
                </span>
                <span className="text-muted-foreground">
                  Республика Казахстан, Жамбылская обл., г. Тараз, ул. Сорокина, 1В
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-foreground min-w-32">
                  Телефон:
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
                  Год основания:
                </span>
                <span className="text-muted-foreground">2002</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              Сертификаты и награды
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
                Дипломант <strong className="text-foreground">«Алтын Сапа»</strong>,
                лауреат республиканских и областных конкурсов качества.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
