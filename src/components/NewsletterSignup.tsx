import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome aboard! Check your inbox for a confirmation.");
      setEmail("");
    }
  };

  return (
    <section className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12 text-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
        Join the Journey
      </h3>
      <p className="text-muted-foreground max-w-md mx-auto mb-6">
        Get new travel stories, tips, and destination guides delivered to your inbox every week.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-background"
          required
        />
        <Button type="submit" className="gap-2">
          <Send className="w-4 h-4" />
          Subscribe
        </Button>
      </form>
      <p className="text-xs text-muted-foreground mt-3">No spam, ever. Unsubscribe anytime.</p>
    </section>
  );
}
