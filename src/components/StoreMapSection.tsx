import { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cities = [
  {
    id: 1,
    name: "Алматы",
    stores: 12,
    phone: "+7 (727) 350-50-50",
    hours: "09:00 – 20:00",
    position: { top: "62%", left: "72%" },
    featured: true,
  },
  {
    id: 2,
    name: "Астана",
    stores: 8,
    phone: "+7 (717) 250-30-30",
    hours: "09:00 – 20:00",
    position: { top: "35%", left: "58%" },
    featured: true,
  },
  {
    id: 3,
    name: "Шымкент",
    stores: 6,
    phone: "+7 (725) 100-20-20",
    hours: "09:00 – 19:00",
    position: { top: "75%", left: "52%" },
    featured: false,
  },
  {
    id: 4,
    name: "Караганда",
    stores: 5,
    phone: "+7 (721) 300-40-40",
    hours: "09:00 – 19:00",
    position: { top: "42%", left: "60%" },
    featured: false,
  },
  {
    id: 5,
    name: "Актобе",
    stores: 4,
    phone: "+7 (713) 200-10-10",
    hours: "09:00 – 19:00",
    position: { top: "45%", left: "32%" },
    featured: false,
  },
  {
    id: 6,
    name: "Павлодар",
    stores: 3,
    phone: "+7 (718) 400-50-50",
    hours: "09:00 – 18:00",
    position: { top: "28%", left: "65%" },
    featured: false,
  },
  {
    id: 7,
    name: "Атырау",
    stores: 3,
    phone: "+7 (712) 300-60-60",
    hours: "09:00 – 18:00",
    position: { top: "55%", left: "18%" },
    featured: false,
  },
  {
    id: 8,
    name: "Тараз",
    stores: 4,
    phone: "+7 (726) 200-70-70",
    hours: "09:00 – 19:00",
    position: { top: "70%", left: "58%" },
    featured: false,
  },
];

const StoreMapSection = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="stores" className="section-padding bg-background">
      <div className="container-wide">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Где купить
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Точки продаж
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Продукция Arzu и Астау доступна в крупнейших торговых сетях по всему Казахстану
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 bg-card rounded-2xl shadow-soft p-6 relative">
            <div className="relative aspect-[16/10] bg-accent/30 rounded-xl overflow-hidden">
              {/* Kazakhstan outline SVG */}
              <svg
                viewBox="0 0 800 450"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80 200 Q100 120 180 100 Q260 80 340 90 Q380 70 420 60 Q500 50 560 80 Q620 60 680 90 Q740 110 750 160 Q760 200 740 240 Q720 280 680 300 Q640 340 580 360 Q520 380 460 370 Q400 380 340 360 Q280 370 220 340 Q160 320 120 280 Q90 250 80 200Z"
                  fill="hsl(var(--accent))"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  opacity="0.6"
                />
                {/* Grid lines */}
                <line x1="0" y1="112" x2="800" y2="112" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4" />
                <line x1="0" y1="225" x2="800" y2="225" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4" />
                <line x1="0" y1="337" x2="800" y2="337" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4" />
                <line x1="200" y1="0" x2="200" y2="450" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4" />
                <line x1="400" y1="0" x2="400" y2="450" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4" />
                <line x1="600" y1="0" x2="600" y2="450" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4" />
              </svg>

              {/* City pins */}
              {cities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setSelectedCity(city)}
                  className={`absolute transform -translate-x-1/2 -translate-y-full group transition-all duration-300 ${
                    selectedCity.id === city.id ? "scale-125 z-10" : "hover:scale-110"
                  }`}
                  style={{ top: city.position.top, left: city.position.left }}
                  aria-label={city.name}
                >
                  <MapPin
                    className={`h-7 w-7 drop-shadow-md transition-colors ${
                      selectedCity.id === city.id
                        ? "text-secondary fill-secondary/20"
                        : "text-primary fill-primary/20"
                    }`}
                  />
                  <span
                    className={`absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold px-2 py-0.5 rounded-full transition-all ${
                      selectedCity.id === city.id
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-card text-foreground shadow-sm opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {city.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* City info */}
          <div className="flex flex-col gap-4">
            {/* Selected city detail */}
            <div className="bg-card rounded-2xl shadow-soft p-6 border-l-4 border-primary">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                {selectedCity.name}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{selectedCity.stores} торговых точек</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{selectedCity.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{selectedCity.hours}</span>
                </div>
              </div>
            </div>

            {/* City list */}
            <div className="bg-card rounded-2xl shadow-soft p-6 flex-1">
              <h4 className="font-semibold text-foreground mb-3">Все города</h4>
              <div className="space-y-2">
                {cities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCity(city)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCity.id === city.id
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    <span>{city.name}</span>
                    <span className="text-xs">{city.stores} точек</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreMapSection;
