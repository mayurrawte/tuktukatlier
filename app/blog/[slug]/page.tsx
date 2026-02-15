import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPostBySlug, blogPosts } from '@/data/blog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock } from 'lucide-react';
import { ShareButton, ShareOutlineButton } from './blog-client';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <article className="mx-auto max-w-4xl px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="font-medium text-foreground">{post.author}</span>
            <span>•</span>
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime} min read
            </span>
            <div className="ml-auto">
              <ShareButton title={post.title} excerpt={post.excerpt} />
            </div>
          </div>

          <div className="relative aspect-[16/9] mb-12 overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>
            <div
              className="space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
            />
          </div>

          <Separator className="my-12" />

          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Written by</p>
              <p className="font-medium">{post.author}</p>
            </div>
            <ShareOutlineButton />
          </div>

          {relatedPosts.length > 0 && (
            <>
              <Separator className="my-12" />
              <div>
                <h2 className="font-serif text-3xl font-medium mb-8">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="group"
                    >
                      <div className="relative aspect-[16/10] mb-4 overflow-hidden rounded-xl bg-muted">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="font-medium mb-2 group-hover:text-accent transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </article>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 mt-16">
        <div className="p-12 bg-accent/5 border border-accent/20 rounded-3xl text-center">
          <h3 className="font-serif text-3xl font-medium mb-4">
            Discover Our Craft
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our limited edition pieces and commission bespoke art
            tailored to your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/shop">Shop Limited Editions</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/commissions">Request a Commission</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
