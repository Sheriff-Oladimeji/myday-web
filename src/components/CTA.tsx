import Link from "next/link";

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
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-background text-foreground hover:bg-background/90 h-12 px-8 shadow-lg"
            >
              Download Now
            </Link>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
