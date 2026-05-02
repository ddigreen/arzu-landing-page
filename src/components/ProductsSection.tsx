import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import productZhaima from "@/assets/product-zhaima.jpg";
import productClassic from "@/assets/product-noodles.jpg";
import productPremium from "@/assets/product-lagman.jpg";
import productZhaima30 from "@/assets/product-kespe.jpg";
import productAstau98 from "@/assets/product-spaghetti.jpg";
import productAstau18 from "@/assets/product-astau18.jpg";
import productFlourPremium from "@/assets/product-flour-premium.jpg";
import productFlourFirst from "@/assets/product-flour-first.jpg";
import productLagmanTomato from "@/assets/product-lagman-tomato.jpg";

import productTaigliaTomato from "@/assets/product-tagliatelle-tomato.jpg";
import productManpar from "@/assets/product-manpar.jpg";
import productTagliatelle from "@/assets/product-tagliatelle.jpg";

const products = [
  {
    id: 1,
    name: "Arzu Жайма",
    weight: "300 г",
    description: "Традиционная жайма для настоящего бешбармака. Тонкое тесто из отборной пшеницы, готовится за 7–9 минут",
    fullDescription: "Arzu Жайма 300г — это классическая жайма, изготовленная из муки высшего сорта казахстанской пшеницы. Идеально тонкое тесто раскатано по традиционной технологии, сохраняя вкус домашней жаймы. Готовится всего за 7–9 минут. Подходит для бешбармака, супов и других национальных блюд. Удобная упаковка на 2–3 порции.",
    image: productZhaima,
    badges: ["Хит продаж"],
    featured: true,
    category: "Жайма",
    specs: { servings: "2–3 порции", cookTime: "7–9 минут", storage: "12 месяцев", composition: "Мука в/с, вода, соль" },
  },
  {
    id: 2,
    name: "Arzu Classic",
    weight: "900 г",
    description: "Классическая жайма в удобной семейной упаковке с ручкой. Идеальна для большого семейного бешбармака",
    fullDescription: "Arzu Classic 900г — семейная упаковка классической жаймы с удобной ручкой для переноски. Изготовлена из отборной казахстанской пшеницы по традиционным рецептам. Идеальный выбор для семейного бешбармака или праздничного дастархана. Увеличенный объём позволяет накормить всю семью.",
    image: productClassic,
    badges: ["Семейная"],
    featured: false,
    category: "Жайма",
    specs: { servings: "6–8 порций", cookTime: "7–9 минут", storage: "12 месяцев", composition: "Мука в/с, вода, соль" },
  },
  {
    id: 3,
    name: "Arzu Premium",
    weight: "980 г",
    description: "Премиальное качество из отборных сортов казахстанской пшеницы. Увеличенная упаковка для ценителей",
    fullDescription: "Arzu Premium 980г — продукт премиального качества из лучших сортов казахстанской пшеницы. Особая технология производства обеспечивает идеальную текстуру и вкус. Увеличенная упаковка подходит для ценителей настоящего качества и больших семейных застолий.",
    image: productPremium,
    badges: ["Премиум"],
    featured: true,
    category: "Жайма",
    specs: { servings: "6–10 порций", cookTime: "7–9 минут", storage: "12 месяцев", composition: "Мука в/с, вода, яйца, соль" },
  },
  {
    id: 4,
    name: "Arzu Жайма Опт",
    weight: "3 кг",
    description: "Оптовая упаковка жаймы для предприятий общественного питания и крупных мероприятий",
    fullDescription: "Arzu Жайма Опт 3кг — профессиональная упаковка для предприятий общественного питания, кафе, ресторанов и организации крупных мероприятий. Неизменно высокое качество продукции Arzu в экономичном формате. Идеальна для тоев, свадеб и корпоративных мероприятий.",
    image: productZhaima30,
    badges: ["Опт"],
    featured: false,
    category: "Жайма",
    specs: { servings: "20–30 порций", cookTime: "7–9 минут", storage: "12 месяцев", composition: "Мука в/с, вода, соль" },
  },
  {
    id: 5,
    name: "Астау",
    weight: "980 г",
    description: "Макаронные изделия «Астау» — жайма по традиционному рецепту. 6–12 порций в упаковке",
    fullDescription: "Астау 980г — макаронные изделия по традиционному казахскому рецепту. Бренд «Астау» воплощает дух гостеприимства и щедрого дастархана. Удобная упаковка рассчитана на 6–12 порций, что делает её идеальной для повседневного и праздничного использования.",
    image: productAstau98,
    badges: ["Традиционная"],
    featured: false,
    category: "Жайма",
    specs: { servings: "6–12 порций", cookTime: "8–10 минут", storage: "12 месяцев", composition: "Мука в/с, вода, соль" },
  },
  {
    id: 6,
    name: "Астау Семейная",
    weight: "1.8 кг",
    description: "Большая упаковка «Астау» на 24 порции для всей семьи и праздничного дастархана",
    fullDescription: "Астау Семейная 1.8кг — большая семейная упаковка на 24 порции. Идеальный выбор для большой семьи и праздничного дастархана. Традиционный рецепт и высокое качество бренда «Астау» в экономичном формате. Подходит для приготовления бешбармака, лагмана и других блюд.",
    image: productAstau18,
    badges: ["24 порции"],
    featured: true,
    category: "Жайма",
    specs: { servings: "24 порции", cookTime: "8–10 минут", storage: "12 месяцев", composition: "Мука в/с, вода, соль" },
  },
  {
    id: 7,
    name: "Арзу Лапша для лагмана с томатом",
    weight: "300 г",
    description: "Традиционная пшеничная лапша с томатом для классического лагмана. Упругая текстура, насыщенный вкус",
    fullDescription: "Лапша для лагмана 300 г — традиционная пшеничная лапша, идеально подходящая для приготовления классического лагмана. Обладает упругой текстурой, хорошо сохраняет форму и отлично впитывает насыщенный соус с мясом и овощами. Подходит для блюд восточной кухни, быстро варится и не разваривается.",
    image: productLagmanTomato,
    badges: ["С томатом"],
    featured: false,
    category: "Лапша",
    specs: { servings: "2–3 порции", cookTime: "5–7 минут", storage: "12 месяцев", composition: "Мука в/с, томат, вода, соль" },
  },
  {
    id: 9,
    name: "Арзу Тальятелле с томатом",
    weight: "300 г",
    description: "Изысканная паста в виде широких лент с натуральным томатным компонентом",
    fullDescription: "Тальятелле с добавлением томатов 300 г — изысканная паста в виде широких лент с натуральным томатным компонентом, придающим аппетитный оттенок и лёгкую кислинку во вкусе. Изготовлена из муки твёрдых сортов пшеницы, сохраняет плотную текстуру и не разваривается при варке. Идеально подходит для блюд с мясными, овощными и сливочными соусами.",
    image: productTaigliaTomato,
    badges: ["С томатом"],
    featured: false,
    category: "Лапша",
    specs: { servings: "2–3 порции", cookTime: "5–7 минут", storage: "12 месяцев", composition: "Мука твёрдых сортов, томат, вода, соль" },
  },
  {
    id: 10,
    name: "Арзу Манпар",
    weight: "300 г",
    description: "Традиционные кусочки теста для приготовления ароматного манпара из качественной пшеничной муки",
    fullDescription: "Манпар 300 г — традиционные кусочки теста для приготовления ароматного манпара. Изготовлены из качественной пшеничной муки. Сохраняют форму при варке, обладают упругой текстурой и отлично сочетаются с мясом, овощами и насыщенными бульонами. Идеально подходят для приготовления сытных блюд восточной кухни в домашних условиях.",
    image: productManpar,
    badges: ["Классика"],
    featured: false,
    category: "Лапша",
    specs: { servings: "2–3 порции", cookTime: "5–7 минут", storage: "12 месяцев", composition: "Мука в/с, вода, соль" },
  },
  {
    id: 11,
    name: "Арзу Тальятелле",
    weight: "300 г",
    description: "Классическая итальянская паста из твёрдых сортов пшеницы. Плотная текстура, идеально удерживает соусы",
    fullDescription: "Тальятелле 300 г — классическая итальянская паста в виде длинных плоских лент, изготовленная из твёрдых сортов пшеницы. Обладает плотной текстурой и идеально удерживает соусы — от нежных сливочных до насыщенных мясных. Отлично подходит для приготовления традиционных блюд итальянской кухни и домашней пасты ресторанного уровня.",
    image: productTagliatelle,
    badges: ["Италия"],
    featured: false,
    category: "Лапша",
    specs: { servings: "2–3 порции", cookTime: "5–7 минут", storage: "12 месяцев", composition: "Мука твёрдых сортов, вода, соль" },
  },
  {
    id: 12,
    name: "Арзу Мука Высший Сорт",
    weight: "50/25/10/5/2 кг",
    description: "Мука пшеничная высшего сорта — продукт тонкого помола из отборной пшеницы с высоким качеством клейковины",
    fullDescription: "Мука пшеничная высшего сорта — продукт тонкого помола из отборной пшеницы с высоким качеством клейковины. Обладает белоснежным цветом и однородной структурой, обеспечивает отличную пышность и мягкость выпечки. Идеально подходит для приготовления хлеба, сдобы, пирогов, тортов, печенья, блинов и других мучных изделий. Доступные фасовки: 50 кг, 25 кг, 10 кг, 5 кг, 2 кг.",
    image: productFlourPremium,
    badges: ["Высший сорт"],
    featured: true,
    category: "Мука",
    specs: { servings: "—", cookTime: "—", storage: "12 месяцев", composition: "Мука пшеничная хлебопекарная высшего сорта" },
  },
  {
    id: 13,
    name: "Арзу Мука Первый Сорт",
    weight: "50/25/10/5/2 кг",
    description: "Мука пшеничная первого сорта — продукт тонкого помола с высоким качеством клейковины для выпечки",
    fullDescription: "Мука пшеничная первого сорта — продукт тонкого помола из отборной пшеницы с высоким качеством клейковины. Обладает белоснежным цветом и однородной структурой, обеспечивает отличную пышность и мягкость выпечки. Идеально подходит для приготовления хлеба, сдобы, пирогов, тортов, печенья, блинов и других мучных изделий. Доступные фасовки: 50 кг, 25 кг, 10 кг, 5 кг, 2 кг.",
    image: productFlourFirst,
    badges: ["Первый сорт"],
    featured: false,
    category: "Мука",
    specs: { servings: "—", cookTime: "—", storage: "12 месяцев", composition: "Мука пшеничная хлебопекарная первого сорта" },
  },
];

const categories = ["Все", "Жайма", "Лапша", "Мука"];

const INITIAL_VISIBLE = 6;

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("Все");
  const [showAll, setShowAll] = useState(false);

  const filteredProducts = activeCategory === "Все"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, INITIAL_VISIBLE);
  const hasMore = filteredProducts.length > INITIAL_VISIBLE;

  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Наша продукция
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Каталог продукции
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Откройте для себя линейку макаронных изделий и муки премиум-класса,
            изготовленных из лучших сортов казахстанской пшеницы.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setShowAll(false); }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProducts.map((product, index) => (
            <article
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden bg-muted flex items-center justify-center p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {product.badges.map((badge) => (
                    <Badge
                      key={badge}
                      className="bg-primary text-primary-foreground font-medium px-3 py-1"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                {product.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-secondary text-secondary-foreground font-medium px-3 py-1">
                      Популярное
                    </Badge>
                  </div>
                )}
                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-card/90 text-foreground font-bold px-4 py-2 text-lg backdrop-blur-sm">
                    {product.weight}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  onClick={() => setSelectedProduct(product)}
                >
                  Узнать больше
                </Button>
              </div>
            </article>
          ))}
        </div>

        {hasMore && !showAll && (
          <div className="text-center mt-10">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all px-8"
              onClick={() => setShowAll(true)}
            >
              Показать ещё
            </Button>
          </div>
        )}
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-display flex items-center gap-3">
                  {selectedProduct.name}
                  <Badge className="bg-primary text-primary-foreground">{selectedProduct.weight}</Badge>
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Подробная информация о продукте {selectedProduct.name}
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-6">
                <div className="bg-muted rounded-xl p-6 flex items-center justify-center">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="max-h-64 object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Описание</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProduct.fullDescription}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/50 rounded-lg p-4">
                    <span className="text-sm text-muted-foreground">Порции</span>
                    <p className="font-semibold text-foreground">{selectedProduct.specs.servings}</p>
                  </div>
                  <div className="bg-accent/50 rounded-lg p-4">
                    <span className="text-sm text-muted-foreground">Время варки</span>
                    <p className="font-semibold text-foreground">{selectedProduct.specs.cookTime}</p>
                  </div>
                  <div className="bg-accent/50 rounded-lg p-4">
                    <span className="text-sm text-muted-foreground">Срок хранения</span>
                    <p className="font-semibold text-foreground">{selectedProduct.specs.storage}</p>
                  </div>
                  <div className="bg-accent/50 rounded-lg p-4">
                    <span className="text-sm text-muted-foreground">Состав</span>
                    <p className="font-semibold text-foreground">{selectedProduct.specs.composition}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductsSection;
