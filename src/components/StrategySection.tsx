import { Lightbulb, TrendingUp, Monitor, Globe } from "lucide-react";

const strategies = [
  {
    icon: Lightbulb,
    title: "Инновационные технологии",
    description: "Передовые методы производства для высшего качества",
  },
  {
    icon: TrendingUp,
    title: "Расширение рынков",
    description: "Рост ассортимента и охвата рынков сбыта",
  },
  {
    icon: Monitor,
    title: "Электронный контроль качества",
    description: "Цифровой мониторинг для стабильного результата",
  },
  {
    icon: Globe,
    title: "Международное присутствие",
    description: "Участие в международных выставках",
  },
];

const StrategySection = () => {
  return (
    <section id="strategy" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Наш подход
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Стратегия и политика
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Наша маркетинговая философия проста:{" "}
              <strong className="text-foreground">
                «Качество и ещё раз качество»
              </strong>{" "}
              — доступные цены для каждого без компромиссов в качестве.
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

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center card-hover">
              <div className="text-5xl font-display font-bold text-primary mb-2">
                20+
              </div>
              <div className="text-muted-foreground">Лет опыта</div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center card-hover">
              <div className="text-5xl font-display font-bold text-primary mb-2">
                50+
              </div>
              <div className="text-muted-foreground">Продуктов</div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center card-hover">
              <div className="text-5xl font-display font-bold text-primary mb-2">
                100+
              </div>
              <div className="text-muted-foreground">Партнёров</div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center card-hover">
              <div className="text-5xl font-display font-bold text-primary mb-2">
                4
              </div>
              <div className="text-muted-foreground">Сертификата ISO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
