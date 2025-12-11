import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Wheat, Cog, FlaskConical, CheckCircle2, Award } from "lucide-react";

const timelineSteps = [
  {
    icon: Wheat,
    title: "Golden Wheat",
    titleRu: "Золотая Пшеница",
    description: "Only hard wheat varieties from Northern Kazakhstan",
    descriptionRu: "Только твёрдые сорта пшеницы из Северного Казахстана",
    color: "primary",
  },
  {
    icon: Cog,
    title: "Swiss & Italian Technology",
    titleRu: "Швейцарские и Итальянские Технологии",
    description: "Bühler & Pavan automated production lines",
    descriptionRu: "Автоматизированные линии Bühler & Pavan",
    color: "wheat-dark",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Control",
    titleRu: "Лабораторный Контроль",
    description: "Triple quality check before packaging",
    descriptionRu: "Тройной контроль качества перед упаковкой",
    color: "secondary",
  },
  {
    icon: Award,
    title: "Premium Quality",
    titleRu: "Премиум Качество",
    description: "Certified excellence delivered to your table",
    descriptionRu: "Сертифицированное качество на вашем столе",
    color: "primary",
  },
];

const ProductionTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Farm to Table
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Our Quality Standard
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From the golden fields to your kitchen — every step is crafted with care
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative max-w-3xl mx-auto">
          {/* Animated Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-wheat to-primary origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <motion.div
            className="relative space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.title}
                  className={`relative flex items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  variants={itemVariants}
                >
                  {/* Icon Circle */}
                  <motion.div
                    className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className={`w-16 h-16 rounded-full bg-${step.color} flex items-center justify-center shadow-glow`}>
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    {/* Pulse Effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-${step.color}/30`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                  </motion.div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-4rem)] ${isEven ? "md:pr-8 pl-24 md:pl-0" : "md:pl-8 pl-24"}`}>
                    <motion.div
                      className="bg-card p-6 rounded-2xl shadow-medium hover:shadow-elevated transition-shadow duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                          {index + 1}
                        </span>
                        <h3 className="font-display text-xl text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-2">{step.description}</p>
                      <p className="text-sm text-muted-foreground/70 italic">{step.descriptionRu}</p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* End Check */}
          <motion.div
            className="absolute left-8 md:left-1/2 -translate-x-1/2 -bottom-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductionTimeline;
