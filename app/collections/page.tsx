'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { collections } from '@/data/collections';
import { getProductsByCollection } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export default function CollectionsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-medium mb-4">
            Collections
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each collection explores a distinct theme through the language of
            clay and mirror, creating visual narratives that transform spaces.
          </p>
        </motion.div>

        <div className="space-y-24">
          {collections.map((collection, index) => {
            const pieces = getProductsByCollection(collection.slug);
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <h2 className="font-serif text-4xl font-medium mb-3">
                    {collection.name}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-6">
                    {collection.tagline}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {collection.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-sm font-medium mb-2">Mood</p>
                    <p className="text-sm text-muted-foreground">
                      {collection.mood}
                    </p>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm font-medium mb-3">Key Motifs</p>
                    <div className="flex flex-wrap gap-2">
                      {collection.motifs.map((motif) => (
                        <span
                          key={motif}
                          className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
                        >
                          {motif}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Link
                      href={`/collections/${collection.slug}`}
                      className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                    >
                      <span>Explore {pieces.length} Pieces</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
