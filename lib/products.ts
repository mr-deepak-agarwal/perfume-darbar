export type Notes = {
  top: string[];
  heart: string[];
  base: string[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: "Eau de Parfum" | "Attar" | "Body Mist" | "Gift Set";
  gender: "Her" | "Him" | "Unisex";
  collection: string;
  price: number;
  compareAtPrice?: number;
  size: string;
  notes: Notes;
  concentration: string;
  longevity: string;
  hue: [string, string];
  badge?: string;
  rating: number;
  reviewCount: number;
};

export const collections = [
  {
    slug: "morning-ritual",
    name: "Morning Ritual",
    description: "Bright, citrus-forward pours for the first hour of the day.",
    hue: ["#E7DCC0", "#A9793A"] as [string, string],
  },
  {
    slug: "evening-presence",
    name: "Evening Presence",
    description: "Deep ambers and woods that hold a room after you've left it.",
    hue: ["#1C1712", "#6B2430"] as [string, string],
  },
  {
    slug: "the-attar-edit",
    name: "The Attar Edit",
    description: "Oil-based, alcohol-free traditions distilled the old way.",
    hue: ["#4B5842", "#A9793A"] as [string, string],
  },
  {
    slug: "gifting",
    name: "Gifting",
    description: "Sets and travel pours, boxed for giving.",
    hue: ["#6B2430", "#C79A55"] as [string, string],
  },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "antara-saffron-dusk",
    name: "Saffron Dusk",
    tagline: "Saffron threaded through warm oud and smoked vanilla.",
    description:
      "A record of the hour just after sunset, when saffron-steeped tea meets the first char of incense. Saffron Dusk opens bright and spiced, then settles into oud, labdanum and a low hum of smoked vanilla that sits close to the skin for hours.",
    category: "Eau de Parfum",
    gender: "Unisex",
    collection: "evening-presence",
    price: 3200,
    compareAtPrice: 3800,
    size: "50ml",
    notes: {
      top: ["Saffron", "Pink Pepper"],
      heart: ["Oud", "Rose Absolute"],
      base: ["Smoked Vanilla", "Labdanum"],
    },
    concentration: "Eau de Parfum, 22% oil",
    longevity: "8–10 hours",
    hue: ["#3A2318", "#A9793A"],
    badge: "Bestseller",
    rating: 4.8,
    reviewCount: 214,
  },
  {
    id: "2",
    slug: "antara-vetiver-hour",
    name: "Vetiver Hour",
    tagline: "Earthy vetiver, bergamot, and a whisper of grey musk.",
    description:
      "Named for the hour spent in the garden after rain. Vetiver Hour leads with bergamot and green cardamom, rests on a wide bed of Haitian vetiver, and closes on grey musk — restrained enough for a boardroom, alive enough for anything after.",
    category: "Eau de Parfum",
    gender: "Him",
    collection: "morning-ritual",
    price: 2950,
    size: "50ml",
    notes: {
      top: ["Bergamot", "Green Cardamom"],
      heart: ["Vetiver", "Violet Leaf"],
      base: ["Grey Musk", "Cedarwood"],
    },
    concentration: "Eau de Parfum, 20% oil",
    longevity: "6–8 hours",
    hue: ["#2B3226", "#4B5842"],
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: "3",
    slug: "antara-white-jasmine-letter",
    name: "White Jasmine Letter",
    tagline: "Indian jasmine sambac, white tea, and clean sandalwood.",
    description:
      "Written like a note left on a pillow — jasmine sambac picked at night, white tea leaves, and a soft sandalwood drydown that never turns sweet. Wears close, reads honest.",
    category: "Eau de Parfum",
    gender: "Her",
    collection: "morning-ritual",
    price: 3050,
    size: "50ml",
    notes: {
      top: ["White Tea", "Mandarin"],
      heart: ["Jasmine Sambac", "Tuberose"],
      base: ["Sandalwood", "White Musk"],
    },
    concentration: "Eau de Parfum, 20% oil",
    longevity: "6–8 hours",
    hue: ["#EFE7D3", "#C79A55"],
    badge: "New",
    rating: 4.9,
    reviewCount: 98,
  },
  {
    id: "4",
    slug: "antara-mysore-attar",
    name: "Mysore Sandal Attar",
    tagline: "Pure sandalwood oil, distilled the traditional deg-bhapka way.",
    description:
      "No alcohol, no shortcuts. Mysore sandalwood, hydro-distilled in copper stills over open fire, the way it's been done for generations. Wears warm, creamy, and close — a little goes a long way.",
    category: "Attar",
    gender: "Unisex",
    collection: "the-attar-edit",
    price: 1800,
    size: "12ml",
    notes: {
      top: ["Sandalwood"],
      heart: ["Sandalwood", "Rose"],
      base: ["Sandalwood", "Amber"],
    },
    concentration: "Pure oil, undiluted",
    longevity: "10–12 hours",
    hue: ["#4B5842", "#A9793A"],
    rating: 4.9,
    reviewCount: 302,
  },
  {
    id: "5",
    slug: "antara-oud-al-hind",
    name: "Oud Al Hind",
    tagline: "Wild Assam oud, rose, and a trace of clove.",
    description:
      "Sourced from wild agarwood in Assam, aged eight years before distillation. Oud Al Hind is dense, resinous, and unapologetically loud in the first hour — then folds into rose and a single note of clove.",
    category: "Attar",
    gender: "Him",
    collection: "the-attar-edit",
    price: 4200,
    size: "6ml",
    notes: {
      top: ["Agarwood"],
      heart: ["Rose", "Clove"],
      base: ["Aged Oud", "Amber"],
    },
    concentration: "Pure oil, undiluted",
    longevity: "12+ hours",
    hue: ["#1C1712", "#6B2430"],
    badge: "Rare",
    rating: 5.0,
    reviewCount: 61,
  },
  {
    id: "6",
    slug: "antara-fig-and-stone",
    name: "Fig & Wet Stone",
    tagline: "Green fig leaf, petrichor accord, and quiet cedar.",
    description:
      "Built around a petrichor accord — the smell of rain on hot stone — layered with green fig leaf and a low cedar base. Unisex, understated, made for humid evenings.",
    category: "Eau de Parfum",
    gender: "Unisex",
    collection: "evening-presence",
    price: 2800,
    size: "50ml",
    notes: {
      top: ["Fig Leaf", "Petrichor Accord"],
      heart: ["Green Tea", "Iris"],
      base: ["Cedarwood", "Ambergris"],
    },
    concentration: "Eau de Parfum, 18% oil",
    longevity: "6–7 hours",
    hue: ["#2B3226", "#EFE7D3"],
    rating: 4.6,
    reviewCount: 87,
  },
  {
    id: "7",
    slug: "antara-marigold-market",
    name: "Marigold Market",
    tagline: "Marigold, orange blossom, and warm jaggery.",
    description:
      "A walk through a flower market at 7am — marigold garlands, orange blossom water, and a trailing note of warm jaggery from the tea stall at the corner. Loud, joyful, and completely unbothered by convention.",
    category: "Eau de Parfum",
    gender: "Her",
    collection: "morning-ritual",
    price: 3100,
    compareAtPrice: 3400,
    size: "50ml",
    notes: {
      top: ["Marigold", "Orange Blossom"],
      heart: ["Neroli", "Jasmine"],
      base: ["Jaggery Accord", "Benzoin"],
    },
    concentration: "Eau de Parfum, 20% oil",
    longevity: "7–9 hours",
    hue: ["#A9793A", "#6B2430"],
    badge: "New",
    rating: 4.8,
    reviewCount: 132,
  },
  {
    id: "8",
    slug: "antara-leather-archive",
    name: "Leather Archive",
    tagline: "Birch tar leather, tobacco leaf, dark rum.",
    description:
      "For the back of a wardrobe that smells like old jackets and older books. Birch tar leather, a curl of tobacco leaf, and dark rum absolute, aged down to something quiet and confident.",
    category: "Eau de Parfum",
    gender: "Him",
    collection: "evening-presence",
    price: 3400,
    size: "50ml",
    notes: {
      top: ["Dark Rum", "Bergamot"],
      heart: ["Leather", "Tobacco Leaf"],
      base: ["Birch Tar", "Vetiver"],
    },
    concentration: "Eau de Parfum, 22% oil",
    longevity: "9–11 hours",
    hue: ["#1C1712", "#3A2318"],
    rating: 4.7,
    reviewCount: 174,
  },
  {
    id: "9",
    slug: "antara-rose-e-shahi",
    name: "Rose-e-Shahi",
    tagline: "Taif rose, saffron, and a trace of musk. Pure attar.",
    description:
      "Taif roses hand-picked before sunrise, steam-distilled the same day, layered with a thread of saffron and a soft musk. The classic Mughal court attar, remade in small batches.",
    category: "Attar",
    gender: "Her",
    collection: "the-attar-edit",
    price: 2600,
    size: "10ml",
    notes: {
      top: ["Taif Rose"],
      heart: ["Rose", "Saffron"],
      base: ["White Musk"],
    },
    concentration: "Pure oil, undiluted",
    longevity: "10+ hours",
    hue: ["#6B2430", "#C79A55"],
    rating: 4.9,
    reviewCount: 119,
  },
  {
    id: "10",
    slug: "antara-cedar-and-salt",
    name: "Cedar & Salt",
    tagline: "Atlas cedar, sea salt accord, grapefruit.",
    description:
      "Built for coastline mornings — grapefruit and sea salt up top, a wide plank of Atlas cedar underneath. Wears light, lasts longer than it has any right to.",
    category: "Eau de Parfum",
    gender: "Unisex",
    collection: "morning-ritual",
    price: 2700,
    size: "50ml",
    notes: {
      top: ["Grapefruit", "Sea Salt Accord"],
      heart: ["Cedar", "Ambrette"],
      base: ["Driftwood", "Musk"],
    },
    concentration: "Eau de Parfum, 18% oil",
    longevity: "6–8 hours",
    hue: ["#4B5842", "#EFE7D3"],
    rating: 4.5,
    reviewCount: 73,
  },
  {
    id: "11",
    slug: "antara-discovery-set",
    name: "The Discovery Set",
    tagline: "Five 6ml pours — one of every collection, boxed.",
    description:
      "The easiest way to find your signature. Five 6ml vials — Saffron Dusk, Vetiver Hour, White Jasmine Letter, Fig & Wet Stone, and Mysore Sandal Attar — in a letterpress box with a scent journal card.",
    category: "Gift Set",
    gender: "Unisex",
    collection: "gifting",
    price: 1500,
    size: "5 x 6ml",
    notes: {
      top: ["Bergamot", "Saffron", "White Tea"],
      heart: ["Jasmine", "Rose", "Vetiver"],
      base: ["Oud", "Sandalwood", "Musk"],
    },
    concentration: "Mixed",
    longevity: "Varies",
    hue: ["#A9793A", "#1C1712"],
    badge: "Best value",
    rating: 4.8,
    reviewCount: 241,
  },
  {
    id: "12",
    slug: "antara-monsoon-mist",
    name: "Monsoon Mist",
    tagline: "Alcohol-free body mist — jasmine, rain accord, white musk.",
    description:
      "A lighter-weight everyday mist for humid days and gym bags. Jasmine and a green rain accord over a soft white musk base, alcohol-free so it plays well with sensitive skin.",
    category: "Body Mist",
    gender: "Her",
    collection: "gifting",
    price: 950,
    size: "100ml",
    notes: {
      top: ["Rain Accord", "Bergamot"],
      heart: ["Jasmine", "Lily of the Valley"],
      base: ["White Musk"],
    },
    concentration: "Alcohol-free mist",
    longevity: "3–4 hours",
    hue: ["#4B5842", "#C79A55"],
    rating: 4.4,
    reviewCount: 55,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 4) {
  return products
    .filter((p) => p.id !== product.id && (p.collection === product.collection || p.gender === product.gender))
    .slice(0, count);
}

export function formatPrice(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}
