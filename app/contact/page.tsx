'use client';

import { useState } from 'react';
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
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will respond within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
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
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you have questions about our pieces, want to discuss a
            commission, or explore trade partnerships—we're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
              <h2 className="font-serif text-3xl font-medium mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
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
                    <Label htmlFor="subject">Subject *</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) =>
                        setFormData({ ...formData, subject: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Enquiry</SelectItem>
                        <SelectItem value="purchase">Purchase Enquiry</SelectItem>
                        <SelectItem value="commission">
                          Bespoke Commission
                        </SelectItem>
                        <SelectItem value="trade">Trade Partnership</SelectItem>
                        <SelectItem value="press">Press Enquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    required
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-medium mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-accent/5 transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <MessageCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">
                      +91 1234567890
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:hello@tuktukatelier.com"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-accent/5 transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-sm text-muted-foreground">
                      hello@tuktukatelier.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Mon-Sat: 10 AM - 6 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
              <h3 className="font-medium mb-3">Trade Enquiries</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Interior designers, architects, and hospitality partners—we
                offer special terms and dedicated support.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                trade@tuktukatelier.com
              </Button>
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
              <h3 className="font-medium mb-3">Press Enquiries</h3>
              <p className="text-sm text-muted-foreground mb-4">
                For media requests, high-resolution images, and interview
                inquiries.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                press@tuktukatelier.com
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12 bg-muted/30 rounded-3xl"
        >
          <div className="text-center">
            <div className="text-3xl font-serif font-medium text-accent mb-2">
              24h
            </div>
            <p className="text-sm text-muted-foreground">
              Average response time
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-serif font-medium text-accent mb-2">
              100%
            </div>
            <p className="text-sm text-muted-foreground">
              Client satisfaction rate
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-serif font-medium text-accent mb-2">
              Global
            </div>
            <p className="text-sm text-muted-foreground">
              Shipping available worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
