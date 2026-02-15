export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  images: string[];
  collection: string;
  edition: {
    current: number;
    total: number;
  };
  materials: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
    unit: string;
  };
  weight: {
    value: number;
    unit: string;
  };
  shippingTimeline: string;
  care: string[];
  description: string;
  featured: boolean;
  available: boolean;
  categoryTags: string[];
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'eternal-radiance',
    name: 'Eternal Radiance',
    tagline: 'A dance of light through centuries-old craft',
    price: 48500,
    images: [
      'https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=1200&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=1200&q=80',
      'https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=1200&q=80',
    ],
    collection: 'celestial-collection',
    edition: {
      current: 3,
      total: 12,
    },
    materials: ['Hand-mixed clay', 'Belgian mirrors', '24K gold leaf', 'Natural pigments'],
    dimensions: {
      width: 90,
      height: 120,
      depth: 3,
      unit: 'cm',
    },
    weight: {
      value: 8,
      unit: 'kg',
    },
    shippingTimeline: '4-6 weeks',
    care: [
      'Wipe gently with a dry microfiber cloth',
      'Avoid direct moisture exposure',
      'Keep away from extreme temperatures',
      'Handle mirrors with care during cleaning',
    ],
    description: 'Each piece in the Eternal Radiance series captures the essence of moonlight through intricate mirror work and hand-carved clay patterns. Inspired by ancient palace architecture, this wall panel transforms any space into a sanctuary of reflected beauty.',
    featured: true,
    available: true,
    categoryTags: ['Wall Panel', 'Large Format', 'Gold Accent'],
  },
  {
    id: '2',
    slug: 'whispers-of-dusk',
    name: 'Whispers of Dusk',
    tagline: 'Where twilight meets tradition',
    price: 32000,
    images: [
      'https://images.unsplash.com/photo-1576158113928-4c240eaaf360?w=1200&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80',
    ],
    collection: 'celestial-collection',
    edition: {
      current: 7,
      total: 15,
    },
    materials: ['Terracotta clay', 'Hand-cut mirrors', 'Natural mica', 'Earth pigments'],
    dimensions: {
      width: 60,
      height: 90,
      depth: 2.5,
      unit: 'cm',
    },
    weight: {
      value: 5,
      unit: 'kg',
    },
    shippingTimeline: '3-5 weeks',
    care: [
      'Dust with a soft brush',
      'Avoid hanging in direct sunlight',
      'Maintain indoor humidity levels',
    ],
    description: 'A meditation on the quiet hours between day and night, Whispers of Dusk combines subtle earth tones with delicate mirror placement to create a piece that evolves with changing light throughout the day.',
    featured: true,
    available: true,
    categoryTags: ['Wall Panel', 'Medium Format', 'Earth Tones'],
  },
  {
    id: '3',
    slug: 'heritage-mandala',
    name: 'Heritage Mandala',
    tagline: 'Sacred geometry in clay and light',
    price: 56000,
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=80',
      'https://images.unsplash.com/photo-1579762715459-5a068c289fda?w=1200&q=80',
    ],
    collection: 'mandala-series',
    edition: {
      current: 2,
      total: 8,
    },
    materials: ['Aged clay', 'Precision-cut mirrors', 'Brass inlay', 'Traditional bindis'],
    dimensions: {
      width: 100,
      height: 100,
      depth: 3.5,
      unit: 'cm',
    },
    weight: {
      value: 10,
      unit: 'kg',
    },
    shippingTimeline: '6-8 weeks',
    care: [
      'Professional cleaning recommended',
      'Keep in climate-controlled environment',
      'Avoid vibration-prone walls',
    ],
    description: 'The Heritage Mandala represents the pinnacle of Lippan artistry. Each geometric pattern is meticulously calculated and hand-placed to create perfect symmetry that both honors ancient traditions and speaks to contemporary sensibilities.',
    featured: true,
    available: true,
    categoryTags: ['Wall Panel', 'Large Format', 'Statement Piece'],
  },
  {
    id: '4',
    slug: 'moonlit-serenity',
    name: 'Moonlit Serenity',
    tagline: 'Stillness captured in form',
    price: 28500,
    images: [
      'https://images.unsplash.com/photo-1544186730-eed80c5d2e8e?w=1200&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=1200&q=80',
    ],
    collection: 'celestial-collection',
    edition: {
      current: 5,
      total: 20,
    },
    materials: ['White clay', 'Silver mirrors', 'Pearl dust finish'],
    dimensions: {
      width: 45,
      height: 60,
      depth: 2,
      unit: 'cm',
    },
    weight: {
      value: 3.5,
      unit: 'kg',
    },
    shippingTimeline: '2-4 weeks',
    care: [
      'Gentle dusting only',
      'Preserve the pearl finish',
      'Avoid harsh lighting',
    ],
    description: 'A compact masterpiece that brings tranquil elegance to intimate spaces. The subtle pearl finish creates an ethereal glow that complements minimalist and contemporary interiors.',
    featured: false,
    available: true,
    categoryTags: ['Wall Panel', 'Small Format', 'Minimal'],
  },
  {
    id: '5',
    slug: 'artisan-trilogy',
    name: 'Artisan Trilogy',
    tagline: 'Three panels, one story',
    price: 125000,
    images: [
      'https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=1200&q=80',
      'https://images.unsplash.com/photo-1576158113928-4c240eaaf360?w=1200&q=80',
    ],
    collection: 'architectural-suite',
    edition: {
      current: 1,
      total: 5,
    },
    materials: ['Mixed clay varieties', 'Custom-cut mirrors', 'Copper leaf', 'Resin seal'],
    dimensions: {
      width: 180,
      height: 150,
      depth: 4,
      unit: 'cm',
    },
    weight: {
      value: 25,
      unit: 'kg',
    },
    shippingTimeline: '10-14 weeks',
    care: [
      'Professional installation required',
      'Annual maintenance included',
      'Custom care guide provided',
    ],
    description: 'A monumental triptych designed for grand spaces. This architectural installation tells a visual story across three connected panels, each one complementing and completing the others to create a transformative focal point.',
    featured: true,
    available: true,
    categoryTags: ['Installation', 'Multi-Panel', 'Statement Piece', 'Architectural'],
  },
  {
    id: '6',
    slug: 'desert-bloom',
    name: 'Desert Bloom',
    tagline: 'Life emerging from arid beauty',
    price: 38000,
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=80',
      'https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=1200&q=80',
    ],
    collection: 'nature-poetry',
    edition: {
      current: 4,
      total: 18,
    },
    materials: ['Desert sand clay', 'Amber mirrors', 'Dried botanicals', 'Natural wax'],
    dimensions: {
      width: 75,
      height: 100,
      depth: 2.8,
      unit: 'cm',
    },
    weight: {
      value: 6.5,
      unit: 'kg',
    },
    shippingTimeline: '4-6 weeks',
    care: [
      'Keep away from moisture',
      'Preserve botanical elements',
      'Occasional gentle brushing',
    ],
    description: 'Inspired by resilient desert flora, this piece celebrates beauty that thrives in harsh conditions. Warm amber tones and organic patterns create a connection to nature that feels both ancient and contemporary.',
    featured: false,
    available: true,
    categoryTags: ['Wall Panel', 'Medium Format', 'Organic'],
  },
  {
    id: '7',
    slug: 'kalash-blessing-panel',
    name: 'Kalash Blessing Panel',
    tagline: 'Ancient symbolism in sculptural relief',
    price: 52000,
    images: [
      '/api/placeholder/1200/1600',
      'https://images.unsplash.com/photo-1579762715459-5a068c289fda?w=1200&q=80',
    ],
    collection: 'home-living',
    edition: {
      current: 2,
      total: 10,
    },
    materials: ['Hand-mixed clay', 'Precision-cut mirrors', 'Natural pigments', 'Protective sealant'],
    dimensions: {
      width: 100,
      height: 70,
      depth: 3,
      unit: 'cm',
    },
    weight: {
      value: 9,
      unit: 'kg',
    },
    shippingTimeline: '5-7 weeks',
    care: [
      'Dust gently with a soft brush',
      'Avoid direct water exposure',
      'Keep in stable temperature environment',
      'Handle mirror elements with care',
    ],
    description: 'This stunning panel features a traditional kalash (sacred pot) motif flanked by hanging lamps and surrounded by lotus patterns. A three-panel composition that brings auspicious energy and timeless beauty to any space. The intricate border work and symmetrical design make it a perfect centerpiece for meditation rooms or entrance halls.',
    featured: true,
    available: true,
    categoryTags: ['Wall Panel', 'Large Format', 'Traditional Motifs', 'Home Decor'],
  },
  {
    id: '8',
    slug: 'kemal-planter',
    name: 'Kemal Planter',
    tagline: 'Where craft meets cultivation',
    price: 8500,
    images: [
      '/api/placeholder/800/1000',
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80',
    ],
    collection: 'home-living',
    edition: {
      current: 8,
      total: 25,
    },
    materials: ['Hand-molded terracotta', 'Mirror mosaic', 'Natural clay slip', 'Drainage system'],
    dimensions: {
      width: 12,
      height: 12,
      depth: 12,
      unit: 'cm',
    },
    weight: {
      value: 0.8,
      unit: 'kg',
    },
    shippingTimeline: '2-3 weeks',
    care: [
      'Wipe exterior with dry cloth only',
      'Use as decorative piece or with drainage',
      'Suitable for small succulents or herbs',
      'Avoid soaking the decorated exterior',
    ],
    description: 'The Kemal Planter brings artisan elegance to your plant collection. Hand-decorated with traditional Lippan patterns, each planter features lotus motifs and mirror work that catches light beautifully. Perfect for windowsills, desks, or as part of a curated shelf display.',
    featured: true,
    available: true,
    categoryTags: ['Home Decor', 'Planter', 'Small Format', 'Functional Art'],
  },
  {
    id: '9',
    slug: 'kumbh-vessel-planter',
    name: 'Kumbh Vessel Planter',
    tagline: 'Functional sculpture for living spaces',
    price: 9500,
    images: [
      '/api/placeholder/800/1000',
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80',
    ],
    collection: 'home-living',
    edition: {
      current: 5,
      total: 25,
    },
    materials: ['Hand-thrown terracotta', 'Hand-cut mirrors', 'Sealed clay finish', 'Drainage holes'],
    dimensions: {
      width: 13,
      height: 14,
      depth: 13,
      unit: 'cm',
    },
    weight: {
      value: 1,
      unit: 'kg',
    },
    shippingTimeline: '2-3 weeks',
    care: [
      'Clean exterior with soft, dry cloth',
      'Can hold small plants with proper drainage',
      'Display indoors in stable environment',
      'Mirrors may be gently cleaned with glass cleaner on cloth',
    ],
    description: 'Named after the traditional Indian water vessel, the Kumbh planter combines ancient form with decorative Lippan artistry. The flowing lotus and paisley patterns make each piece a standalone sculpture even before you add greenery. Ideal for ferns, succulents, or as a stylish utensil holder.',
    featured: false,
    available: true,
    categoryTags: ['Home Decor', 'Planter', 'Small Format', 'Functional Art'],
  },
  {
    id: '10',
    slug: 'diya-candle-holders-set',
    name: 'Diya Candle Holders Set',
    tagline: 'Illuminate with tradition',
    price: 12000,
    images: [
      'https://images.unsplash.com/photo-1603912699214-92627f304eb6?w=800&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    ],
    collection: 'home-living',
    edition: {
      current: 6,
      total: 20,
    },
    materials: ['Molded clay', 'Mirror fragments', 'Heat-resistant finish', 'Gold accents'],
    dimensions: {
      width: 8,
      height: 5,
      depth: 8,
      unit: 'cm',
    },
    weight: {
      value: 0.5,
      unit: 'kg',
    },
    shippingTimeline: '2-3 weeks',
    care: [
      'Wipe clean after candle use',
      'Use tea lights or small candles only',
      'Keep away from flammable materials',
      'Store in cool, dry place when not in use',
    ],
    description: 'This set of three decorative diya holders brings festival magic to everyday life. Each piece is adorned with delicate mirror work that multiplies candlelight into dancing reflections. Whether for daily ambiance or special celebrations, these holders transform simple candles into an experience.',
    featured: false,
    available: true,
    categoryTags: ['Home Decor', 'Candle Holder', 'Set of 3', 'Functional Art'],
  },
  {
    id: '11',
    slug: 'serving-tray-lotus',
    name: 'Lotus Serving Tray',
    tagline: 'Hospitality as art',
    price: 15500,
    images: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80',
      'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80',
    ],
    collection: 'home-living',
    edition: {
      current: 4,
      total: 15,
    },
    materials: ['Reinforced clay base', 'Mirror inlay', 'Food-safe sealant', 'Carved wooden handles'],
    dimensions: {
      width: 45,
      height: 3,
      depth: 30,
      unit: 'cm',
    },
    weight: {
      value: 2.5,
      unit: 'kg',
    },
    shippingTimeline: '3-4 weeks',
    care: [
      'Hand wash only, avoid dishwasher',
      'Do not soak in water',
      'Dry immediately after cleaning',
      'Handle with care to protect mirror work',
    ],
    description: 'This elegant serving tray elevates the ritual of hospitality. The lotus pattern, a symbol of purity and beauty, is rendered in mirror work that creates a stunning backdrop for your finest teas, drinks, or appetizers. Equally beautiful as a decorative piece on a coffee table or console.',
    featured: false,
    available: true,
    categoryTags: ['Home Decor', 'Serving Ware', 'Functional Art', 'Large Format'],
  },
  {
    id: '12',
    slug: 'incense-holder-temple',
    name: 'Temple Incense Holder',
    tagline: 'Sacred smoke, crafted vessel',
    price: 5500,
    images: [
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    ],
    collection: 'home-living',
    edition: {
      current: 12,
      total: 30,
    },
    materials: ['Hand-formed clay', 'Mini mirror tiles', 'Ash-catching base', 'Natural finish'],
    dimensions: {
      width: 15,
      height: 8,
      depth: 6,
      unit: 'cm',
    },
    weight: {
      value: 0.4,
      unit: 'kg',
    },
    shippingTimeline: '1-2 weeks',
    care: [
      'Empty ash after each use',
      'Wipe with damp cloth occasionally',
      'Keep in dry environment',
      'Mirrors can be cleaned with gentle glass cleaner',
    ],
    description: 'Inspired by temple architecture, this incense holder brings mindful beauty to your meditation or living space. The raised platform catches ash while the mirror work creates a meditative focal point. Accommodates both stick and cone incense.',
    featured: false,
    available: true,
    categoryTags: ['Home Decor', 'Incense Holder', 'Small Format', 'Spiritual'],
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getProductsByCollection = (collectionSlug: string): Product[] => {
  return products.filter((p) => p.collection === collectionSlug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};
