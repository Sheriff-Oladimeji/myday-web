"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Apple, Play } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="bg-primary rounded-[2.5rem] p-8 md:p-16 text-center text-primary-foreground overflow-hidden relative">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to transform your day?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-10">
              Join thousands of users who are building better habits and
              achieving their goals with My Day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 text-base gap-2 shadow-lg shadow-primary/20 bg-background text-foreground hover:bg-background/90"
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
                className="w-full sm:w-auto h-14 px-8 text-base gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                onClick={(e) => {
                  e.preventDefault();
                  toast.info("Coming Soon to iOS", {
                    description:
                      "We're currently finalizing the iOS version. Stay tuned!",
                  });
                }}
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
          </div>

          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
