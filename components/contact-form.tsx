"use client";

import { 
  Send,
  User,
  Phone,
  FileText,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic can be added here in the future
    alert("Thank you! Your inquiry has been submitted. We will contact you shortly.");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-charcoal/40 ml-1">Full Name</Label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal/30" />
            <Input 
              id="name" 
              name="name" 
              placeholder="e.g. John Doe" 
              autoComplete="name" 
              required 
              className="h-14 pl-12 rounded-2xl bg-charcoal/5 border-none focus:ring-2 focus:ring-brand-red/20 font-medium"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="mobile" className="text-xs font-black uppercase tracking-widest text-charcoal/40 ml-1">Mobile Number</Label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal/30" />
            <Input 
              id="mobile" 
              name="mobile" 
              placeholder="+971 5X XXX XXXX" 
              autoComplete="tel" 
              required 
              className="h-14 pl-12 rounded-2xl bg-charcoal/5 border-none focus:ring-2 focus:ring-brand-red/20 font-medium"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service" className="text-xs font-black uppercase tracking-widest text-charcoal/40 ml-1">Service Required</Label>
        <div className="relative">
          <FileText className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal/30" />
          <Input 
            id="service" 
            name="service" 
            placeholder="e.g. Visa Renewal, Trade License" 
            required 
            className="h-14 pl-12 rounded-2xl bg-charcoal/5 border-none focus:ring-2 focus:ring-brand-red/20 font-medium"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-charcoal/40 ml-1">Additional Details</Label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-6 h-4 w-4 text-charcoal/30" />
          <Textarea 
            id="message" 
            name="message" 
            placeholder="Tell us more about your requirements..." 
            required 
            className="min-h-[150px] pl-12 pt-5 rounded-2xl bg-charcoal/5 border-none focus:ring-2 focus:ring-brand-red/20 font-medium resize-none"
          />
        </div>
      </div>

      <Button type="submit" className="w-full h-16 rounded-2xl bg-brand-red hover:bg-red-700 shadow-xl shadow-brand-red/20 text-md font-black group">
        Send Inquiry Now
        <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Button>
      
      <p className="text-[10px] text-center text-charcoal/40 font-bold uppercase tracking-widest">
        Direct Support: +971 56 331 5670 / +971 54 443 2745
      </p>
    </form>
  );
}
