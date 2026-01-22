"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic can be added here in the future
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your name" autoComplete="name" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="mobile">Mobile</Label>
        <Input id="mobile" name="mobile" placeholder="Your mobile number" autoComplete="tel" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="service">Service Needed</Label>
        <Input id="service" name="service" placeholder="e.g., Emirates ID Typing" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Tell us what you need" required />
      </div>

      <Button type="submit" className="w-full">Submit</Button>
      <p className="text-xs text-charcoal/60">
        This form is UI only (no backend). For quick response, use WhatsApp or Call: +971 56 331 5670.
      </p>
    </form>
  );
}
