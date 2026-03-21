import { Button } from "@/components/ui/button";
import { Clock, ChefHat } from "lucide-react";
import recipeBeshbarmak from "@/assets/recipe-beshbarmak.jpg";
import recipeLasagna from "@/assets/recipe-lasagna.jpg";
import recipeLagman from "@/assets/recipe-lagman.jpg";

const recipes = [
  {
    id: 1,
    name: "Бешбармак",
    image: recipeBeshbarmak,
    cookTime: "45 мин",
    difficulty: "Средний",
    steps: [
      "Отварить баранину и говядину до готовности",
      "Нарезать мясо тонкими ломтиками",
      "Добавить жайму Arzu, варить 5–7 минут",
      "Подавать с бульоном и луком",
    ],
  },
  {
    id: 2,
    name: "Лазанья с жаймой",
    image: recipeLasagna,
    cookTime: "35 мин",
    difficulty: "Лёгкий",
    steps: [
      "Приготовить соус болоньезе",
      "Чередовать слои: соус, жайма, моцарелла",
      "Запекать при 180°C в течение 25 минут",
      "Дать остыть перед подачей",
    ],
  },
  {
    id: 3,
    name: "Суп Лагман",
    image: recipeLagman,
    cookTime: "40 мин",
    difficulty: "Средний",
    steps: [
      "Обжарить овощи с мясом",
      "Добавить бульон и тушить",
      "Отварить лапшу отдельно",
      "Соединить и подавать горячим",
    ],
  },
];

const RecipesSection = () => {
  return (
    <section id="recipes" className="section-padding bg-muted">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Кулинарные идеи
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Традиционные рецепты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя вкусные способы приготовления нашей продукции
            с традиционными казахскими и международными рецептами.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <article
              key={recipe.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-display font-bold text-card mb-2">
                    {recipe.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-card/80">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {recipe.cookTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <ChefHat className="w-4 h-4" />
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <ol className="space-y-2 mb-6">
                  {recipe.steps.map((step, stepIndex) => (
                    <li
                      key={stepIndex}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center shrink-0">
                        {stepIndex + 1}
                      </span>
                      <span className="text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Полный рецепт
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
