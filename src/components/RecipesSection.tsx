import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Clock, ChefHat, Users } from "lucide-react";
import recipeBeshbarmak from "@/assets/recipe-beshbarmak.jpg";
import recipeLasagna from "@/assets/recipe-lasagna.jpg";
import recipeLagman from "@/assets/recipe-lagman.jpg";

type Recipe = {
  id: number;
  name: string;
  image: string;
  cookTime: string;
  difficulty: string;
  servings: string;
  steps: string[];
  ingredients: string[];
  fullSteps: string[];
};

const recipes: Recipe[] = [
  {
    id: 1,
    name: "Бешбармак",
    image: recipeBeshbarmak,
    cookTime: "45 мин",
    difficulty: "Средний",
    servings: "4–6 порций",
    steps: [
      "Отварить баранину и говядину до готовности",
      "Нарезать мясо тонкими ломтиками",
      "Добавить жайму Arzu, варить 5–7 минут",
      "Подавать с бульоном и луком",
    ],
    ingredients: [
      "Баранина — 600 г",
      "Говядина — 400 г",
      "Жайма Arzu — 500 г",
      "Лук репчатый — 3 шт.",
      "Лавровый лист — 2 шт.",
      "Перец чёрный горошком — 5–6 шт.",
      "Соль — по вкусу",
      "Зелень (укроп, петрушка) — для подачи",
    ],
    fullSteps: [
      "Мясо промыть, залить холодной водой, довести до кипения и снять пену.",
      "Варить мясо на медленном огне 1.5–2 часа, добавив лавровый лист, перец и соль за 30 минут до готовности.",
      "Готовое мясо вынуть, остудить и нарезать тонкими ломтиками поперёк волокон.",
      "Лук нарезать кольцами, ошпарить горячим бульоном, чтобы он стал мягким и ароматным.",
      "Бульон процедить, довести до кипения и отварить в нём жайму Arzu 5–7 минут до готовности.",
      "На большое блюдо выложить жайму, сверху — мясо и лук с бульоном.",
      "Подавать горячим, бульон — отдельно в пиалах, посыпав свежей зеленью.",
    ],
  },
  {
    id: 2,
    name: "Лазанья с жаймой",
    image: recipeLasagna,
    cookTime: "35 мин",
    difficulty: "Лёгкий",
    servings: "4 порции",
    steps: [
      "Приготовить соус болоньезе",
      "Чередовать слои: соус, жайма, моцарелла",
      "Запекать при 180°C в течение 25 минут",
      "Дать остыть перед подачей",
    ],
    ingredients: [
      "Жайма Arzu — 300 г",
      "Фарш говяжий — 500 г",
      "Томатный соус — 400 г",
      "Лук репчатый — 1 шт.",
      "Чеснок — 2 зубчика",
      "Сыр моцарелла — 250 г",
      "Сыр пармезан — 100 г",
      "Соус бешамель — 300 мл",
      "Оливковое масло, соль, перец, базилик",
    ],
    fullSteps: [
      "Лук и чеснок мелко нарезать, обжарить на оливковом масле до золотистости.",
      "Добавить фарш, обжарить до изменения цвета, посолить и поперчить.",
      "Влить томатный соус, добавить базилик и тушить 15 минут на слабом огне.",
      "Жайму Arzu отварить в подсоленной воде 3–4 минуты до состояния al dente.",
      "В форму для запекания выложить слой бешамеля, затем жайму, соус болоньезе и моцареллу.",
      "Повторить слои 2–3 раза, верхний слой посыпать пармезаном.",
      "Запекать в разогретой до 180°C духовке 25 минут до золотистой корочки.",
      "Дать постоять 10 минут перед подачей, чтобы лазанья сохранила форму при нарезке.",
    ],
  },
  {
    id: 3,
    name: "Суп Лагман",
    image: recipeLagman,
    cookTime: "40 мин",
    difficulty: "Средний",
    servings: "4 порции",
    steps: [
      "Обжарить овощи с мясом",
      "Добавить бульон и тушить",
      "Отварить лапшу отдельно",
      "Соединить и подавать горячим",
    ],
    ingredients: [
      "Лапша Arzu — 400 г",
      "Говядина или баранина — 500 г",
      "Болгарский перец — 2 шт.",
      "Морковь — 1 шт.",
      "Лук репчатый — 1 шт.",
      "Помидоры — 3 шт.",
      "Чеснок — 3 зубчика",
      "Зира, кориандр, паприка — по вкусу",
      "Зелень (кинза, укроп) — для подачи",
    ],
    fullSteps: [
      "Мясо нарезать кубиками и обжарить на сильном огне до золотистой корочки.",
      "Добавить нарезанный лук и морковь, обжаривать 5 минут.",
      "Положить болгарский перец и помидоры без кожицы, тушить ещё 5–7 минут.",
      "Добавить специи (зиру, кориандр, паприку), чеснок, влить горячую воду или бульон.",
      "Тушить на медленном огне 20–25 минут до мягкости мяса и насыщенного вкуса.",
      "Лапшу Arzu отварить отдельно в подсоленной воде согласно инструкции на упаковке.",
      "В глубокую тарелку выложить лапшу, залить мясной подливой с овощами.",
      "Посыпать рубленой зеленью и подавать горячим.",
    ],
  },
];

const RecipesSection = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

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
                  onClick={() => setSelectedRecipe(recipe)}
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Полный рецепт
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog
        open={selectedRecipe !== null}
        onOpenChange={(open) => !open && setSelectedRecipe(null)}
      >
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedRecipe && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-display font-bold text-foreground">
                  {selectedRecipe.name}
                </DialogTitle>
                <DialogDescription className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-2">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-primary" />
                    {selectedRecipe.cookTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ChefHat className="w-4 h-4 text-primary" />
                    {selectedRecipe.difficulty}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-primary" />
                    {selectedRecipe.servings}
                  </span>
                </DialogDescription>
              </DialogHeader>

              <div className="rounded-xl overflow-hidden mt-2">
                <img
                  src={selectedRecipe.image}
                  alt={selectedRecipe.name}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-4">
                <div>
                  <h4 className="text-xl font-display font-semibold text-foreground mb-4">
                    Ингредиенты
                  </h4>
                  <ul className="space-y-2">
                    {selectedRecipe.ingredients.map((ingredient, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-display font-semibold text-foreground mb-4">
                    Приготовление
                  </h4>
                  <ol className="space-y-3">
                    {selectedRecipe.fullSteps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default RecipesSection;
