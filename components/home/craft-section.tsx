'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Hand, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CraftSection() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              The Craft
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Lippan art is a centuries-old tradition from Gujarat, India, where
              artisans transform humble materials into luminous masterpieces.
              Each piece begins with hand-mixed clay, applied in careful layers,
              then carved with intricate patterns that echo ancient architectural
              motifs.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Mirrors are precision-cut and hand-placed into the clay, creating
              surfaces that capture and reflect light in ever-changing patterns.
              The result is not merely decoration, but a meditation on the
              interplay between matter and illumination.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <Hand className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-medium mb-1">Handcrafted</h3>
                <p className="text-sm text-muted-foreground">
                  Every detail shaped by skilled hands
                </p>
              </div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-medium mb-1">Authentic</h3>
                <p className="text-sm text-muted-foreground">
                  Traditional methods, contemporary vision
                </p>
              </div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-medium mb-1">Certified</h3>
                <p className="text-sm text-muted-foreground">
                  Numbered editions with authenticity
                </p>
              </div>
            </div>

            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/atelier">Discover Our Story</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200&q=80"
                alt="Artisan crafting Lippan art"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
