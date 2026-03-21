import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Users, Beef, Package, Salad, ShoppingCart, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const EventCalculator = () => {
  const [guests, setGuests] = useState(10);
  const [bigAppetite, setBigAppetite] = useState(false);
  const { toast } = useToast();

  const calculations = useMemo(() => {
    const appetiteMultiplier = bigAppetite ? 1.5 : 1;
    const pastaPerPerson = 150 * appetiteMultiplier;
    const meatPerPerson = 300 * appetiteMultiplier;
    const onionsPerPerson = 50 * appetiteMultiplier;
    const potatoesPerPerson = 100 * appetiteMultiplier;
    const totalPasta = (guests * pastaPerPerson) / 1000;
    const totalMeat = (guests * meatPerPerson) / 1000;
    const totalOnions = (guests * onionsPerPerson) / 1000;
    const totalPotatoes = (guests * potatoesPerPerson) / 1000;
    const packsNeeded = Math.ceil((totalPasta * 1000) / 900);
    return {
      packs: packsNeeded,
      meat: totalMeat.toFixed(1),
      onions: totalOnions.toFixed(1),
      potatoes: totalPotatoes.toFixed(1),
    };
  }, [guests, bigAppetite]);

  const handleAddToList = () => {
    toast({
      title: "Добавлено в список покупок! 🛒",
      description: `${calculations.packs} уп. Arzu Classic, ${calculations.meat} кг мяса, ${calculations.onions} кг лука, ${calculations.potatoes} кг картофеля`,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section className="section-padding bg-gradient-to-b from-accent/30 to-background">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="text-center mb-12">
            <motion.span
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
              variants={itemVariants}
            >
              Планируйте праздник
            </motion.span>
            <motion.h2
              className="font-display text-4xl md:text-5xl text-foreground mb-4"
              variants={itemVariants}
            >
              Калькулятор Бешбармака
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Рассчитайте точное количество продуктов для идеального тоя
            </motion.p>
          </div>

          <motion.div
            className="max-w-4xl mx-auto bg-card rounded-2xl shadow-elevated p-8 md:p-12"
            variants={itemVariants}
          >
            <div className="space-y-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-lg font-medium text-foreground">
                    <Users className="w-5 h-5 text-primary" />
                    Количество гостей
                  </label>
                  <motion.span
                    key={guests}
                    initial={{ scale: 1.2, color: "hsl(var(--primary))" }}
                    animate={{ scale: 1, color: "hsl(var(--foreground))" }}
                    className="text-3xl font-bold"
                  >
                    {guests}
                  </motion.span>
                </div>
                <Slider
                  value={[guests]}
                  onValueChange={(value) => setGuests(value[0])}
                  min={5}
                  max={100}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>5 гостей</span>
                  <span>100 гостей</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Flame className={`w-5 h-5 transition-colors ${bigAppetite ? "text-secondary" : "text-muted-foreground"}`} />
                  <div>
                    <p className="font-medium text-foreground">Уровень аппетита</p>
                    <p className="text-sm text-muted-foreground">
                      {bigAppetite ? "Большой аппетит (+50%)" : "Обычные порции"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setBigAppetite(!bigAppetite)}
                  className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                    bigAppetite ? "bg-secondary" : "bg-border"
                  }`}
                >
                  <motion.div
                    className="absolute top-1 w-6 h-6 bg-card rounded-full shadow-md"
                    animate={{ left: bigAppetite ? "calc(100% - 28px)" : "4px" }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Package, value: calculations.packs, label: "Уп. Arzu Classic", sublabel: "(900 г)", color: "text-primary", bgColor: "bg-primary/10" },
                { icon: Beef, value: `${calculations.meat} кг`, label: "Мясо", sublabel: "(баранина + говядина)", color: "text-secondary", bgColor: "bg-secondary/10" },
                { icon: Salad, value: `${calculations.onions} кг`, label: "Лук", sublabel: "", color: "text-wheat-dark", bgColor: "bg-wheat/10" },
                { icon: Salad, value: `${calculations.potatoes} кг`, label: "Картофель", sublabel: "", color: "text-wheat-dark", bgColor: "bg-wheat/10" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="bg-muted/30 rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${item.bgColor} rounded-full mb-3`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <motion.p
                    key={item.value}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-2xl md:text-3xl font-bold text-foreground mb-1"
                  >
                    {item.value}
                  </motion.p>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  {item.sublabel && (
                    <p className="text-xs text-muted-foreground">{item.sublabel}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div className="text-center" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button onClick={handleAddToList} className="btn-primary text-lg px-8 py-6 gap-3">
                <ShoppingCart className="w-5 h-5" />
                Добавить в список покупок
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventCalculator;
