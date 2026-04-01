import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePostStore } from "@/hooks/usePostStore";
import PostCard from "@/components/PostCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Destinations() {
  const { posts, categories } = usePostStore();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 text-primary mb-3">
          <MapPin className="w-5 h-5" />
          <span className="text-sm font-medium uppercase tracking-wider">Explore</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Destinations
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Browse stories by region or search for your dream destination. Every journey starts with a single step.
        </p>
      </motion.div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search destinations, tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">No stories found for this search.</p>
          <Button variant="outline" className="mt-4" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
            Clear filters
          </Button>
        </div>
      ) : (
        <motion.div
          key={activeCategory + searchQuery}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPosts.map((post) => (
            <motion.div key={post.id} variants={item}>
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { label: "Countries Visited", value: "47" },
          { label: "Stories Written", value: "128" },
          { label: "Photos Taken", value: "12K+" },
          { label: "Miles Traveled", value: "250K" },
        ].map((stat) => (
          <div key={stat.label} className="text-center p-6 rounded-xl bg-card shadow-sm">
            <p className="text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}