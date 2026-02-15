export interface Collection {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  story: string;
  mood: string;
  motifs: string[];
  image: string;
  featured: boolean;
}

export const collections: Collection[] = [
  {
    id: '1',
    slug: 'celestial-collection',
    name: 'Celestial Collection',
    tagline: 'Capturing the poetry of night sky',
    description: 'A series inspired by astronomical wonder and the eternal dance between light and darkness.',
    story: 'The Celestial Collection emerged from countless nights spent observing the interplay of moonlight and shadows. Each piece in this series attempts to capture that fleeting moment when darkness gives way to illumination—a metaphor for the human journey from obscurity to enlightenment. The mirrors are arranged in patterns that echo star constellations, while the clay work mimics the textured surface of ancient celestial maps.',
    mood: 'Contemplative, ethereal, timeless',
    motifs: ['Crescent moons', 'Star patterns', 'Orbital geometries', 'Light rays'],
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&q=80',
    featured: true,
  },
  {
    id: '2',
    slug: 'mandala-series',
    name: 'Mandala Series',
    tagline: 'Sacred geometry meets artisan craft',
    description: 'Precision-crafted mandalas that honor ancient spiritual traditions while embracing contemporary aesthetics.',
    story: 'The Mandala Series represents months of mathematical calculation and meditative practice. Each mandala begins as a sacred geometric formula, then transforms through the artist\'s hands into a three-dimensional meditation tool. The symmetry is not merely visual—it\'s meant to create a sense of psychological balance and harmony in the space it inhabits. These pieces serve as both art and spiritual anchor.',
    mood: 'Meditative, balanced, profound',
    motifs: ['Geometric precision', 'Concentric circles', 'Symmetrical patterns', 'Sacred symbols'],
    image: 'https://images.unsplash.com/photo-1579762715459-5a068c289fda?w=1200&q=80',
    featured: true,
  },
  {
    id: '3',
    slug: 'architectural-suite',
    name: 'Architectural Suite',
    tagline: 'Where art becomes structure',
    description: 'Large-scale installations designed to transform spaces and challenge the boundaries between wall art and architecture.',
    story: 'Born from collaborations with architects and interior designers, the Architectural Suite pushes Lippan art into monumental territory. These pieces are designed with spatial harmony in mind—considering sight lines, natural light patterns, and the emotional journey of those who move through the space. Each installation is as much about the negative space and the room itself as it is about the physical artwork.',
    mood: 'Grand, transformative, sophisticated',
    motifs: ['Architectural elements', 'Column patterns', 'Archways', 'Structural geometry'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    featured: true,
  },
  {
    id: '4',
    slug: 'nature-poetry',
    name: 'Nature Poetry',
    tagline: 'Organic forms in earth and mirror',
    description: 'Celebrating the untamed beauty of natural forms through fluid, organic patterns and earth-sourced materials.',
    story: 'The Nature Poetry collection finds inspiration in morning walks through arid landscapes, where life persists against all odds. Desert flowers, wind-carved rock formations, and the delicate patterns of dried riverbeds inform these pieces. Rather than imposing rigid geometry, these works embrace asymmetry and organic flow, allowing the materials themselves to guide the final form. Each piece contains actual elements from nature—pressed flowers, natural pigments, sand—making them unique even within their limited editions.',
    mood: 'Organic, flowing, earthy',
    motifs: ['Botanical elements', 'Natural textures', 'Flowing lines', 'Organic asymmetry'],
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&q=80',
    featured: false,
  },
  {
    id: '5',
    slug: 'home-living',
    name: 'Home Living',
    tagline: 'Where function meets artistry',
    description: 'Functional art pieces that bring traditional craftsmanship into everyday living. From planters to serving ware, each object is a tactile celebration of beauty in use.',
    story: 'The Home Living collection emerged from a simple question: why should art be confined to walls? These pieces invite you to interact with Lippan artistry daily—watering plants in a decorated planter, lighting candles in mirror-adorned holders, serving tea on a tray that doubles as sculpture. We believe the objects we use shape our rituals and rituals shape our lives. By bringing traditional craft into functional forms, we create opportunities for beauty to permeate the ordinary. Each piece is designed to be both useful and contemplative, transforming mundane tasks into mindful moments. Whether holding fresh herbs, catching incense ash, or displaying flowers, these objects remind us that the sacred and the everyday are not separate—they are one.',
    mood: 'Grounded, intimate, celebratory',
    motifs: ['Lotus patterns', 'Paisley', 'Traditional vessels', 'Everyday rituals'],
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=80',
    featured: true,
  },
];

export const getCollectionBySlug = (slug: string): Collection | undefined => {
  return collections.find((c) => c.slug === slug);
};

export const getFeaturedCollections = (): Collection[] => {
  return collections.filter((c) => c.featured);
};
