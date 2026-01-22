import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16">
      <div className="rounded-2xl border border-charcoal/10 bg-white p-8 shadow-soft">
        <h1 className="text-2xl font-bold text-charcoal">Page not found</h1>
        <p className="mt-2 text-sm text-charcoal/70">
          The page you are looking for does not exist.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
