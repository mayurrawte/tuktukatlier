export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  project?: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Priya Malhotra',
    role: 'Interior Designer',
    location: 'Mumbai, India',
    content: 'Working with Tuktuk Atelier transformed our hotel lobby project. The bespoke commission process was seamless, and the final piece became the soul of the space. Our clients are mesmerized every time they enter.',
    rating: 5,
    project: 'The Oberoi Suites Lobby Installation',
  },
  {
    id: '2',
    author: 'David Richardson',
    role: 'Art Collector',
    location: 'San Francisco, USA',
    content: 'I have collected art for over two decades, and the Heritage Mandala is among my most prized possessions. The craftsmanship is museum-quality, and it brings a sense of calm sophistication to our home that no other piece has achieved.',
    rating: 5,
    project: 'Heritage Mandala',
  },
  {
    id: '3',
    author: 'Sophie Laurent',
    role: 'Architect',
    location: 'Paris, France',
    content: 'The attention to detail and the respect for traditional craft while maintaining contemporary relevance is remarkable. We specified Tuktuk Atelier for three high-end residential projects, and each installation exceeded our expectations.',
    rating: 5,
    project: 'Custom Architectural Commissions',
  },
  {
    id: '4',
    author: 'Arjun Mehta',
    role: 'Boutique Hotel Owner',
    location: 'Jaipur, India',
    content: 'Our guests photograph the Tuktuk piece more than any other element in our property. It is a perfect marriage of local heritage and luxury aesthetics. The investment has paid for itself in brand recognition alone.',
    rating: 5,
    project: 'Desert Bloom Series',
  },
  {
    id: '5',
    author: 'Elena Vasquez',
    role: 'Private Client',
    location: 'Madrid, Spain',
    content: 'From consultation to delivery, every interaction felt personal and considered. The piece we commissioned tells our family story through motifs and colors that have deep meaning to us. It is not just art—it is legacy.',
    rating: 5,
    project: 'Bespoke Family Commission',
  },
  {
    id: '6',
    author: 'James Chen',
    role: 'Gallery Director',
    location: 'New York, USA',
    content: 'Tuktuk Atelier represents the future of traditional craft. Their work bridges the gap between heritage art forms and contemporary luxury in a way that feels both authentic and innovative. We are proud to represent them.',
    rating: 5,
  },
];

export const getTestimonials = (): Testimonial[] => {
  return testimonials;
};
