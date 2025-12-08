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
    name: "Classic Zhaima",
    description: "Perfect thin dough for traditional Beshbarmak",
    image: productZhaima,
    badges: ["Top Seller", "400g"],
    featured: true,
  },
  {
    id: 2,
    name: "Egg Noodles",
    description: "Rich egg noodles for soups and stir-fry dishes",
    image: productNoodles,
    badges: ["Premium Grade", "300g"],
    featured: false,
  },
  {
    id: 3,
    name: "Lagman Noodles",
    description: "Thick chewy noodles for authentic Lagman soup",
    image: productLagman,
    badges: ["Traditional", "500g"],
    featured: true,
  },
  {
    id: 4,
    name: "Kespe",
    description: "Short cut noodles perfect for hearty soups",
    image: productKespe,
    badges: ["Best for Soup", "350g"],
    featured: false,
  },
  {
    id: 5,
    name: "Premium Spaghetti",
    description: "Italian-style spaghetti made with Kazakh wheat",
    image: productSpaghetti,
    badges: ["New", "450g"],
    featured: false,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Our Production
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of premium pasta products, crafted with care
            using the finest Kazakh wheat and traditional recipes.
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
                      Featured
                    </Badge>
                  </div>
                )}
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
                  View Details
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="btn-primary text-lg px-10 py-6">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
