import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { blogPosts, blogCategories, type BlogCategory } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Všetky články");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts =
    activeCategory === "Všetky články"
      ? blogPosts
      : blogPosts.filter(
          (p) =>
            p.category === activeCategory ||
            p.categories?.includes(activeCategory as BlogCategory)
        );

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <>
      <Helmet>
        <title>Blog & Tipy | Mobilný Bar & Nápojový Catering Slovensko | Sip & Sparkle</title>
        <meta
          name="description"
          content="Rady, inšpirácia a tipy zo sveta nápojového cateringu na Slovensku. Mobilný bar na svadbu, firemné eventy, koktaily, víno a pivo."
        />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />

        {/* Hero */}
        <section className="relative py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in">
              Blog & Tipy pre Vaše Eventy
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up">
              Inšpirácia, rady a trendy zo sveta nápojového cateringu na Slovensku
            </p>
          </div>
        </section>

        {/* Category Filters */}
        <div className="border-b border-border bg-background sticky top-0 z-20">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
              {["Všetky články", ...blogCategories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-accent text-accent-foreground shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            {featuredPost && (
              <div className="mb-12">
                <BlogCard post={featuredPost} featured />
              </div>
            )}

            {gridPosts.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gridPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            )}

            {filteredPosts.length === 0 && (
              <p className="text-center text-muted-foreground py-20">
                V tejto kategórii zatiaľ nemáme žiadne články.
              </p>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
