import { CheckCircle2, BarChart3, Shield, Zap } from "lucide-react";

const features = [
  {
    name: "Routine Tracking",
    description:
      "Build and maintain healthy habits with our intuitive routine tracker. Set goals and track your streaks.",
    icon: CheckCircle2,
  },
  {
    name: "Progress Analytics",
    description:
      "Visualize your progress with beautiful charts and insights. Understand your patterns and improve.",
    icon: BarChart3,
  },
  {
    name: "Privacy First",
    description:
      "Your data stays on your device. We prioritize your privacy and security above all else.",
    icon: Shield,
  },
  {
    name: "Daily Summaries",
    description:
      "Get a clear overview of your day. Stay organized and focused on what matters most.",
    icon: Zap,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything you need to build better habits
          </h2>
          <p className="text-lg text-muted-foreground">
            My Day provides the tools you need to stay consistent, organized,
            and motivated.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{feature.name}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
