"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge"; // Assuming you have shadcn badge, if not use a div
import { BarChart3, Compass, Trophy } from "lucide-react";

const features = [
  {
    title: "Discover Routines",
    description: "Browse community-curated habits to jumpstart your morning.",
    image: "/explore.jpg",
    icon: Compass,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Visualize Progress",
    description: "Deep insights into your consistency and completion rates.",
    image: "/stats.jpg",
    icon: BarChart3,
    color: "bg-green-500/10 text-green-500", // The hero color
  },
  {
    title: "Gamify Your Life",
    description: "Earn XP, level up, and unlock achievements as you grow.",
    image: "/profile.jpg",
    icon: Trophy,
    color: "bg-orange-500/10 text-orange-500",
  },
];

export function Screenshots() {
  return (
    <section className="relative py-24 lg:py-32 bg-secondary/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none"></div>

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none border-transparent bg-primary/10 text-primary mb-4">
            Interface Design
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Engineered for <span className="text-primary">Flow State</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We stripped away the clutter to leave only what matters. A clean,
            distraction-free interface that turns daily tasks into a rewarding
            experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-between rounded-3xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            >
              {/* Text Content (Top) */}
              <div className="p-8 pb-0 text-center w-full z-20">
                <div
                  className={`mx-auto w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${feature.color}`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Image Container (Bottom) */}
              <div className="relative w-full px-8 pt-4 pb-0 flex justify-center">
                {/* Glow effect behind the phone */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-primary/10 blur-[60px] rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>

                {/* The Phone Image */}
                <div className="relative rounded-t-[2.5rem] border-[6px] border-b-0 border-muted-foreground/10 bg-background shadow-2xl overflow-hidden translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={280}
                    height={600} // Aspect ratio preserved
                    className="w-full h-auto block"
                  />
                  {/* Glass overlay on hover (optional nice touch) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
