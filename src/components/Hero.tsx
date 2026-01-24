"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

export function Hero() {
  const handleIOSClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.info("Coming Soon to iOS", {
      description: "We're currently finalizing the iOS version. Stay tuned!",
    });
  };

  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-20 lg:pt-32 lg:pb-32">
      {/* Background Pattern - Subtle Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Background Gradient Spotlights */}
      <div className="absolute left-[-10%] top-[20%] h-[300px] w-[300px] rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute right-[-10%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-primary/20 blur-[100px]" />

      <div className="container px-4 md:px-8 mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wide">
                v1.0 Available Now
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Master Your Day, <br />
              <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                One Task at a Time
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              My Day is the elegant routine tracker that helps you build
              consistency and visualize progress without the clutter.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <Link href="https://play.google.com/store/apps/details?id=com.devsheriff.myday&pli=1" className="w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 px-8 shadow-lg shadow-primary/20 font-semibold"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m10.1 8c0-2.8.7-5 2.2-6.5l.3-.3 273.7 273.7v5.3l-273.7 273.7-.3-.3c-1.5-1.5-2.2-3.8-2.2-6.5z" fill="#00f0ff"/>
                    <path d="m388.9 360.7-106.3-106.3v-5.3l106.3-106.3 2.5 1.4 117.8 67c33.6 19.1 33.6 50.4 0 69.5l-117.8 67-2.5 3z" fill="#ffd900"/>
                    <path d="m391.4 363.7-108.8-108.8-272.2 272.1c11.1 11.7 29.2 13.3 48.7 2.2l332.3-165.5z" fill="#ff3a44"/>
                    <path d="m391.4 148.4-332.3-165.5c-19.5-11.1-37.6-9.5-48.7 2.2l272.2 272.1z" fill="#00a173"/>
                  </svg>
                  Get on Google Play
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-12 px-8 border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground"
                onClick={handleIOSClick}
              >
                <svg className="w-5 h-5 mr-2 mb-0.5" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c21.5-25.9 33.6-55.9 33.6-92 0-2.4-.2-4.9-.5-7.3-33 1.3-65 21.3-86.4 46.8-19 22.4-36 53.6-36 84.7 0 2.5.3 4.9.6 7.3 35.8-2.6 67.2-13.8 88.7-39.5z"/>
                </svg>
                Coming Soon
              </Button>
            </div>


          </div>

          {/* Right Image Section */}
          <div className="relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-[300px] md:max-w-[340px]">
              {/* Decorative Circle behind phone to break verticality */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-secondary/50 rounded-full blur-3xl -z-10"></div>

              {/* The Phone Container - Tilted slightly less for better readability */}
              <div className="relative z-10 transform rotate-[-6deg] transition-transform duration-500 hover:rotate-0">
                <div className="rounded-[2.5rem] border-[8px] border-foreground/10 bg-foreground/10 shadow-2xl overflow-hidden">
                  <Image
                    src="/task.jpg"
                    alt="My Day App Interface"
                    width={400}
                    height={850}
                    className="w-full h-auto block rounded-[2rem] bg-background"
                    priority
                  />
                </div>
              </div>

              {/* Floating Element 1 - Notification Card */}
              <div className="absolute -right-4 top-20 z-20 animate-bounce [animation-duration:3s]">
                <div className="flex items-center gap-3 rounded-xl border bg-card/90 backdrop-blur-md p-4 shadow-xl text-card-foreground max-w-[200px]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Just now
                    </p>
                    <p className="text-sm font-bold">Drink Water Completed</p>
                  </div>
                </div>
              </div>

              {/* Floating Element 2 - Progress Badge (Optional) */}
              <div className="absolute -left-8 bottom-32 z-20 hidden md:block">
                <div className="flex flex-col items-center justify-center rounded-xl border bg-card/90 backdrop-blur-md p-4 shadow-xl text-card-foreground">
                  <span className="text-2xl font-bold text-primary">85%</span>
                  <span className="text-xs font-medium text-muted-foreground">
                    Daily Goal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}
