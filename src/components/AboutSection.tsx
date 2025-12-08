import { Calendar, Award, Cpu } from "lucide-react";

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
      "All our products meet strict Halal standards, ensuring quality and trust for our customers.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description:
      "State-of-the-art Italian equipment combined with traditional recipes for the best results.",
  },
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine time-honored Kazakh culinary traditions with modern
            manufacturing excellence to bring you the finest pasta products.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default AboutSection;
