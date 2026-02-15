import Link from 'next/link';
import { Instagram, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const navigation = {
  shop: [
    { name: 'All Pieces', href: '/shop' },
    { name: 'Collections', href: '/collections' },
    { name: 'Featured', href: '/shop?filter=featured' },
  ],
  about: [
    { name: 'The Atelier', href: '/atelier' },
    { name: 'Our Craft', href: '/atelier#craft' },
    { name: 'Open Source', href: '/open-source' },
  ],
  support: [
    { name: 'Commissions', href: '/commissions' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold">
                Tuktuk Atelier
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The Art of Little Things
              </p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
              Handcrafted Lippan art—wall panels, home decor, and bespoke pieces
              for discerning collectors and luxury spaces.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@tuktukatelier.com"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold">Shop</h3>
              <ul className="mt-6 space-y-4">
                {navigation.shop.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">About</h3>
              <ul className="mt-6 space-y-4">
                {navigation.about.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Support</h3>
              <ul className="mt-6 space-y-4">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold mb-4">
                Subscribe to our newsletter
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Receive updates on new collections, exhibitions, and craft
                stories.
              </p>
              <form className="flex gap-2 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button type="submit" variant="default">
                  Subscribe
                </Button>
              </form>
            </div>

            <div className="flex items-end justify-start lg:justify-end">
              <div className="text-sm text-muted-foreground">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Crafted with care in India</span>
                </div>
                <p className="text-xs">
                  Ships worldwide • Certificate of Authenticity included
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Tuktuk Atelier. All rights
            reserved. Each piece is handmade and unique.
          </p>
        </div>
      </div>
    </footer>
  );
}
