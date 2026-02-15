'use client';

import { useState } from 'react';
import { MessageCircle, Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function ConciergeButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        className="fixed bottom-8 right-8 z-40"
      >
        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-28 right-8 z-40 w-80 bg-card border border-border rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-6">
              <h3 className="font-serif text-xl font-semibold mb-2">
                Concierge Service
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                How may we assist you today?
              </p>

              <div className="space-y-3">
                <a
                  href="https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20Tuktuk%20Atelier%20pieces"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-accent hover:bg-accent/5 transition-all group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <MessageCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">WhatsApp</p>
                    <p className="text-xs text-muted-foreground">
                      Instant response
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:hello@tuktukatelier.com?subject=Enquiry from Website"
                  className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-accent hover:bg-accent/5 transition-all group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-xs text-muted-foreground">
                      hello@tuktukatelier.com
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  Available Mon-Sat, 10 AM - 6 PM IST
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
