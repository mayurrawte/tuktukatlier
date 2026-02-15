'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { collections } from '@/data/collections';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MessageCircle } from 'lucide-react';

export default function ShopPage() {
  const [selectedCollection, setSelectedCollection] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [availabilityFilter, setAvailabilityFilter] = useState<string>('all');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCollection !== 'all') {
      filtered = filtered.filter((p) => p.collection === selectedCollection);
    }

    if (availabilityFilter === 'available') {
      filtered = filtered.filter((p) => p.available);
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'featured':
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCollection, sortBy, availabilityFilter]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

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
            Shop Limited Editions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted pieces, numbered and signed. Each comes with a
            certificate of authenticity and gallery-ready presentation.
          </p>
        </motion.div>

        <div className="mb-12 p-6 bg-accent/5 border border-accent/20 rounded-2xl">
          <div className="flex items-center justify-center gap-3 text-sm">
            <MessageCircle className="h-5 w-5 text-accent" />
            <p>
              <span className="font-medium">Custom sizing or modifications?</span>{' '}
              <Button
                asChild
                variant="link"
                className="h-auto p-0 text-accent hover:text-accent/80"
              >
                <Link href="/commissions">Request a bespoke commission</Link>
              </Button>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Select value={selectedCollection} onValueChange={setSelectedCollection}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Collection" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Collections</SelectItem>
              {collections.map((collection) => (
                <SelectItem key={collection.id} value={collection.slug}>
                  {collection.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>

          <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Items</SelectItem>
              <SelectItem value="available">Available Now</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filteredAndSortedProducts.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-lg text-muted-foreground mb-6">
              No pieces match your filters.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCollection('all');
                setAvailabilityFilter('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={`/shop/${product.slug}`} className="group block">
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-2xl bg-muted">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
                      {product.featured && (
                        <Badge variant="secondary" className="backdrop-blur-sm">
                          Featured
                        </Badge>
                      )}
                      <Badge variant="secondary" className="backdrop-blur-sm ml-auto">
                        {product.edition.current}/{product.edition.total}
                      </Badge>
                    </div>
                    {!product.available && (
                      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                        <Badge variant="outline" className="text-lg px-6 py-2">
                          Sold Out
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-medium group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.tagline}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-lg font-medium">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {product.shippingTimeline}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
