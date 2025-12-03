import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-[90%] mx-auto flex h-14 max-w-screen-2xl items-center justify-between ">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/icon.png"
              alt="My Day Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold text-xl tracking-tight">My Day</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#features"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Features
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Terms
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            {/* Placeholder for future auth or download button if needed in nav */}
          </div>
        </div>
      </div>
    </nav>
  );
}
