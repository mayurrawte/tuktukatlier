'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DesignerCTA() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/10 via-accent/5 to-background border border-accent/20 p-12 lg:p-16"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-0" />

          <div className="relative z-10 max-w-3xl">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Trade & Collaborations
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We partner with interior designers, architects, and luxury
              hospitality brands to create bespoke installations that define
              spaces. From boutique hotels to private residences, our pieces
              become integral to the story you're telling.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">For Designers & Architects</h3>
                  <p className="text-sm text-muted-foreground">
                    Trade pricing, project consultation, custom sizing
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">For Hospitality</h3>
                  <p className="text-sm text-muted-foreground">
                    Large-scale installations, exclusive collections
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/commissions">View Commission Process</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
