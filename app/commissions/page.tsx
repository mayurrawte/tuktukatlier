'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import {
  MessageSquare,
  Palette,
  CheckCircle2,
  Hammer,
  Package,
  Lightbulb,
  Ruler,
  Sparkles,
} from 'lucide-react';
import { toast } from 'sonner';

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description:
      'We discuss your vision, space, preferences, and budget in detail.',
  },
  {
    icon: Lightbulb,
    title: 'Concept',
    description:
      'Our artisans create sketches and mood boards for your approval.',
  },
  {
    icon: CheckCircle2,
    title: 'Approval',
    description:
      'Refine the design until it perfectly matches your expectations.',
  },
  {
    icon: Hammer,
    title: 'Creation',
    description:
      'Skilled hands bring your vision to life over several weeks.',
  },
  {
    icon: Package,
    title: 'Delivery',
    description:
      'Your piece arrives with installation support and certification.',
  },
];

export default function CommissionsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    projectType: '',
    budget: '',
    timeline: '',
    wallSize: '',
    colorPreference: '',
    motifPreference: [] as string[],
    inspiration: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      'Commission request received! We will contact you within 48 hours.'
    );
  };

  const toggleMotif = (motif: string) => {
    setFormData((prev) => ({
      ...prev,
      motifPreference: prev.motifPreference.includes(motif)
        ? prev.motifPreference.filter((m) => m !== motif)
        : [...prev.motifPreference, motif],
    }));
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
            Bespoke Commissions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your vision into a one-of-a-kind masterpiece. Each
            commission is a collaboration between your imagination and our
            artisan expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200&q=80"
                alt="Bespoke commission process"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-medium mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Personalized design process with direct artisan access</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Unlimited revisions during concept phase</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Progress updates with photos throughout creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Certificate of authenticity and care guide</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Installation support for larger pieces</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 mb-8">
              <h3 className="font-serif text-2xl font-medium mb-4">
                Investment & Timeline
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="font-medium mb-2">Starting Investment</p>
                  <p className="text-2xl text-accent mb-1">₹75,000</p>
                  <p className="text-sm text-muted-foreground">
                    Price varies based on size, complexity, and materials
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-2">Lead Time</p>
                  <p className="text-2xl text-accent mb-1">8-16 weeks</p>
                  <p className="text-sm text-muted-foreground">
                    From concept approval to delivery
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-2">Deposit</p>
                  <p className="text-2xl text-accent mb-1">40%</p>
                  <p className="text-sm text-muted-foreground">
                    Secures your project timeline
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-medium mb-4">
                Commission Options
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Ruler className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-sm">Custom Size</p>
                    <p className="text-xs text-muted-foreground">
                      Any dimensions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Palette className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-sm">Color Palette</p>
                    <p className="text-xs text-muted-foreground">
                      Match your space
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-sm">Mirror Density</p>
                    <p className="text-xs text-muted-foreground">
                      Subtle to dramatic
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-sm">Motif Style</p>
                    <p className="text-xs text-muted-foreground">
                      Personal symbols
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="font-serif text-4xl font-medium mb-4 text-center">
            The Process
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            From first conversation to final installation, we guide you through
            every step with care and transparency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="absolute top-8 left-[50%] w-full h-0.5 bg-border -z-10 hidden md:block" />
                  <h3 className="font-medium mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 className="font-serif text-3xl font-medium mb-2 text-center">
              Start Your Commission
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Share your vision with us. The more details you provide, the
              better we can serve you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="location">City / Country *</Label>
                  <Input
                    id="location"
                    required
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, projectType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="hospitality">Hospitality</SelectItem>
                      <SelectItem value="gift">Gift / Personal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="budget">Budget Range *</Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) =>
                      setFormData({ ...formData, budget: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="75-150">₹75,000 - ₹1,50,000</SelectItem>
                      <SelectItem value="150-300">₹1,50,000 - ₹3,00,000</SelectItem>
                      <SelectItem value="300-500">₹3,00,000 - ₹5,00,000</SelectItem>
                      <SelectItem value="500+">₹5,00,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="timeline">Timeline Preference</Label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) =>
                      setFormData({ ...formData, timeline: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flexible">Flexible</SelectItem>
                      <SelectItem value="8-12">8-12 weeks</SelectItem>
                      <SelectItem value="12-16">12-16 weeks</SelectItem>
                      <SelectItem value="urgent">Urgent (discuss)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="wallSize">Wall Dimensions</Label>
                  <Input
                    id="wallSize"
                    placeholder="e.g., 120cm x 180cm"
                    value={formData.wallSize}
                    onChange={(e) =>
                      setFormData({ ...formData, wallSize: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="colorPreference">Color Preference</Label>
                <Input
                  id="colorPreference"
                  placeholder="e.g., Warm earth tones, metallics, neutral"
                  value={formData.colorPreference}
                  onChange={(e) =>
                    setFormData({ ...formData, colorPreference: e.target.value })
                  }
                />
              </div>

              <div>
                <Label className="mb-3 block">Motif Preferences (select any)</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Geometric',
                    'Floral',
                    'Mandala',
                    'Abstract',
                    'Architectural',
                    'Nature-inspired',
                  ].map((motif) => (
                    <div key={motif} className="flex items-center space-x-2">
                      <Checkbox
                        id={motif}
                        checked={formData.motifPreference.includes(motif)}
                        onCheckedChange={() => toggleMotif(motif)}
                      />
                      <label
                        htmlFor={motif}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {motif}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="inspiration">Inspiration / Reference Links</Label>
                <Input
                  id="inspiration"
                  placeholder="Pinterest, Instagram, or other links"
                  value={formData.inspiration}
                  onChange={(e) =>
                    setFormData({ ...formData, inspiration: e.target.value })
                  }
                />
              </div>

              <div>
                <Label htmlFor="message">Tell Us About Your Vision *</Label>
                <Textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Describe your space, the mood you want to create, any specific elements you'd like incorporated..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full">
                Submit Commission Request
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We'll respond within 48 hours with next steps and preliminary
                timeline estimates.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
