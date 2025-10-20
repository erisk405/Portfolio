import { InteractiveGridPattern } from "@/components/ui/shadcn-io/interactive-grid-pattern";
import { Magnetic } from "@/components/ui/shadcn-io/magnetic";
import { NavbarHeader } from "@/components/ui/shadcn-io/navbar-01";
import { Safari } from "@/components/ui/shadcn-io/safari";
import ScrollVelocity from "@/components/ui/shadcn-io/scroll-velocity";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { TechStackWithStats } from "./components/tech-stack";
import ProjectSection from "./components/project-section";
import ExperienceSection from "./components/experience-section";
import AboutMeSection from "./components/about-me-section";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <NavbarHeader />
      <div className="max-w-[1400px] w-full min-h-screen border-r border-l border-dashed text-zinc-700">
        {/* Hero Section */}
        <div
          id="home"
          className="relative flex h-[calc(100vh-80px)] w-full items-center justify-center"
        >
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
              <h1 className="flex gap-4 flex-wrap items-end justify-center text-5xl text-zinc-700 md:text-6xl font-bold tracking-tight">
                <span>Greetings, I'm</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Krittaphat
                </span>
                <span>
                  <Image
                    src="https://res.cloudinary.com/dgfwfpxvg/image/upload/v1760961404/the-blobs-live-on-waving_ykxibd.gif"
                    alt="emoji"
                    width={60}
                    height={60}
                    className="relative rounded-full"
                  />
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
              <Link
                href={"#projects"}
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-80 transition-opacity"
              >
                View Projects
              </Link>
              <Link
                href={"#contact"}
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        <div className="py-8 flex items-center justify-center w-full overflow-hidden">
          <ScrollVelocity
            texts={["Turning Ideas into Code", "Crafting The Future"]}
            velocity={100}
            className="text-zinc-700"
          />
        </div>
        {/* About Me Section */}
        <AboutMeSection />
        {/* Tech Stack Section */}
        <TechStackWithStats />
        {/* Projects Section */}
        <ProjectSection />
        {/* Experience Section */}
        <ExperienceSection />

        {/* Contact Section */}
        <section
          className="relative py-32 px-8 bg-gray-50 dark:bg-gray-900"
          id="contact"
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Large CTA */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Have a project in mind? Let's create something amazing together.
            </p>

            {/* Contact Button */}
            <button className="px-12 py-4 bg-black dark:bg-white text-white dark:text-black text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors mb-16">
              Get In Touch
            </button>

            {/* Social Links */}
            <div className="flex justify-center gap-8 text-sm">
              <Link
                href="mailto:eriss.k405@gmail.com"
                className="hover:underline"
              >
                Email
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/krittaphat-samrit-648408164/"
                className="hover:underline"
              >
                LinkedIn
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                target="_blank"
                href="https://github.com/erisk405"
                className="hover:underline"
              >
                GitHub
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                target="_blank"
                href="https://www.instagram.com/_krittaphat/"
                className="hover:underline"
              >
                Instagram
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-zinc-200 dark:border-white py-8 px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 Krittaphat. All rights reserved.
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Designed & Built with Next.js
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
