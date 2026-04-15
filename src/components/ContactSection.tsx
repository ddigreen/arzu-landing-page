import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4 bg-primary/10 px-4 py-1 rounded-full">
            Связаться с нами
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-card mb-6">
            Обратная связь
          </h2>
          <p className="text-lg text-card/80 max-w-2xl mx-auto">
            Есть вопросы о продукции или хотите стать партнёром? Заполните форму, и мы свяжемся с вами.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-soft space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    maxLength={100}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    maxLength={255}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  maxLength={20}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение *</Label>
                <Textarea
                  id="message"
                  placeholder="Опишите ваш вопрос или предложение..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  maxLength={1000}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Отправка..."
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Отправить заявку
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-card rounded-2xl p-8 shadow-soft space-y-6">
              <h3 className="text-xl font-display font-semibold text-foreground">Контакты</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Телефон</p>
                    <a href="tel:+77273505050" className="text-muted-foreground hover:text-primary transition-colors">
                      +7 (727) 350-50-50
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:info@arzu.kz" className="text-muted-foreground hover:text-primary transition-colors">
                      info@arzu.kz
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Адрес</p>
                    <p className="text-muted-foreground">
                      Казахстан, г. Алматы
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-xl font-display font-semibold mb-3">Для оптовых покупателей</h3>
              <p className="opacity-90 leading-relaxed">
                Специальные условия для дистрибьюторов, сетей и HoReCa. Свяжитесь с нами для получения прайс-листа.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
