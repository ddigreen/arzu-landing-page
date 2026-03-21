import { Building2 } from "lucide-react";

const partners = [
  { name: "FoodCorp Kazakhstan", type: "Дистрибьютор" },
  { name: "National Culinary Union", type: "Ассоциация" },
  { name: "Local Markets LLC", type: "Розница" },
  { name: "Magnum Cash & Carry", type: "Розница" },
  { name: "Small Wholesale", type: "Опт" },
  { name: "Galmart", type: "Розница" },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="section-padding bg-charcoal text-card">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Нам доверяют
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Наши партнёры
          </h2>
          <p className="text-lg text-card/70 max-w-2xl mx-auto">
            Мы сотрудничаем с ведущими ритейлерами и дистрибьюторами Казахстана,
            чтобы наша продукция была на вашем столе.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group flex items-center gap-4 p-6 rounded-2xl bg-card/5 border border-card/10 hover:bg-card/10 hover:border-primary/30 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card group-hover:text-primary transition-colors">
                  {partner.name}
                </h3>
                <p className="text-sm text-card/60">{partner.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
