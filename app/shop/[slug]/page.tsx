import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProductBySlug, products } from '@/data/products';
import { getCollectionBySlug } from '@/data/collections';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  ArrowLeft,
  Check,
  Package,
  Shield,
  Truck,
  MessageCircle,
  Mail,
} from 'lucide-react';
import { ProductGallery, EnquiryButton } from './product-client';

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const collection = getCollectionBySlug(product.collection);
  const relatedProducts = products
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, 3);

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
          <Link href="/shop">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div>
            <ProductGallery product={product} />
          </div>

          <div className="space-y-6">
            <div>
              {collection && (
                <Link
                  href={`/collections/${collection.slug}`}
                  className="text-sm text-accent hover:underline"
                >
                  {collection.name}
                </Link>
              )}
              <h1 className="font-serif text-4xl md:text-5xl font-medium mt-2 mb-3">
                {product.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                {product.tagline}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-medium">
                  {formatPrice(product.price)}
                </span>
                <Badge variant="secondary">
                  Edition {product.edition.current}/{product.edition.total}
                </Badge>
                {!product.available && (
                  <Badge variant="outline">Sold Out</Badge>
                )}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-medium">Key Details</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Dimensions</dt>
                  <dd className="font-medium">
                    {product.dimensions.width} × {product.dimensions.height} ×{' '}
                    {product.dimensions.depth} {product.dimensions.unit}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Weight</dt>
                  <dd className="font-medium">
                    {product.weight.value} {product.weight.unit}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Shipping Timeline</dt>
                  <dd className="font-medium">{product.shippingTimeline}</dd>
                </div>
              </dl>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-medium">Materials</h3>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((material) => (
                  <Badge key={material} variant="outline">
                    {material}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-medium">Care Instructions</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {product.care.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div className="space-y-4">
              <EnquiryButton product={product} available={product.available} />

              <div className="grid grid-cols-2 gap-3">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  <a href="mailto:hello@tuktukatelier.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="flex flex-col items-center text-center">
                <Shield className="h-8 w-8 text-accent mb-2" />
                <p className="text-sm font-medium">Authenticity</p>
                <p className="text-xs text-muted-foreground">
                  Certificate included
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Package className="h-8 w-8 text-accent mb-2" />
                <p className="text-sm font-medium">Gallery Packaging</p>
                <p className="text-xs text-muted-foreground">Museum quality</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Truck className="h-8 w-8 text-accent mb-2" />
                <p className="text-sm font-medium">Worldwide Shipping</p>
                <p className="text-xs text-muted-foreground">Fully insured</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24 p-8 bg-accent/5 border border-accent/20 rounded-2xl">
          <h3 className="font-serif text-2xl font-medium mb-4 text-center">
            Commission a Similar Piece
          </h3>
          <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
            Love this style but need different dimensions, colors, or motifs? We
            create bespoke commissions tailored to your space and vision.
          </p>
          <div className="text-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/commissions">Explore Bespoke Options</Link>
            </Button>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-serif text-3xl font-medium mb-8 text-center">
              From the Same Collection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/shop/${relatedProduct.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-2xl bg-muted">
                    <Image
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-medium group-hover:text-accent transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    {formatPrice(relatedProduct.price)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
