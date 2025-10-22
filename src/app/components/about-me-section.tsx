"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Code2, Sparkles, Zap, MapPin, DollarSignIcon } from "lucide-react";
import CircularText from "@/components/ui/shadcn-io/circular-text";
import { Safari } from "@/components/ui/shadcn-io/safari";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import TextCursor from "@/components/ui/shadcn-io/text-cursor";
import { colors, users } from "../data/collaboration.data";
import {
  Cursor,
  CursorBody,
  CursorMessage,
  CursorName,
  CursorPointer,
} from "@/components/ui/shadcn-io/cursor";
import { cn } from "@/lib/utils";

const getRandomPosition = () => ({
  x: Math.floor(Math.random() * 80) + 10, // Keep within 10-90% range
  y: Math.floor(Math.random() * 80) + 10, // Keep within 10-90% range
});

export default function AboutMeSection() {
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
  const usersWithPositions = users.map((user, index) => ({
    ...user,
    position: userPositions[index],
  }));

  const quickFacts = [
    {
      icon: <MapPin className="w-4 h-4" />,
      label: "Based in",
      value: "Bangkok rama 2, Thailand",
    },
    {
      icon: <Code2 className="w-4 h-4" />,
      label: "Specialization",
      value: "Full-Stack Development",
    },
    {
      icon: <Sparkles className="w-4 h-4" />,
      label: "Focus",
      value: "Angular, Next.js, TypeScript, .Net",
    },
    {
      icon: <Zap className="w-4 h-4" />,
      label: "Passion",
      value: "Building Fast & Accessible Apps",
    },
  ];

  return (
    <section
      className="relative py-20 px-8 bg-gray-50 dark:bg-zinc-900 overflow-hidden"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100">
              About Me
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 ml-16">
            Get to know me better
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Visual */}
          <div className="relative rounded-lg">
            {/* Image Placeholder */}
            <div className="absolute top-0 left-0 w-full h-full z-10">
              <TextCursor
                text="📸"
                delay={0.01}
                spacing={60}
                followMouseDirection={true}
                randomFloat={true}
                exitDuration={0.4}
                removalInterval={25}
                maxPoints={8}
              />
            </div>
            <Safari
              url="stack.dev"
              imageSrc="https://res.cloudinary.com/dgfwfpxvg/image/upload/v1743356666/student_profiles/t693tz3it0ibmxbnww32.jpg"
              className="w-full h-full z-0"
            />

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-4">
              {quickFacts.map((fact, index) => (
                <div key={index} className="">
                  <Card className="gap-0 py-2">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 px-2 pb-2">
                      <CardTitle className="text-xs font-medium">
                        {fact.label}
                      </CardTitle>
                      <span className="text-xs font-thin">{fact.icon}</span>
                    </CardHeader>
                    <CardContent className="px-2">
                      <div className="text-xs font-bold">{fact.value}</div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Bio */}
            <div className="space-y-2">
              <h1 className="text-2xl mb-2 font-bold dark:text-zinc-300">
                A Little About Me 🫠
              </h1>
              <p className="text-md text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a Computer Engineering student at Rajamangala University of
                Technology Isan, passionate about software engineering and
                building useful, enjoyable applications. I love exploring new
                technologies, especially topics like code architecture and
                design.
              </p>
              <p className="text-md text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently, I am interested in the Rust programming language
                because it helps me strengthen my logical thinking and improve
                my coding skills.
              </p>
              <p className="text-md text-gray-700 dark:text-gray-300 leading-relaxed">
                As a full-stack developer, I enjoy turning complex problems into
                simple, elegant solutions using modern web technologies. With
                attention to detail and a focus on clean code, I aim to create
                applications that are not only functional but also delightful to
                use.
              </p>
            </div>

            {/* CTA Button (Optional) */}
            <div className="pt-4">
              <Link
                target="_blank"
                href={"/Resume.pdf"}
                className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-bold border-4 border-black dark:border-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
              >
                Open my resume 📋
              </Link>
            </div>
          </div>

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
                className={cn(colors[index % colors.length].foreground)}
              />
              <CursorBody
                className={cn(
                  colors[index % colors.length].background,
                  colors[index % colors.length].foreground,
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
      </div>
    </section>
  );
}
