import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Destinations", path: "/destinations" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Globe className="w-6 h-6 text-primary transition-transform group-hover:rotate-12" />
            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Wanderlust Chronicles
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={location.pathname === link.path ? "default" : "ghost"}
                  size="sm"
                  className="text-sm font-medium"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link to="/new">
              <Button
                variant={location.pathname === "/new" ? "default" : "outline"}
                size="sm"
                className="text-sm font-medium gap-1.5 ml-2"
              >
                <PenLine className="w-3.5 h-3.5" />
                Write
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/new"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === "/new"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              <PenLine className="w-3.5 h-3.5" />
              Write a Story
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}