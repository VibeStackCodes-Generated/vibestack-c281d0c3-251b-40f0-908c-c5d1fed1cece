import { motion } from "framer-motion";
import { MapPin, Camera, Pen, Plane, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NewsletterSignup from "@/components/NewsletterSignup";
import PostCard from "@/components/PostCard";
import { usePostStore } from "@/hooks/usePostStore";

const timeline = [
  { year: "2016", title: "First Solo Trip", description: "Backpacked through Southeast Asia for 3 months. Fell in love with the world." },
  { year: "2018", title: "Started the Blog", description: "Launched Wanderlust Chronicles from a café in Lisbon with nothing but a laptop and a dream." },
  { year: "2020", title: "Published First Book", description: "'Slow Roads' — a collection of essays about overland travel through Central Asia." },
  { year: "2022", title: "National Geographic Feature", description: "My photo essay on Patagonia was featured in Nat Geo Traveler magazine." },
  { year: "2025", title: "47 Countries & Counting", description: "Still exploring, still writing, still chasing the next horizon." },
];

export default function About() {
  const { posts } = usePostStore();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20"
      >
        <div className="order-2 md:order-1">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">About Me</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Hi, I'm Elena.
            <br />
            <span className="text-primary">I write about the world.</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm a travel writer, photographer, and eternal wanderer based in Barcelona. Over the past decade, I've visited 47 countries across 6 continents, always searching for the stories that guidebooks miss.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Wanderlust Chronicles is my love letter to slow travel — the kind where you get lost in medinas, share meals with strangers, and let the road surprise you. I believe the best trips aren't planned; they're discovered.
          </p>
          <div className="flex gap-3">
            <Button variant="outline" size="icon">
              <Instagram className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative">
            <img
              src="https://img.vibestack.site/s/woman%20traveler%20mountain%20landscape/600/700"
              alt="Elena Vasquez traveling"
              loading="eager"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg">
              <p className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>47</p>
              <p className="text-xs opacity-80">Countries</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* What I Do */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ fontFamily: 'var(--font-serif)' }}>
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Pen,
              title: "Travel Writing",
              description: "Long-form stories that transport you to far-flung destinations. Published in Nat Geo, Lonely Planet, and Condé Nast Traveler.",
            },
            {
              icon: Camera,
              title: "Photography",
              description: "Capturing the light, colors, and moments that make each destination unique. Available for editorial and commercial assignments.",
            },
            {
              icon: Plane,
              title: "Travel Consulting",
              description: "Custom itinerary planning for travelers who want authentic, off-the-beaten-path experiences. From weekend getaways to year-long sabbaticals.",
            },
          ].map((service) => (
            <Card key={service.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ fontFamily: 'var(--font-serif)' }}>
          My Journey
        </h2>
        <div className="max-w-2xl mx-auto">
          {timeline.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {event.year.slice(2)}
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-px h-full bg-border mt-2" />
                )}
              </div>
              <div className="pb-8">
                <p className="text-xs text-primary font-medium uppercase tracking-wider">{event.year}</p>
                <h3 className="font-bold text-lg" style={{ fontFamily: 'var(--font-serif)' }}>{event.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Favorite Posts */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ fontFamily: 'var(--font-serif)' }}>
          Reader Favorites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </div>
  );
}