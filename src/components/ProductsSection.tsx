import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import productZhaima from "@/assets/product-zhaima.jpg";
import productNoodles from "@/assets/product-noodles.jpg";
import productLagman from "@/assets/product-lagman.jpg";
import productKespe from "@/assets/product-kespe.jpg";
import productSpaghetti from "@/assets/product-spaghetti.jpg";

const products = [
  {
    id: 1,
    name: "Arzu Жайма",
    weight: "300 г",
    description: "Тонкое тесто для настоящего Бешбармака. Готовится за 7–9 минут",
    image: productZhaima,
    badges: ["Хит продаж"],
    featured: true,
  },
  {
    id: 2,
    name: "Arzu Classic",
    weight: "900 г",
    description: "Классическая жайма в семейной упаковке",
    image: productNoodles,
    badges: ["Семейная"],
    featured: false,
  },
  {
    id: 3,
    name: "Arzu Premium",
    weight: "980 г",
    description: "Премиальное качество из отборных сортов пшеницы",
    image: productLagman,
    badges: ["Премиум"],
    featured: true,
  },
  {
    id: 4,
    name: "Arzu Опт",
    weight: "3 кг",
    description: "Оптовая упаковка для предприятий общественного питания",
    image: productKespe,
    badges: ["Опт"],
    featured: false,
  },
  {
    id: 5,
    name: "Астау",
    weight: "980 г",
    description: "Традиционный рецепт для настоящих ценителей",
    image: productSpaghetti,
    badges: ["Традиционная"],
    featured: false,
  },
  {
    id: 6,
    name: "Астау Семейная",
    weight: "1.8 кг",
    description: "Большая упаковка на 24 порции для всей семьи",
    image: productZhaima,
    badges: ["24 порции"],
    featured: true,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Наша продукция
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Каталог продукции
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя линейку макаронных изделий премиум-класса,
            изготовленных из лучших сортов казахстанской пшеницы по традиционным рецептам.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Badges */}
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
                {/* Weight Badge */}
                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-card/90 text-foreground font-bold px-4 py-2 text-lg backdrop-blur-sm">
                    {product.weight}
                  </Badge>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Узнать больше
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
