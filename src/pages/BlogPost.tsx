import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Clock, ChevronRight } from "lucide-react";
import { blogPosts, ctaTexts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const formattedDate = new Date(post.date).toLocaleDateString("sk-SK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const ctaText = ctaTexts[post.slug] || "Kontaktovať nás";

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />

        {/* Article Header */}
        <section className="pt-28 pb-12 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors">
                Domov
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground line-clamp-1">{post.cardTitle}</span>
            </nav>

            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.h1}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span>Tím Sip & Sparkle Events</span>
              <span>•</span>
              <span>{formattedDate}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="pb-16 bg-background">
          <div
            className="container mx-auto px-4 max-w-3xl prose prose-lg prose-headings:font-bold prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-[1.7] prose-p:mb-4 prose-li:text-muted-foreground prose-strong:text-foreground prose-ul:mb-6 prose-ol:mb-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article CTA */}
          <div className="container mx-auto px-4 max-w-3xl mt-12">
            <Link to="/#contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                {ctaText}
              </Button>
            </Link>
          </div>
        </article>

        {/* End CTA Banner */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Pripravíme pre vás nezáväznú ponuku do 24 hodín
            </h2>
            <Link to="/#contact">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 shadow-lg"
              >
                Kontaktovať nás
              </Button>
            </Link>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                Ďalšie články
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
