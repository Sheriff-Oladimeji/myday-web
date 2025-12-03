import Image from "next/image";

const screenshots = [
  {
    src: "/explore.jpg",
    alt: "Explore Routines",
    caption: "Discover new habits",
  },
  {
    src: "/stats.jpg",
    alt: "Track Statistics",
    caption: "Visualize your progress",
  },
  {
    src: "/profile.jpg",
    alt: "User Profile",
    caption: "Level up your life",
  },
];

export function Screenshots() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Beautifully designed for focus
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience a clean, distraction-free interface that helps you
            concentrate on what matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {screenshots.map((shot, index) => (
            <div
              key={index}
              className="relative group rounded-[2rem] overflow-hidden border-4 border-neutral-900 shadow-xl max-w-[200px] transition-transform hover:-translate-y-2 duration-300"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={300}
                height={650}
                className="w-full h-auto block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <p className="text-white font-medium">{shot.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
