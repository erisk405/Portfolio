import Iphone15Pro from "@/components/ui/shadcn-io/iphone-15-pro";
import { Safari } from "@/components/ui/shadcn-io/safari";
import { softSkills, techStackData } from "../data/tech-stack-data";
import { TechStack } from "@/shared/types/tech-stack.type";
import Image from "next/image";
import Link from "next/link";
import { SkillProps } from "@/shared/types/skill-type";


export function TechStackWithStats() {
  return (
    <section className="relative py-20 px-8" id="skill">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-gray-600 dark:text-gray-400 ml-16">
            Technologies powering my projects
          </p>
        </div>

        <div className="flex lg:flex-row flex-col-reverse justify-between items-center lg:items-start gap-4">
          {/* Left */}
          <div className="space-y-8 flex-1">
            {/* Stats Cards */}
            <h1 className="text-2xl font-bold">Hard Skills</h1>
            <div className="flex flex-wrap gap-4">
              {techStackData.map((tech: TechStack) => (
                <Link
                  href={tech.url}
                  key={tech.title}
                  target="_blank"
                  className="bg-white w-[60px] h-[60px] hover:scale-110
                  transform transition-transform duration-100 ease-in-out
                  flex justify-around items-center dark:bg-gray-800
                  rounded-lg shadow-md p-2 cursor-pointer"
                >
                  <Image
                    src={tech.image}
                    alt={tech.title}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </Link>
              ))}
            </div>
            <h1 className="text-2xl font-bold">Soft Skills</h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
              {softSkills.map((skill: SkillProps) => (
                <div
                  key={skill.title}
                  className="bg-white whitespace-nowrap
                transform transition-transform duration-100 ease-in-out
                flex gap-2 items-center dark:bg-gray-800
                rounded-lg shadow-md p-2 cursor-pointer"
                >
                  <span>{skill.emoji}</span>
                  <span>{skill.title}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className="relative justify-center">
            <div className="flex justify-center">
              <Iphone15Pro
                className="h-[600px] w-auto"
                src="https://res.cloudinary.com/dgfwfpxvg/image/upload/v1760953376/github_n59hdj.png"
              />
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}
