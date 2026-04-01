import { Globe, Instagram, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-lg font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
                Wanderlust Chronicles
              </span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Stories from the road, written with love and wanderlust. Exploring the world one destination at a time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/destinations" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Destinations</Link>
              <Link to="/about" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">About</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm opacity-70 mt-4">elena@wanderlustchronicles.com</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Wanderlust Chronicles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
