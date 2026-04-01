import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import type { BlogPost } from "@/data/posts";

interface PostCardProps {
  post: BlogPost;
  variant?: "default" | "compact";
}

export default function PostCard({ post, variant = "default" }: PostCardProps) {
  if (variant === "compact") {
    return (
      <Link to={`/post/${post.id}`} className="group">
        <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex gap-4 p-4">
            <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={`https://img.vibestack.site/s/${encodeURIComponent(post.coverQuery)}/400/400`}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <Badge variant="secondary" className="w-fit text-xs mb-1">{post.category}</Badge>
              <h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {format(new Date(post.date), "MMM d, yyyy")}
              </p>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/post/${post.id}`} className="group">
      <Card className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
        <div className="aspect-[3/2] overflow-hidden">
          <img
            src={`https://img.vibestack.site/s/${encodeURIComponent(post.coverQuery)}/600/400`}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="text-xs">{post.category}</Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {post.location}
            </span>
          </div>
          <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {format(new Date(post.date), "MMM d, yyyy")}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
