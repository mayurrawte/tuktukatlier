'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Leaf, Award, Users, ArrowRight } from 'lucide-react';

export default function AtelierPage() {
  const values = [
    {
      icon: Heart,
      title: 'Handmade with Intent',
      description:
        'Every piece is touched by human hands at every stage. No machines, no shortcuts—just skill, patience, and care.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Practice',
      description:
        'We use locally sourced clay, natural pigments, and traditional methods that respect both craft and environment.',
    },
    {
      icon: Award,
      title: 'Uncompromising Quality',
      description:
        "Each work undergoes rigorous inspection. If it doesn't meet our standards, it doesn't leave our workshop.",
    },
    {
      icon: Users,
      title: 'Fair Collaboration',
      description:
        'We partner with artisan communities, ensuring fair wages and preserving traditional skills for future generations.',
    },
  ];

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
            The Atelier
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where centuries-old tradition meets contemporary vision. This is our
            story of craft, commitment, and the pursuit of beauty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200&q=80"
                alt="Artisan at work"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl font-medium">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tuktuk Atelier was born from a simple observation: the little
              things matter most. In an age of mass production and instant
              gratification, we believed there was still space for patience,
              skill, and the quiet beauty of handmade objects.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our journey began in the workshops of Gujarat, where we learned
              the ancient art of Lippan from master craftspeople whose
              knowledge spans generations. We saw in this traditional technique
              something that transcended cultural boundaries—a universal
              language of light, texture, and human touch.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we bridge worlds. Our pieces honor the heritage of Lippan
              art while speaking to contemporary sensibilities. Each work we
              create carries within it the accumulated wisdom of tradition and
              the fresh perspective of modern design thinking.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="craft"
          className="mb-24"
        >
          <h2 className="font-serif text-4xl font-medium mb-12 text-center">
            Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-medium mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:order-2"
          >
            <h2 className="font-serif text-4xl font-medium">The Craft</h2>
            <p className="text-muted-foreground leading-relaxed">
              Lippan art is a centuries-old technique from the Kutch region of
              Gujarat. Traditionally used to decorate the homes of pastoral
              communities, it combines mud work with mirror embellishment to
              create surfaces that transform light into living patterns.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Clay Preparation</h3>
                <p className="text-sm text-muted-foreground">
                  We begin with carefully sourced clay, mixed with natural
                  binders to achieve the perfect consistency. This base layer is
                  applied and allowed to cure slowly.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Pattern Carving</h3>
                <p className="text-sm text-muted-foreground">
                  Once the clay reaches the ideal firmness, artisans carve
                  intricate patterns by hand. This requires years of practice to
                  achieve the precision and flow we demand.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Mirror Placement</h3>
                <p className="text-muted-foreground text-sm">
                  Mirrors are individually cut and positioned with meticulous
                  care. The placement determines how the piece will interact with
                  light—a calculation that combines mathematics and intuition.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Finishing</h3>
                <p className="text-sm text-muted-foreground">
                  Final touches include sealing, quality inspection, and
                  documentation. Each piece is photographed and cataloged before
                  certification.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1579762715459-5a068c289fda?w=1200&q=80"
                alt="Detail of Lippan art"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 p-12 bg-muted/30 rounded-3xl"
        >
          <h2 className="font-serif text-4xl font-medium mb-6 text-center">
            Authenticity & Quality
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            Every piece that leaves our atelier is a genuine work of art,
            created by skilled hands using traditional methods. We guarantee
            authenticity and quality through rigorous standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif font-medium text-accent mb-2">
                100%
              </div>
              <p className="text-sm text-muted-foreground">
                Handmade, no machines or mass production
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-medium text-accent mb-2">
                Limited
              </div>
              <p className="text-sm text-muted-foreground">
                Each design produced in small numbered editions
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-medium text-accent mb-2">
                Certified
              </div>
              <p className="text-sm text-muted-foreground">
                Certificate of authenticity with every purchase
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl font-medium mb-6">
            Begin Your Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you are drawn to a specific piece or envision something
            entirely your own, we are here to guide you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/shop">
                Explore Available Pieces
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/commissions">Commission Bespoke Art</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
