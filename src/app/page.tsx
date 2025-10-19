import { InteractiveGridPattern } from "@/components/ui/shadcn-io/interactive-grid-pattern";
import { Magnetic } from "@/components/ui/shadcn-io/magnetic";
import { NavbarHeader } from "@/components/ui/shadcn-io/navbar-01";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <NavbarHeader />
      <div className="max-w-[1400px] w-full min-h-screen border-r border-l border-dashed">
        {/* Hero Section */}
        <div className="relative flex h-[calc(100vh-80px)] w-full items-center justify-center">
          {/* Content Container */}
          <div className="relative z-10 w-full mx-auto px-8 flex flex-col items-center text-center space-y-8">
            <InteractiveGridPattern
              squares={[35, 35]}
              className={cn(
                "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12 opacity-40",
              )}
            />
            <Magnetic>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl rounded-full" />
                <Image
                  src="https://res.cloudinary.com/dgfwfpxvg/image/upload/v1760891095/drilldown-Photoroom_v6lerx.png"
                  alt="Krittaphat Profile"
                  width={160}
                  height={160}
                  className="relative bg-gray-50 rounded-full border-2 border-white/10 shadow-2xl"
                />
              </div>
            </Magnetic>
            {/* Text Content */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Greetings, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Krittaphat
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
                Turning Ideas into Code
              </p>

              <p className="text-base md:text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Full-Stack Developer based in Thailand, passionate about
                creating elegant solutions
              </p>
            </div>

            {/* CTA Buttons (Optional) */}
            <div className="flex gap-4 pt-4 z-50">
              <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-80 transition-opacity">
                View Projects
              </button>
              <button className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
