import { HeroSection } from '@/components/home/hero-section';
import { FeaturedCollections } from '@/components/home/featured-collections';
import { FeaturedProducts } from '@/components/home/featured-products';
import { CraftSection } from '@/components/home/craft-section';
import { DesignerCTA } from '@/components/home/designer-cta';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { InstagramSection } from '@/components/home/instagram-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCollections />
      <FeaturedProducts />
      <CraftSection />
      <DesignerCTA />
      <TestimonialsSection />
      <InstagramSection />
    </>
  );
}
