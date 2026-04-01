import { motion } from "framer-motion";
import { posts, getFeaturedPosts } from "@/data/posts";
import HeroPost from "@/components/HeroPost";
import PostCard from "@/components/PostCard";
import NewsletterSignup from "@/components/NewsletterSignup";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Index() {
  const featured = getFeaturedPosts();
  const recentPosts = posts.filter((p) => !p.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero */}
      {featured[0] && <HeroPost post={featured[0]} />}

      {/* Recent Stories */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
              Recent Stories
            </h2>
            <p className="text-muted-foreground mt-1">Fresh dispatches from around the globe</p>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {recentPosts.slice(0, 3).map((post) => (
            <motion.div key={post.id} variants={item}>
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Second Post */}
      {featured[1] && (
        <section className="mt-16">
          <HeroPost post={featured[1]} />
        </section>
      )}

      {/* More Stories */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
          More Adventures
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {recentPosts.slice(3).map((post) => (
            <motion.div key={post.id} variants={item}>
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Newsletter */}
      <section className="mt-16">
        <NewsletterSignup />
      </section>
    </div>
  );
}
