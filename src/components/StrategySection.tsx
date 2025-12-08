import { Lightbulb, TrendingUp, Monitor, Globe } from "lucide-react";

const strategies = [
  {
    icon: Lightbulb,
    title: "Innovative Technologies",
    description: "Cutting-edge production methods for superior quality",
  },
  {
    icon: TrendingUp,
    title: "Market Expansion",
    description: "Growing our product range and market reach",
  },
  {
    icon: Monitor,
    title: "Electronic Quality Control",
    description: "Digital monitoring for consistent excellence",
  },
  {
    icon: Globe,
    title: "International Presence",
    description: "Participation in global food exhibitions",
  },
];

const StrategySection = () => {
  return (
    <section id="strategy" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Strategy & Policy
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our marketing philosophy is simple:{" "}
              <strong className="text-foreground">
                "Quality and quality again"
              </strong>{" "}
              — affordable prices for everyone without compromising on excellence.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {strategies.map((strategy, index) => (
                <div
                  key={strategy.title}
                  className="flex items-start gap-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <strategy.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {strategy.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {strategy.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center card-hover">
              <div className="text-5xl font-display font-bold text-primary mb-2">
                20+
              </div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center card-hover">
              <div className="text-5xl font-display font-bold text-primary mb-2">
                50+
              </div>
              <div className="text-muted-foreground">Products</div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center card-hover">
              <div className="text-5xl font-display font-bold text-primary mb-2">
                100+
              </div>
              <div className="text-muted-foreground">Partners</div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center card-hover">
              <div className="text-5xl font-display font-bold text-primary mb-2">
                4
              </div>
              <div className="text-muted-foreground">ISO Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
