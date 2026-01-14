import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        {/* 404 Number */}
        <div className="space-y-2">
          <h1 className="text-8xl sm:text-9xl font-bold text-foreground/10">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground -mt-16 relative">
            Page Not Found
          </h2>
        </div>

        {/* Description */}
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button asChild>
            <Link href="/" className="gap-2">
              <Home size={18} />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/#projects" className="gap-2">
              <ArrowLeft size={18} />
              View Projects
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
