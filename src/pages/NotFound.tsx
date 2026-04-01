import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
      <Compass className="w-16 h-16 text-primary mx-auto mb-6 animate-spin" style={{ animationDuration: "3s" }} />
      <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Lost?
      </h1>
      <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
        Even the best explorers take a wrong turn sometimes. This page doesn't exist, but there's a whole world to discover.
      </p>
      <Link to="/">
        <Button size="lg" className="gap-2">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
