export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  image: string;
  tags: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'the-ancient-art-of-lippan',
    title: 'The Ancient Art of Lippan: A Journey Through Time',
    excerpt: 'Discover the centuries-old craft that transforms clay and mirrors into luminous masterpieces, and how it has evolved to grace contemporary luxury spaces.',
    content: `
# The Ancient Art of Lippan: A Journey Through Time

Lippan art, also known as mud and mirror work, originates from the arid landscapes of Gujarat and Rajasthan in India. For centuries, rural artisans have used locally sourced clay and small pieces of mirror to decorate their homes, creating surfaces that reflect precious sunlight into otherwise dark interiors.

## Origins and Heritage

The craft emerged as a practical solution to harsh desert conditions. Walls were coated with mud mixed with camel dung, which provided insulation and durability. Mirrors—often broken pieces salvaged from traders—were pressed into the wet clay in geometric patterns, transforming functional surfaces into works of art.

## Evolution into Fine Art

What was once a vernacular craft has evolved into a sophisticated art form. Contemporary Lippan artists have elevated the technique, incorporating precious materials, complex geometries, and refined aesthetics while honoring traditional methods.

## The Contemporary Relevance

Today's luxury interiors seek authenticity and craftsmanship—qualities that Lippan art embodies. Each piece carries a story of hands-on creation, patience, and the marriage of earth and light. In an age of mass production, these handmade works offer something increasingly rare: soul.

## Caring for Your Lippan Art

These pieces are remarkably durable when properly cared for:
- Keep in climate-controlled environments
- Avoid direct moisture exposure
- Dust gently with soft materials
- Appreciate the natural aging process as part of the piece's character

The beauty of Lippan art lies not just in its visual impact, but in its connection to centuries of human creativity and adaptation.
    `,
    author: 'Tuktuk Atelier',
    date: '2024-01-15',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1579762715459-5a068c289fda?w=1200&q=80',
    tags: ['Craft', 'Heritage', 'Education'],
    featured: true,
  },
  {
    id: '2',
    slug: 'designing-with-artisan-pieces',
    title: 'Designing with Artisan Pieces: A Designer\'s Guide',
    excerpt: 'How to integrate handcrafted art into contemporary interiors without overwhelming the space or diminishing the impact of the artwork.',
    content: `
# Designing with Artisan Pieces: A Designer's Guide

Incorporating handcrafted art into contemporary spaces requires a delicate balance between showcasing the piece and maintaining overall design harmony.

## Less is More

When working with statement artisan pieces, restraint in surrounding decor is key. Allow the artwork breathing room—both physical and visual. A single powerful piece often has more impact than multiple competing elements.

## Consider the Light

Lippan art is particularly sensitive to lighting conditions. The mirror work interacts with natural and artificial light throughout the day, creating different moods. Plan your lighting design with the artwork in mind:
- Position pieces to catch natural light at specific times
- Use focused spotlights to create dramatic evening effects
- Avoid harsh direct sunlight that may damage materials over time

## Color Harmony

The earthy tones of traditional Lippan work—clay browns, brass, natural whites—pair beautifully with:
- Neutral palettes (ivory, cream, warm grays)
- Natural materials (wood, stone, linen)
- Muted jewel tones used sparingly as accents

Avoid competing with the artwork through busy patterns or conflicting color schemes.

## Scale and Proportion

Consider the relationship between the piece and the wall:
- Large statement pieces need generous wall space
- Multi-panel installations require careful measurement
- Smaller pieces work well in intimate spaces or grouped arrangements

## Creating Dialogue

Position artisan pieces where they create conversation with other elements:
- Above a simple console or credenza
- As a focal point opposite the main entry
- In quiet spaces meant for contemplation

The goal is to create an environment where the art feels both integral and celebrated.
    `,
    author: 'Guest Contributor',
    date: '2024-02-03',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
    tags: ['Interior Design', 'Tips', 'Styling'],
    featured: true,
  },
  {
    id: '3',
    slug: 'commissioning-bespoke-art',
    title: 'The Journey of Commissioning Bespoke Art',
    excerpt: 'What to expect when commissioning a custom piece, from initial consultation through delivery and installation.',
    content: `
# The Journey of Commissioning Bespoke Art

Commissioning bespoke art is an intimate process that results in a piece uniquely yours. Here's what the journey entails.

## Initial Consultation

We begin with understanding:
- Your space and its character
- Your personal aesthetic and story
- Practical considerations (size, budget, timeline)
- Emotional intentions for the piece

This conversation shapes everything that follows.

## Concept Development

Based on our consultation, we develop:
- Initial sketches and mood boards
- Material and color palette proposals
- Multiple design directions for your consideration

This phase is collaborative. Your feedback guides the refinement process.

## Approval and Refinement

Once you select a direction:
- Detailed technical drawings are created
- Material samples are shared
- Final specifications are confirmed
- Production timeline is established

## The Making

This is where patience becomes part of the process:
- Clay is prepared and applied in layers
- Patterns are hand-carved with precision
- Mirrors are individually cut and placed
- Multiple drying and finishing stages occur

Each step requires time and cannot be rushed without compromising quality.

## Quality Assurance

Before delivery:
- Thorough inspection for perfection
- Professional photography for your records
- Careful packaging for protection
- Certificate of authenticity prepared

## Installation and Beyond

For larger pieces:
- Professional installation is included
- Care instructions are provided in detail
- Annual maintenance options are available

The relationship doesn't end at delivery. We remain available for any questions or future needs.

## Investment and Value

Bespoke pieces command premium pricing because:
- Designs are exclusive to you
- Materials are selected for your specific piece
- Hundreds of hours of skilled labor are involved
- The piece is documented and certified

You're not just buying art—you're commissioning legacy.
    `,
    author: 'Tuktuk Atelier',
    date: '2024-02-20',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200&q=80',
    tags: ['Commissions', 'Process', 'Guide'],
    featured: true,
  },
  {
    id: '4',
    slug: 'care-and-preservation',
    title: 'Care and Preservation of Lippan Art',
    excerpt: 'Practical guidance for maintaining the beauty and integrity of your artisan pieces for generations.',
    content: `
# Care and Preservation of Lippan Art

Proper care ensures your Lippan art remains beautiful for generations.

## Daily Maintenance

**Dusting**: Use a soft, dry microfiber cloth or natural bristle brush. Gentle circular motions prevent mirror scratching.

**Handling**: Always support larger pieces from underneath when moving. Avoid pressure on the clay work itself.

## Environmental Considerations

**Humidity**: Maintain 40-60% relative humidity. Excessive dryness can cause clay cracking; too much moisture can weaken the structure.

**Temperature**: Avoid placement near heating vents, fireplaces, or air conditioning units. Stable temperatures preserve material integrity.

**Light**: Some UV exposure causes natural patina development, which many collectors appreciate. However, avoid intense direct sunlight for extended periods.

## Deep Cleaning

**Annual Professional Care**: For valuable pieces, consider professional conservation services. They can address accumulated grime without risk.

**DIY Approach**: If doing it yourself:
- Use barely damp (not wet) cloth for clay areas
- Clean mirrors with standard glass cleaner on a cloth (never spray directly)
- Work in sections
- Allow complete drying before completion

## Addressing Minor Issues

**Loose Mirrors**: Contact us. These should be professionally reattached using appropriate adhesives.

**Surface Scratches on Clay**: Minor abrasions add character. Deep damage requires professional attention.

**Discoloration**: Natural aging is expected and valued. However, sudden changes may indicate environmental issues.

## Long-term Preservation

**Documentation**: Keep your certificate of authenticity and purchase records. These add to provenance and value.

**Insurance**: Consider adding significant pieces to your fine art insurance policy.

**Photography**: Document your piece annually. This tracks condition and provides insurance records.

## When to Seek Professional Help

Contact us or a qualified conservator if you notice:
- Multiple mirrors becoming loose
- Visible clay cracking or flaking
- Significant color changes
- Any structural concerns

Remember: These pieces are designed to last generations. With minimal care, they age beautifully, developing character that enhances their value and story.
    `,
    author: 'Tuktuk Atelier',
    date: '2024-03-05',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80',
    tags: ['Care', 'Maintenance', 'Education'],
    featured: false,
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((p) => p.slug === slug);
};

export const getFeaturedBlogPosts = (): BlogPost[] => {
  return blogPosts.filter((p) => p.featured);
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter((p) => p.tags.includes(tag));
};
