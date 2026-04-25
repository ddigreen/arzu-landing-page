import { useState } from "react";
import { MapPin, Store, Users, Globe2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Partner = { name: string; outlets: string };
type City = {
  id: number;
  name: string;
  country: "KZ" | "UZ" | "KG" | "RU" | "DE";
  region?: string;
  partners: Partner[];
  totalOutlets: number;
  position: { top: string; left: string };
};

// Source: Список контрагентов на 05.01.2026 г (ТОО «Та-Мак», фабрика Arzu)
const cities: City[] = [
  {
    id: 1,
    name: "Тараз",
    country: "KZ",
    partners: [
      { name: "ТОО «Артемида Тараз»", outlets: "2 500" },
      { name: "ТОО «Фиркан сети»", outlets: "24" },
      { name: "ТОО «В/К сети»", outlets: "49" },
      { name: "ИП Джанабекова", outlets: "1" },
      { name: "ТОО «АсЭко»", outlets: "1" },
      { name: "ИП Рыскалова (Каспий магазин)", outlets: "1" },
    ],
    totalOutlets: 2576,
    position: { top: "72%", left: "55%" },
  },
  {
    id: 2,
    name: "Шымкент",
    country: "KZ",
    partners: [{ name: "ТОО «Pilot»", outlets: "3 000" }],
    totalOutlets: 3000,
    position: { top: "76%", left: "52%" },
  },
  {
    id: 3,
    name: "Туркестан",
    country: "KZ",
    partners: [{ name: "ТОО «ИЖБ»", outlets: "1 000" }],
    totalOutlets: 1000,
    position: { top: "73%", left: "48%" },
  },
  {
    id: 4,
    name: "Кызылорда",
    country: "KZ",
    partners: [{ name: "ТОО «Дара Кызылорда»", outlets: "3 500" }],
    totalOutlets: 3500,
    position: { top: "62%", left: "38%" },
  },
  {
    id: 5,
    name: "Актобе",
    country: "KZ",
    partners: [{ name: "ТОО «Анвар»", outlets: "62 маркета" }],
    totalOutlets: 62,
    position: { top: "42%", left: "28%" },
  },
  {
    id: 6,
    name: "Алматы",
    country: "KZ",
    partners: [
      { name: "ТОО «Тоймарт»", outlets: "41" },
      { name: "ТОО «Small»", outlets: "156" },
      { name: "ESC Trade Company", outlets: "6 000" },
      { name: "ТОО «Arbuz Group» (маркетплейс)", outlets: "—" },
      { name: "ТОО «Улан трейд»", outlets: "—" },
    ],
    totalOutlets: 6197,
    position: { top: "70%", left: "75%" },
  },
  {
    id: 7,
    name: "Астана",
    country: "KZ",
    partners: [
      { name: "ТОО «Тауык хаус»", outlets: "4 000" },
      { name: "ТОО «Максат трейд»", outlets: "—" },
    ],
    totalOutlets: 4000,
    position: { top: "32%", left: "58%" },
  },
  {
    id: 8,
    name: "Актау",
    country: "KZ",
    partners: [{ name: "ТОО «Кобзал»", outlets: "1 500" }],
    totalOutlets: 1500,
    position: { top: "62%", left: "12%" },
  },
  {
    id: 9,
    name: "Атырау",
    country: "KZ",
    partners: [{ name: "ТОО «Казына Атырау»", outlets: "2 500" }],
    totalOutlets: 2500,
    position: { top: "52%", left: "16%" },
  },
  {
    id: 10,
    name: "Костанай",
    country: "KZ",
    partners: [{ name: "ТОО «Максат трейд»", outlets: "1 766" }],
    totalOutlets: 1766,
    position: { top: "22%", left: "42%" },
  },
  {
    id: 11,
    name: "Кокшетау",
    country: "KZ",
    partners: [{ name: "ТОО «Максат трейд»", outlets: "1 427" }],
    totalOutlets: 1427,
    position: { top: "22%", left: "52%" },
  },
  {
    id: 12,
    name: "Петропавловск",
    country: "KZ",
    partners: [{ name: "ТОО «Максат трейд»", outlets: "757" }],
    totalOutlets: 757,
    position: { top: "16%", left: "55%" },
  },
  {
    id: 13,
    name: "Павлодар",
    country: "KZ",
    partners: [
      { name: "ТОО «Парма М»", outlets: "1 200" },
      { name: "ТОО «Интерфуд»", outlets: "—" },
    ],
    totalOutlets: 1200,
    position: { top: "26%", left: "68%" },
  },
  {
    id: 14,
    name: "Усть-Каменогорск, Семей",
    country: "KZ",
    region: "ВКО",
    partners: [{ name: "ТОО «Юкон Трейд»", outlets: "1 500" }],
    totalOutlets: 1500,
    position: { top: "34%", left: "82%" },
  },
  {
    id: 15,
    name: "Караганда",
    country: "KZ",
    partners: [
      { name: "ТОО «Трояна»", outlets: "2 500" },
      { name: "ТОО «Жалгас Трейд»", outlets: "—" },
    ],
    totalOutlets: 2500,
    position: { top: "42%", left: "58%" },
  },
  {
    id: 16,
    name: "Уральск",
    country: "KZ",
    partners: [{ name: "ИП «Алем Foods»", outlets: "1 300" }],
    totalOutlets: 1300,
    position: { top: "38%", left: "18%" },
  },
  {
    id: 17,
    name: "Балхаш",
    country: "KZ",
    partners: [{ name: "ИП Парпиев опт", outlets: "100" }],
    totalOutlets: 100,
    position: { top: "52%", left: "62%" },
  },
  {
    id: 18,
    name: "Ташкент",
    country: "UZ",
    partners: [{ name: "ООО «Тимур Савдо Инвест»", outlets: "5 000" }],
    totalOutlets: 5000,
    position: { top: "82%", left: "44%" },
  },
  {
    id: 19,
    name: "Талас",
    country: "KG",
    partners: [{ name: "ИП Мадиярбек уулу", outlets: "500" }],
    totalOutlets: 500,
    position: { top: "78%", left: "60%" },
  },
  {
    id: 20,
    name: "Бишкек",
    country: "KG",
    partners: [{ name: "ОсОО «Байболат Групп»", outlets: "1 000" }],
    totalOutlets: 1000,
    position: { top: "76%", left: "66%" },
  },
  {
    id: 21,
    name: "Орск",
    country: "RU",
    partners: [{ name: "ТОО «Данабаев М.Е.»", outlets: "1 500" }],
    totalOutlets: 1500,
    position: { top: "30%", left: "20%" },
  },
  {
    id: 22,
    name: "Оренбург",
    country: "RU",
    partners: [{ name: "ИП Жанжигитов", outlets: "1 500" }],
    totalOutlets: 1500,
    position: { top: "26%", left: "24%" },
  },
  {
    id: 23,
    name: "Германия",
    country: "DE",
    partners: [
      { name: "Lackmann Fleisch- und Feinkostfabrik GmbH", outlets: "5 000" },
    ],
    totalOutlets: 5000,
    position: { top: "12%", left: "8%" },
  },
];

const countryFlags: Record<City["country"], string> = {
  KZ: "🇰🇿",
  UZ: "🇺🇿",
  KG: "🇰🇬",
  RU: "🇷🇺",
  DE: "🇩🇪",
};

const countryNames: Record<City["country"], string> = {
  KZ: "Казахстан",
  UZ: "Узбекистан",
  KG: "Кыргызстан",
  RU: "Россия",
  DE: "Германия",
};

const totalOutlets = cities.reduce((sum, c) => sum + c.totalOutlets, 0);
const totalPartners = cities.reduce((sum, c) => sum + c.partners.length, 0);
const totalCountries = new Set(cities.map((c) => c.country)).size;

const StoreMapSection = () => {
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);
  const [filterCountry, setFilterCountry] = useState<City["country"] | "ALL">(
    "ALL"
  );
  const { ref, isVisible } = useScrollAnimation();

  const filteredCities =
    filterCountry === "ALL"
      ? cities
      : cities.filter((c) => c.country === filterCountry);

  const countries: (City["country"] | "ALL")[] = [
    "ALL",
    "KZ",
    "UZ",
    "KG",
    "RU",
    "DE",
  ];

  return (
    <section id="stores" className="section-padding bg-background">
      <div className="container-wide">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            География поставок
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Где купить продукцию Arzu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Наши партнёры обеспечивают поставки продукции в крупнейшие торговые
            сети Казахстана и стран ближнего и дальнего зарубежья
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          <div className="bg-card rounded-2xl p-5 text-center shadow-soft border border-border/50">
            <Store className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-display font-bold text-foreground">
              {totalOutlets.toLocaleString("ru-RU")}+
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">
              торговых точек
            </div>
          </div>
          <div className="bg-card rounded-2xl p-5 text-center shadow-soft border border-border/50">
            <Users className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-display font-bold text-foreground">
              {totalPartners}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">
              партнёров-дистрибьюторов
            </div>
          </div>
          <div className="bg-card rounded-2xl p-5 text-center shadow-soft border border-border/50">
            <Globe2 className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-display font-bold text-foreground">
              {totalCountries}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">
              страны присутствия
            </div>
          </div>
        </div>

        {/* Country filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {countries.map((c) => (
            <button
              key={c}
              onClick={() => setFilterCountry(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filterCountry === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-foreground hover:bg-accent/70"
              }`}
            >
              {c === "ALL" ? "Все страны" : `${countryFlags[c]} ${countryNames[c]}`}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 bg-card rounded-2xl shadow-soft p-6 relative">
            <div className="relative aspect-[16/10] bg-accent/30 rounded-xl overflow-hidden">
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
                <line x1="0" y1="112" x2="800" y2="112" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4" />
                <line x1="0" y1="225" x2="800" y2="225" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4" />
                <line x1="0" y1="337" x2="800" y2="337" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4" />
                <line x1="200" y1="0" x2="200" y2="450" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4" />
                <line x1="400" y1="0" x2="400" y2="450" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4" />
                <line x1="600" y1="0" x2="600" y2="450" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4" />
              </svg>

              {filteredCities.map((city) => (
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
                    className={`h-6 w-6 drop-shadow-md transition-colors ${
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

          {/* Selected city info */}
          <div className="flex flex-col gap-4">
            <div className="bg-card rounded-2xl shadow-soft p-6 border-l-4 border-primary">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{countryFlags[selectedCity.country]}</span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  {countryNames[selectedCity.country]}
                  {selectedCity.region ? ` · ${selectedCity.region}` : ""}
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                {selectedCity.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Store className="h-4 w-4 text-primary" />
                <span>
                  Свыше{" "}
                  <strong className="text-foreground">
                    {selectedCity.totalOutlets.toLocaleString("ru-RU")}
                  </strong>{" "}
                  торговых точек
                </span>
              </div>
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                  Партнёры
                </div>
                {selectedCity.partners.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-start justify-between gap-3 text-sm border-b border-border/50 last:border-0 pb-2 last:pb-0"
                  >
                    <span className="text-foreground">{p.name}</span>
                    <span className="text-primary font-semibold whitespace-nowrap">
                      {p.outlets}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl shadow-soft p-6 flex-1 max-h-96 overflow-y-auto">
              <h4 className="font-semibold text-foreground mb-3 sticky top-0 bg-card pb-2">
                Все локации
              </h4>
              <div className="space-y-1">
                {filteredCities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCity(city)}
                    className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCity.id === city.id
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    <span className="flex items-center gap-2 truncate">
                      <span className="text-xs">{countryFlags[city.country]}</span>
                      <span className="truncate">{city.name}</span>
                    </span>
                    <span className="text-xs whitespace-nowrap">
                      {city.totalOutlets.toLocaleString("ru-RU")}
                    </span>
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
