import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center text-muted text-sm">
          Designed & Built with <Heart className="w-4 h-4 mx-2 text-red-500 fill-red-500" /> by Hassan
        </p>
        <p className="text-muted/80 text-xs mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
