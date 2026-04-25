import { useState } from "react";
import { MapPin, Store, Users, Globe2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { COUNTRY_MAPS } from "@/data/countryMaps";

type CountryCode = "KZ" | "UZ" | "KG" | "RU" | "DE";
type Partner = { name: string; outlets: string };
type City = {
  id: number;
  name: string;
  country: CountryCode;
  region?: string;
  partners: Partner[];
  totalOutlets: number;
};

// Source: Список контрагентов на 05.01.2026 г (ТОО «Та-Мак», фабрика Arzu)
const cities: City[] = [
  { id: 1, name: "Тараз", country: "KZ", totalOutlets: 2576, partners: [
      { name: "ТОО «Артемида Тараз»", outlets: "2 500" },
      { name: "ТОО «Фиркан сети»", outlets: "24" },
      { name: "ТОО «В/К сети»", outlets: "49" },
      { name: "ИП Джанабекова", outlets: "1" },
      { name: "ТОО «АсЭко»", outlets: "1" },
      { name: "ИП Рыскалова (Каспий магазин)", outlets: "1" },
    ] },
  { id: 2, name: "Шымкент", country: "KZ", totalOutlets: 3000, partners: [{ name: "ТОО «Pilot»", outlets: "3 000" }] },
  { id: 3, name: "Туркестан", country: "KZ", totalOutlets: 1000, partners: [{ name: "ТОО «ИЖБ»", outlets: "1 000" }] },
  { id: 4, name: "Кызылорда", country: "KZ", totalOutlets: 3500, partners: [{ name: "ТОО «Дара Кызылорда»", outlets: "3 500" }] },
  { id: 5, name: "Актобе", country: "KZ", totalOutlets: 62, partners: [{ name: "ТОО «Анвар»", outlets: "62 маркета" }] },
  { id: 6, name: "Алматы", country: "KZ", totalOutlets: 6197, partners: [
      { name: "ТОО «Тоймарт»", outlets: "41" },
      { name: "ТОО «Small»", outlets: "156" },
      { name: "ESC Trade Company", outlets: "6 000" },
      { name: "ТОО «Arbuz Group» (маркетплейс)", outlets: "—" },
      { name: "ТОО «Улан трейд»", outlets: "—" },
    ] },
  { id: 7, name: "Астана", country: "KZ", totalOutlets: 4000, partners: [
      { name: "ТОО «Тауык хаус»", outlets: "4 000" },
      { name: "ТОО «Максат трейд»", outlets: "—" },
    ] },
  { id: 8, name: "Актау", country: "KZ", totalOutlets: 1500, partners: [{ name: "ТОО «Кобзал»", outlets: "1 500" }] },
  { id: 9, name: "Атырау", country: "KZ", totalOutlets: 2500, partners: [{ name: "ТОО «Казына Атырау»", outlets: "2 500" }] },
  { id: 10, name: "Костанай", country: "KZ", totalOutlets: 1766, partners: [{ name: "ТОО «Максат трейд»", outlets: "1 766" }] },
  { id: 11, name: "Кокшетау", country: "KZ", totalOutlets: 1427, partners: [{ name: "ТОО «Максат трейд»", outlets: "1 427" }] },
  { id: 12, name: "Петропавловск", country: "KZ", totalOutlets: 757, partners: [{ name: "ТОО «Максат трейд»", outlets: "757" }] },
  { id: 13, name: "Павлодар", country: "KZ", totalOutlets: 1200, partners: [
      { name: "ТОО «Парма М»", outlets: "1 200" },
      { name: "ТОО «Интерфуд»", outlets: "—" },
    ] },
  { id: 14, name: "Усть-Каменогорск, Семей", country: "KZ", region: "ВКО", totalOutlets: 1500, partners: [{ name: "ТОО «Юкон Трейд»", outlets: "1 500" }] },
  { id: 15, name: "Караганда", country: "KZ", totalOutlets: 2500, partners: [
      { name: "ТОО «Трояна»", outlets: "2 500" },
      { name: "ТОО «Жалгас Трейд»", outlets: "—" },
    ] },
  { id: 16, name: "Уральск", country: "KZ", totalOutlets: 1300, partners: [{ name: "ИП «Алем Foods»", outlets: "1 300" }] },
  { id: 17, name: "Балхаш", country: "KZ", totalOutlets: 100, partners: [{ name: "ИП Парпиев опт", outlets: "100" }] },
  { id: 18, name: "Ташкент", country: "UZ", totalOutlets: 5000, partners: [{ name: "ООО «Тимур Савдо Инвест»", outlets: "5 000" }] },
  { id: 19, name: "Талас", country: "KG", totalOutlets: 500, partners: [{ name: "ИП Мадиярбек уулу", outlets: "500" }] },
  { id: 20, name: "Бишкек", country: "KG", totalOutlets: 1000, partners: [{ name: "ОсОО «Байболат Групп»", outlets: "1 000" }] },
  { id: 21, name: "Орск", country: "RU", totalOutlets: 1500, partners: [{ name: "ТОО «Данабаев М.Е.»", outlets: "1 500" }] },
  { id: 22, name: "Оренбург", country: "RU", totalOutlets: 1500, partners: [{ name: "ИП Жанжигитов", outlets: "1 500" }] },
  { id: 23, name: "Германия", country: "DE", totalOutlets: 5000, partners: [{ name: "Lackmann Fleisch- und Feinkostfabrik GmbH", outlets: "5 000" }] },
];

const countryFlags: Record<CountryCode, string> = {
  KZ: "🇰🇿", UZ: "🇺🇿", KG: "🇰🇬", RU: "🇷🇺", DE: "🇩🇪",
};
const countryNames: Record<CountryCode, string> = {
  KZ: "Казахстан", UZ: "Узбекистан", KG: "Кыргызстан",
  RU: "Россия (Оренбургская обл.)", DE: "Германия",
};
const countryShort: Record<CountryCode, string> = {
  KZ: "Казахстан", UZ: "Узбекистан", KG: "Кыргызстан", RU: "Россия", DE: "Германия",
};

const totalOutlets = cities.reduce((s, c) => s + c.totalOutlets, 0);
const totalPartners = cities.reduce((s, c) => s + c.partners.length, 0);
const totalCountries = new Set(cities.map((c) => c.country)).size;

const StoreMapSection = () => {
  const [activeCountry, setActiveCountry] = useState<CountryCode>("KZ");
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);
  const { ref, isVisible } = useScrollAnimation();

  const filteredCities = cities.filter((c) => c.country === activeCountry);
  const map = COUNTRY_MAPS[activeCountry];

  const handleCountryChange = (c: CountryCode) => {
    setActiveCountry(c);
    const first = cities.find((city) => city.country === c);
    if (first) setSelectedCity(first);
  };

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

        {/* Country tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {(Object.keys(countryFlags) as CountryCode[]).map((c) => (
            <button
              key={c}
              onClick={() => handleCountryChange(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCountry === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-foreground hover:bg-accent/70"
              }`}
            >
              {countryFlags[c]} {countryShort[c]}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Real country map */}
          <div className="lg:col-span-2 bg-card rounded-2xl shadow-soft p-6 relative">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{countryFlags[activeCountry]}</span>
                <h3 className="font-display font-bold text-foreground">
                  {countryNames[activeCountry]}
                </h3>
              </div>
              <span className="text-xs text-muted-foreground">
                {filteredCities.length}{" "}
                {filteredCities.length === 1 ? "локация" : "локаций"}
              </span>
            </div>
            <div className="relative aspect-[16/10] bg-accent/20 rounded-xl overflow-hidden">
              <svg
                viewBox="0 0 800 450"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="hsl(var(--border))"
                      strokeWidth="0.5"
                      opacity="0.3"
                    />
                  </pattern>
                </defs>
                <rect width="800" height="450" fill="url(#grid)" />

                {/* Country shape */}
                <path
                  d={map.path}
                  fill="hsl(var(--accent))"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  opacity="0.85"
                />

                {/* Connection lines from selected city to others */}
                {selectedCity.country === activeCountry &&
                  map.cities[selectedCity.name] &&
                  filteredCities.map((c) => {
                    if (c.id === selectedCity.id) return null;
                    const a = map.cities[selectedCity.name];
                    const b = map.cities[c.name];
                    if (!a || !b) return null;
                    return (
                      <line
                        key={c.id}
                        x1={a.x}
                        y1={a.y}
                        x2={b.x}
                        y2={b.y}
                        stroke="hsl(var(--primary))"
                        strokeWidth="0.8"
                        strokeDasharray="3 3"
                        opacity="0.35"
                      />
                    );
                  })}
              </svg>

              {/* City pins overlaid via absolute positioning */}
              {filteredCities.map((city) => {
                const pt = map.cities[city.name];
                if (!pt) return null;
                const left = `${(pt.x / 800) * 100}%`;
                const top = `${(pt.y / 450) * 100}%`;
                const isActive = selectedCity.id === city.id;
                return (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCity(city)}
                    className={`absolute transform -translate-x-1/2 -translate-y-full group transition-all duration-300 ${
                      isActive ? "scale-125 z-10" : "hover:scale-110 z-0"
                    }`}
                    style={{ top, left }}
                    aria-label={city.name}
                  >
                    <MapPin
                      className={`h-6 w-6 drop-shadow-md transition-colors ${
                        isActive
                          ? "text-secondary fill-secondary/30"
                          : "text-primary fill-primary/20"
                      }`}
                    />
                    <span
                      className={`absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold px-2 py-0.5 rounded-full transition-all ${
                        isActive
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-card text-foreground shadow-sm opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {city.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected city info */}
          <div className="flex flex-col gap-4">
            <div className="bg-card rounded-2xl shadow-soft p-6 border-l-4 border-primary">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{countryFlags[selectedCity.country]}</span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  {countryShort[selectedCity.country]}
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
                Локации в стране
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
                    <span className="truncate">{city.name}</span>
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
