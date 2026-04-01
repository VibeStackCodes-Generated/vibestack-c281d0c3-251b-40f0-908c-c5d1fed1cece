import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Share2, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { getPostById, posts } from "@/data/posts";
import PostCard from "@/components/PostCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { useState } from "react";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = getPostById(id || "");
  const [liked, setLiked] = useState(false);

  if (!post) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Post Not Found</h1>
        <p className="text-muted-foreground mb-6">The story you're looking for doesn't exist.</p>
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    );
  }

  const relatedPosts = posts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2);
  const otherPosts = relatedPosts.length < 2
    ? [...relatedPosts, ...posts.filter((p) => p.id !== post.id && !relatedPosts.includes(p)).slice(0, 2 - relatedPosts.length)]
    : relatedPosts;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  const renderContent = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, i) => {
      if (line.startsWith("## ")) {
        return (
          <h2 key={i} className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            {line.replace("## ", "")}
          </h2>
        );
      }
      if (line.startsWith("- **")) {
        const match = line.match(/- \*\*(.+?)\*\*: (.+)/);
        if (match) {
          return (
            <li key={i} className="ml-4 mb-2 text-foreground/90 leading-relaxed">
              <strong className="font-semibold">{match[1]}</strong>: {match[2]}
            </li>
          );
        }
        return <li key={i} className="ml-4 mb-2 text-foreground/90 leading-relaxed">{line.replace("- ", "")}</li>;
      }
      if (line.startsWith("- ")) {
        return <li key={i} className="ml-4 mb-2 text-foreground/90 leading-relaxed">{line.replace("- ", "")}</li>;
      }
      if (line.trim() === "") {
        return <div key={i} className="h-4" />;
      }
      return (
        <p key={i} className="text-foreground/90 leading-relaxed text-lg">
          {line}
        </p>
      );
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Image */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
        <img
          src={post.coverImage}
          alt={post.title}
          loading="eager"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate(-1)}
            className="gap-2 bg-white/90 hover:bg-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-16 relative z-10">
        <div className="bg-background rounded-2xl shadow-lg p-6 md:p-10">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge className="bg-primary text-primary-foreground">{post.category}</Badge>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                loading="lazy"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-sm">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">Travel Writer & Photographer</p>
              </div>
            </div>
            <Separator orientation="vertical" className="h-8 hidden sm:block" />
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {post.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {format(new Date(post.date), "MMMM d, yyyy")}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Article Body */}
          <div className="prose-custom space-y-1">
            {renderContent(post.content)}
          </div>

          {/* Actions */}
          <Separator className="my-8" />
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button
                variant={liked ? "default" : "outline"}
                size="sm"
                className="gap-2"
                onClick={() => {
                  setLiked(!liked);
                  toast.success(liked ? "Removed from favorites" : "Added to favorites!");
                }}
              >
                <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
                {liked ? "Liked" : "Like"}
              </Button>
              <Button variant="outline" size="sm" className="gap-2" onClick={handleShare}>
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {otherPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              More Stories You'll Love
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </section>
        )}

        {/* Newsletter */}
        <section className="mt-16">
          <NewsletterSignup />
        </section>
      </div>
    </motion.article>
  );
}
