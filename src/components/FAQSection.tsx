import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Из какой муки производится продукция Arzu?",
    a: "Мы используем только отборную казахстанскую пшеницу твёрдых сортов с собственной мельницы. Это обеспечивает богатый вкус, идеальную текстуру и сохранение формы при варке.",
  },
  {
    q: "Какой срок хранения у изделий Arzu?",
    a: "Срок хранения макаронных изделий составляет 24 месяца с даты изготовления при условии хранения в сухом, прохладном месте при температуре не выше +25°C и относительной влажности не более 70%.",
  },
  {
    q: "Есть ли у вас сертификат Халяль?",
    a: "Да, вся наша продукция сертифицирована по стандарту MS 1500-2004 (Халяль), а также имеет международные сертификаты ISO 9001-2009, ISO 22000-2005 и ISO 18000.",
  },
  {
    q: "Как оформить оптовый заказ?",
    a: "Для оптовых заказов свяжитесь с нами по телефону +7 (7262) 46 63 63 или напишите на info@arzu.kz. Наш менеджер подберёт оптимальные условия и рассчитает стоимость доставки.",
  },
  {
    q: "В какие страны вы экспортируете продукцию?",
    a: "Продукция Arzu представлена в Казахстане, Кыргызстане, Узбекистане, Таджикистане, России и Монголии. Мы постоянно расширяем географию поставок.",
  },
  {
    q: "Можно ли заказать продукцию с доставкой на дом?",
    a: "Розничная продукция Arzu доступна в крупных торговых сетях Казахстана. Карту магазинов вы можете найти в разделе «Где купить» на нашем сайте.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-wide max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Ответы на вопросы
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-muted-foreground">
            Всё, что нужно знать о продукции Arzu
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-soft p-6 md:p-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border last:border-b-0"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  <span className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pl-8 pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
