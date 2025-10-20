"use client";
import * as React from "react";
import { ProjectProp, projects } from "../data/project.data";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/shadcn-io/3d-card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { colors, colors2, users2 } from "../data/collaboration.data";
import {
  Cursor,
  CursorBody,
  CursorMessage,
  CursorName,
  CursorPointer,
} from "@/components/ui/shadcn-io/cursor";
import { cn } from "@/lib/utils";
import Image from "next/image";


const getRandomPosition = () => ({
  x: Math.floor(Math.random() * 80) + 10, // Keep within 10-90% range
  y: Math.floor(Math.random() * 80) + 10, // Keep within 10-90% range
});

const ProjectSection = () => {
  const [user1Position, setUser1Position] = useState({
    x: 10,
    y: 8,
  });
  const [user2Position, setUser2Position] = useState({
    x: 30,
    y: 40,
  });
  const [user3Position, setUser3Position] = useState({
    x: 70,
    y: 50,
  });

  const userPositions = [user1Position, user2Position, user3Position];
  useEffect(() => {
    const interval = setInterval(
      () => {
        setUser1Position(getRandomPosition());
      },
      Math.random() * 3000 + 2000,
    ); // Random interval between 2-5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setUser2Position(getRandomPosition());
      },
      Math.random() * 4000 + 3000,
    ); // Random interval between 3-7 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setUser3Position(getRandomPosition());
      },
      Math.random() * 2500 + 1500,
    ); // Random interval between 1.5-4 seconds
    return () => clearInterval(interval);
  }, []);

  // Assign positions to users
  const usersWithPositions = users2.map((user, index) => ({
    ...user,
    position: userPositions[index],
  }));
  return (
    <section className="relative py-20 px-8 bg-gray-50 dark:bg-gray-900" id="projects">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 ml-16">
          Selected works that solve real problems
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto space-y-24">
        {projects.map((project: ProjectProp) => (
          <div
            key={project.id}
            className="grid md:grid-cols-2 gap-8 items-center group"
          >
            <div
              className={project.imagePosition === "right" ? "md:order-2" : ""}
            >
              <CardContainer className="inter-var" containerClassName="w-full">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
                  <CardItem translateZ="100" className="w-full h-full">
                    <img
                      src={project.image}
                      height="1000"
                      width="1000"
                      className="h-[320px] w-[550px] object-cover border rounded-xl group-hover/card:shadow-xl"
                      alt={project.title}
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>

            {/* Project Info */}
            <div
              className={`space-y-4 ${project.imagePosition === "left" ? "order-1 md:order-2" : ""}`}
            >
              <h3 className="text-2xl md:text-3xl font-bold">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm border border-black dark:border-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                <Link
                  target="_blank"
                  href={project.liveDemo}
                  className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  Live Demo
                </Link>
                <Link
                  target="_blank"
                  href={project.github}
                  className="px-6 py-2 border-2 border-black dark:border-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Start Collaboration*/}
        {usersWithPositions.map((user, index) => (
          <Cursor
            className="absolute transition-all duration-1000"
            key={user.id}
            style={{
              top: `${user.position.y}%`,
              left: `${user.position.x}%`,
            }}
          >
            <CursorPointer
              className={cn(colors2[index % colors2.length].foreground)}
            />
            <CursorBody
              className={cn(
                colors2[index % colors2.length].background,
                colors2[index % colors2.length].foreground,
                "gap-1 px-3 py-2",
              )}
            >
              <div className="flex items-center gap-2 !opacity-100">
                <Image
                  alt={user.name}
                  className="mt-0 mb-0 size-4 rounded-full"
                  height={16}
                  src={user.avatar}
                  unoptimized
                  width={16}
                />
                <CursorName>{user.name}</CursorName>
              </div>
              {user.message && <CursorMessage>{user.message}</CursorMessage>}
            </CursorBody>
          </Cursor>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
