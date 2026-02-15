'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink, Code, Heart } from 'lucide-react';

const projects = [
  {
    name: 'Artisan Commerce',
    description:
      'Open-source e-commerce platform designed specifically for artisan businesses. Built with Next.js and Supabase.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    github: 'https://github.com/tuktukatelier/artisan-commerce',
    demo: 'https://demo.artisancommerce.dev',
  },
  {
    name: 'Gallery Manager',
    description:
      'Self-hosted portfolio and gallery management system for artists and craftspeople. Features image optimization and SEO.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Sharp'],
    github: 'https://github.com/tuktukatelier/gallery-manager',
    demo: null,
  },
  {
    name: 'Craft Design System',
    description:
      'Premium UI component library focused on editorial and luxury aesthetics. Perfect for artisan and creative businesses.',
    tech: ['React', 'TypeScript', 'Radix UI', 'Tailwind'],
    github: 'https://github.com/tuktukatelier/craft-design-system',
    demo: 'https://craft-ds.dev',
  },
];

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code className="h-10 w-10 text-accent" />
            <h1 className="font-serif text-5xl md:text-6xl font-medium">
              Open Source
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe in giving back to the community that enables our work.
            These projects help other artisans and creators build beautiful
            digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl font-medium">Our Commitment</h2>
            <p className="text-muted-foreground leading-relaxed">
              Just as we honor traditional craft, we honor the open-source
              ethos. The tools and platforms we build for ourselves are shared
              freely with the maker community.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every line of code we contribute is an investment in a more
              accessible, more beautiful web—one where small businesses and
              independent creators can compete with corporate giants.
            </p>
            <div className="flex items-start gap-4 p-6 bg-accent/5 border border-accent/20 rounded-2xl">
              <Heart className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-2">Built with Purpose</p>
                <p className="text-sm text-muted-foreground">
                  These aren't side projects—they're production tools we use
                  daily in our business. Battle-tested, documented, and
                  maintained with care.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Github className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Open Contributions</p>
                    <p className="text-sm text-muted-foreground">
                      Pull requests welcome
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Code className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">MIT Licensed</p>
                    <p className="text-sm text-muted-foreground">
                      Use freely in commercial projects
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Active Maintenance</p>
                    <p className="text-sm text-muted-foreground">
                      Regular updates and support
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
            Our Projects
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Tools and libraries we've built to solve real problems in our
            business—and shared so you can benefit too.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:border-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-accent" />
                      {project.name}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex gap-2">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      {project.demo && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-12 bg-gradient-to-br from-accent/10 via-accent/5 to-background border border-accent/20 rounded-3xl text-center"
        >
          <h2 className="font-serif text-3xl font-medium mb-4">
            Partner With Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Need help building a custom solution for your artisan business? We
            offer consulting and development services that combine our craft
            expertise with technical skill.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <a
                href="https://github.com/tuktukatelier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                Follow on GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
