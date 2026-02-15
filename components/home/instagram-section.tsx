'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const instagramImages = [
  'https://images.unsplash.com/photo-1579762715459-5a068c289fda?w=600&q=80',
  'https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=600&q=80',
  'https://images.unsplash.com/photo-1576158113928-4c240eaaf360?w=600&q=80',
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80',
  'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&q=80',
  'https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=600&q=80',
];

export function InstagramSection() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-accent" />
            <h2 className="font-serif text-4xl md:text-5xl font-medium">
              @tuktukatelier
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Follow our journey through the workshop, exhibitions, and the homes
            of our collectors.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full"
          >
            <a
              href="https://instagram.com/tuktukatelier"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on Instagram
            </a>
          </Button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={image}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
