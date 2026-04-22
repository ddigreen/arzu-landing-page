import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Айгуль Нурланова",
    role: "Шеф-повар, ресторан «Дастархан»",
    text: "Использую жайму Arzu уже более 5 лет. Идеально держит форму, не разваривается, а вкус — как у бабушки. Это лучшее, что есть на казахстанском рынке.",
    rating: 5,
  },
  {
    name: "Бауыржан Сериков",
    role: "Директор сети супермаркетов",
    text: "Продукция Arzu — стабильный лидер продаж в нашей сети. Качество всегда на высоте, поставки точно в срок. Покупатели возвращаются снова и снова.",
    rating: 5,
  },
  {
    name: "Мадина Касымова",
    role: "Покупатель",
    text: "Готовлю бешбармак каждые выходные только из жаймы Arzu. Тесто нежное, не липнет, варится быстро. Вся семья в восторге!",
    rating: 5,
  },
  {
    name: "Ерлан Жумабеков",
    role: "Владелец сети кафе «Той»",
    text: "Закупаем Arzu оптом для всех наших кафе. Соотношение цена-качество отличное, а сервис менеджеров — на высшем уровне.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActiveIndex(
      (i) => (i - 1 + testimonials.length) % testimonials.length
    );

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="section-padding bg-muted">
      <div className="container-wide max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Нам доверяют
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Слова благодарности от поваров, партнёров и покупателей со всего Казахстана
          </p>
        </div>

        <div className="relative">
          <div className="bg-card rounded-3xl shadow-soft p-8 md:p-14 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-24 h-24 text-primary/10" />

            <div className="relative">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 font-display italic min-h-[120px]">
                «{current.text}»
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {current.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">{current.role}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prev}
                    aria-label="Предыдущий отзыв"
                    className="rounded-full"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={next}
                    aria-label="Следующий отзыв"
                    className="rounded-full"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Отзыв ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
