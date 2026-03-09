import { Clock } from "lucide-react";
import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString("sk-SK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (featured) {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-card"
      >
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-full overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.cardTitle}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              style={post.coverImageRotation ? { transform: post.coverImageRotation } : undefined}
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground w-fit mb-4">
              {post.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {post.cardTitle}
            </h2>
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {post.cardExcerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span>{formattedDate}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>
            <span className="text-primary font-semibold group-hover:underline">
              Čítať viac →
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-card hover:scale-[1.02]"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.cardTitle}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground">
          {post.category}
        </span>
      </div>
      <div className="p-6">
        <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.cardTitle}
        </h2>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {post.cardExcerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readingTime}
          </span>
          <span className="text-primary font-semibold group-hover:underline">
            Čítať viac →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
