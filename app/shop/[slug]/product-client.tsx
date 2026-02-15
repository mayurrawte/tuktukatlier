'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import type { Product } from '@/data/products';

export function ProductGallery({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-2xl bg-muted">
        <Image
          src={product.images[selectedImage]}
          alt={product.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      {product.images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                selectedImage === index
                  ? 'border-accent'
                  : 'border-transparent hover:border-border'
              }`}
            >
              <Image
                src={image}
                alt={`${product.name} view ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function EnquiryButton({ product, available }: { product: Product; available: boolean }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const handleEnquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Enquiry sent! We will contact you within 24 hours.');
    setEnquiryOpen(false);
  };

  return (
    <Dialog open={enquiryOpen} onOpenChange={setEnquiryOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full rounded-full" disabled={!available}>
          {available ? 'Enquire to Purchase' : 'Notify When Available'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">
            Enquire About {product.name}
          </DialogTitle>
          <DialogDescription>
            We'll respond within 24 hours with availability and shipping details.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleEnquiry} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" />
          </div>
          <div>
            <Label htmlFor="location">City/Country</Label>
            <Input id="location" required />
          </div>
          <div>
            <Label htmlFor="message">Message (optional)</Label>
            <Textarea id="message" rows={3} />
          </div>
          <Button type="submit" className="w-full">
            Send Enquiry
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
