import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 md:px-8 mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 font-bold text-xl tracking-tight mb-4"
            >
              <Image
                src="/icon.png"
                alt="My Day Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span>My Day</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              The simple, elegant routine tracker designed to help you build
              better habits and achieve your goals.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:dimejiademola5@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="mailto:dimejiademola5@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} My Day. All rights reserved.</p>
          <p>Made with ❤️ for better habits.</p>
        </div>
      </div>
    </footer>
  );
}
