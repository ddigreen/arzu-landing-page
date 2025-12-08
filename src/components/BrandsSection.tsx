import { Package } from "lucide-react";

const brands = [
  {
    name: "Arzu",
    weight: "300 g",
    description: "Ready in 7-9 minutes",
    highlight: true,
  },
  {
    name: "Arzu Classic",
    weight: "900 g",
    description: "Family pack",
    highlight: false,
  },
  {
    name: "Arzu Premium",
    weight: "980 g",
    description: "Premium quality",
    highlight: true,
  },
  {
    name: "Arzu Bulk",
    weight: "3 kg",
    description: "Wholesale pack",
    highlight: false,
  },
  {
    name: "Astau",
    weight: "980 g",
    description: "Traditional recipe",
    highlight: false,
  },
  {
    name: "Astau Family",
    weight: "1.8 kg",
    description: "24 portions",
    highlight: true,
  },
];

const BrandsSection = () => {
  return (
    <section id="brands" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Product Lines
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Our Brands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our variety of product lines, each crafted with care to
            meet different needs and occasions.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`group relative bg-card rounded-2xl p-6 shadow-soft card-hover overflow-hidden ${
                brand.highlight ? "ring-2 ring-primary/20" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {brand.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Popular
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Package className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                    {brand.name}
                  </h3>
                  <p className="text-2xl font-bold text-primary mb-1">
                    {brand.weight}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {brand.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
