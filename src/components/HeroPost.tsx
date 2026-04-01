import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/posts";

export default function HeroPost({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl overflow-hidden group"
    >
      <Link to={`/post/${post.id}`}>
        <div className="aspect-[16/9] md:aspect-[21/9]">
          <img
            src={post.coverImage}
            alt={post.title}
            loading="eager"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="flex items-center gap-2 mb-3">
            <Badge className="bg-primary text-primary-foreground">{post.category}</Badge>
            <span className="text-white/80 text-sm flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {post.location}
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 max-w-3xl" style={{ fontFamily: 'var(--font-serif)' }}>
            {post.title}
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-2xl leading-relaxed mb-4 hidden sm:block">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                loading="eager"
                className="w-8 h-8 rounded-full border-2 border-white/30"
              />
              <span className="text-white text-sm font-medium">{post.author.name}</span>
            </div>
            <span className="text-white/60 text-sm flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {format(new Date(post.date), "MMM d, yyyy")}
            </span>
            <span className="text-white/60 text-sm flex items-center gap-1 hidden sm:flex">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
