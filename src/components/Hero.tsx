"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Apple, Play } from "lucide-react";

export function Hero() {
  const handleIOSClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.info("Coming Soon to iOS", {
      description: "We're currently finalizing the iOS version. Stay tuned!",
    });
  };

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-32 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Now available on Google Play
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-7xl mb-6 text-foreground leading-[1.1]">
              Master Your Day, <br />
              <span className="text-primary">One Habit at a Time</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              My Day is the elegant routine tracker that helps you build
              consistency, visualize progress, and achieve your goals without
              the clutter.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="#" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 text-base gap-2 shadow-lg shadow-primary/20"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase font-medium opacity-80">
                      Get it on
                    </span>
                    <span className="font-bold">Google Play</span>
                  </div>
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-base gap-2 hover:bg-secondary/80"
                onClick={handleIOSClick}
              >
                <Apple className="w-6 h-6 mb-0.5" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase font-medium opacity-80">
                    Download on the
                  </span>
                  <span className="font-bold">App Store</span>
                </div>
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">v1.0</span>{" "}
              released. iOS version coming soon.
            </p>
          </div>

          <div className="flex-1 relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-none perspective-1000">
            <div className="relative z-10 rounded-[2.5rem] border-[8px] border-neutral-900 bg-neutral-900 shadow-2xl overflow-hidden rotate-y-[-12deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
              <Image
                src="/app-screenshot.png"
                alt="My Day App Interface"
                width={400}
                height={850}
                className="w-full h-auto block"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/20 blur-[120px] rounded-full -z-10 opacity-60"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/20 blur-[60px] rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
