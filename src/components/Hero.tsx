"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CheckCircle2, Zap, TrendingUp, Clock } from "lucide-react";

export function Hero() {
  const handleIOSClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.info("Coming Soon to iOS", {
      description: "We're currently finalizing the iOS version. Stay tuned!",
    });
  };

  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Background Pattern - Subtle Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Background Gradient Spotlights */}
      <div className="absolute left-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-[-5%] bottom-[10%] h-[350px] w-[350px] rounded-full bg-primary/15 blur-[100px]" />

      <div className="container px-4 md:px-8 mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider">
                Now Available
              </span>
            </div>

            {/* Headline - More benefit-focused */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Build Habits That{" "}
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Actually Stick
                </span>
              </h1>
              
              {/* Subtitle - More specific value proposition */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Track your daily routines with beautiful simplicity. See your progress at a glance, stay motivated with visual streaks, and finally build the consistency you've been seeking.
              </p>
            </div>

          

            {/* Buttons - More action-oriented */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link 
                href="https://play.google.com/store/apps/details?id=com.devsheriff.myday&pli=1" 
                className="w-full sm:w-auto" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 shadow-lg shadow-primary/25 font-semibold text-base hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m10.1 8c0-2.8.7-5 2.2-6.5l.3-.3 273.7 273.7v5.3l-273.7 273.7-.3-.3c-1.5-1.5-2.2-3.8-2.2-6.5z" fill="#00f0ff"/>
                    <path d="m388.9 360.7-106.3-106.3v-5.3l106.3-106.3 2.5 1.4 117.8 67c33.6 19.1 33.6 50.4 0 69.5l-117.8 67-2.5 3z" fill="#ffd900"/>
                    <path d="m391.4 363.7-108.8-108.8-272.2 272.1c11.1 11.7 29.2 13.3 48.7 2.2l332.3-165.5z" fill="#ff3a44"/>
                    <path d="m391.4 148.4-332.3-165.5c-19.5-11.1-37.6-9.5-48.7 2.2l272.2 272.1z" fill="#00a173"/>
                  </svg>
                  Start Free on Android
                </Button>
              </Link>
              
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-14 px-8 border-2 border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all"
                onClick={handleIOSClick}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c21.5-25.9 33.6-55.9 33.6-92 0-2.4-.2-4.9-.5-7.3-33 1.3-65 21.3-86.4 46.8-19 22.4-36 53.6-36 84.7 0 2.5.3 4.9.6 7.3 35.8-2.6 67.2-13.8 88.7-39.5z"/>
                </svg>
                iOS (Coming Soon)
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>No Ads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Privacy First</span>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] md:max-w-[360px]">
              {/* Decorative Circle behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-primary/20 rounded-full blur-3xl -z-10"></div>

              {/* The Phone Container - Optimized tilt */}
              <div className="relative z-10 transform rotate-[-4deg] transition-all duration-700 hover:rotate-0 hover:scale-105">
                <div className="rounded-[2.5rem] border-[10px] border-foreground/5 bg-foreground/5 shadow-2xl overflow-hidden">
                  <Image
                    src="/task.jpg"
                    alt="My Day App - Track your daily habits with beautiful simplicity"
                    width={400}
                    height={850}
                    className="w-full h-auto block rounded-[2rem] bg-background"
                    priority
                  />
                </div>
              </div>

              {/* Floating Element 1 - Notification Card (Repositioned) */}
              <div className="absolute -right-6 top-16 z-20 animate-float">
                <div className="flex items-center gap-3 rounded-2xl border-2 border-primary/20 bg-card/95 backdrop-blur-md p-4 shadow-2xl text-card-foreground max-w-[220px]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-500">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Completed
                    </p>
                    <p className="text-sm font-bold text-foreground">Morning Workout</p>
                    <p className="text-xs text-muted-foreground mt-0.5">3-day streak! 🔥</p>
                  </div>
                </div>
              </div>

              {/* Floating Element 2 - Progress Badge */}
              <div className="absolute -left-10 bottom-28 z-20 hidden md:block animate-float-delayed">
                <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-primary/20 bg-card/95 backdrop-blur-md p-5 shadow-2xl text-card-foreground">
                  <div className="relative mb-2">
                    <svg className="w-16 h-16 transform -rotate-90">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        className="text-muted/20"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 28}`}
                        strokeDashoffset={`${2 * Math.PI * 28 * (1 - 0.85)}`}
                        className="text-primary transition-all duration-1000"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-primary">
                      85%
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-foreground">Today's Goal</span>
                  <span className="text-xs text-muted-foreground">7 of 8 complete</span>
                </div>
              </div>

              {/* Floating Element 3 - Streak Badge */}
              <div className="absolute -left-4 top-24 z-20 hidden lg:block animate-float-slow">
                <div className="flex items-center gap-2 rounded-xl border-2 border-orange-500/20 bg-card/95 backdrop-blur-md px-4 py-2 shadow-xl text-card-foreground">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <p className="text-lg font-bold text-foreground">12</p>
                    <p className="text-xs text-muted-foreground">Day Streak</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}