import { Lightbulb, TrendingUp, Monitor, Globe } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

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

const stats = [
  { value: 20, suffix: "+", label: "Лет опыта" },
  { value: 50, suffix: "+", label: "Продуктов" },
  { value: 100, suffix: "+", label: "Партнёров" },
  { value: 4, suffix: "", label: "Сертификата ISO" },
];

const StrategySection = () => {
  return (
    <section id="strategy" className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4 bg-primary/10 px-4 py-1 rounded-full">
              Наш подход
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-card mb-6">
              Стратегия и политика
            </h2>
            <p className="text-lg text-card/80 mb-8">
              Наша маркетинговая философия проста:{" "}
              <strong className="text-card">
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
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <strategy.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card mb-1">
                      {strategy.title}
                    </h3>
                    <p className="text-sm text-card/70">
                      {strategy.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 shadow-soft text-center card-hover border border-card/20"
              >
                <div className="text-5xl font-display font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-card/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
