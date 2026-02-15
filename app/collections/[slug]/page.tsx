import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getCollectionBySlug, collections } from '@/data/collections';
import { getProductsByCollection } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}

export default function CollectionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const collection = getCollectionBySlug(params.slug);
  const products = getProductsByCollection(params.slug);

  if (!collection) {
    notFound();
  }

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
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/collections">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Collections
          </Link>
        </Button>

        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-medium mb-4">
                {collection.name}
              </h1>
              <p className="text-2xl text-muted-foreground mb-6">
                {collection.tagline}
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {collection.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {collection.motifs.map((motif) => (
                  <Badge key={motif} variant="secondary">
                    {motif}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-medium mb-6 text-center">
              The Story
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {collection.story}
            </p>
            <div className="mt-8 p-6 bg-muted/50 rounded-2xl">
              <p className="text-sm font-medium mb-2">Mood & Character</p>
              <p className="text-muted-foreground italic">{collection.mood}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-3xl font-medium mb-8 text-center">
            Pieces in this Collection
          </h2>
          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-6">
                No pieces available in this collection yet.
              </p>
              <Button asChild variant="outline">
                <Link href="/commissions">Commission a Custom Piece</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id}>
                  <Link href={`/shop/${product.slug}`} className="group block">
                    <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-2xl bg-muted">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="backdrop-blur-sm">
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
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-24 p-12 bg-accent/5 border border-accent/20 rounded-3xl text-center">
          <h3 className="font-serif text-3xl font-medium mb-4">
            Commission from this Collection
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Love the aesthetic of {collection.name}? We can create a bespoke
            piece tailored to your space, incorporating the motifs and mood of
            this collection while meeting your specific requirements.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/commissions">Start Your Commission</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
