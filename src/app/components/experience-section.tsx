"use client";
import * as React from "react";

const ExperienceSection = () => {
  return (
    <section className="relative py-20 px-8 dark:text-zinc-300" id="experience">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 ml-16">
            Professional journey and education
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {/* Experience Item 1 */}
          {/*<div className="grid md:grid-cols-[200px_1fr] gap-8">
            <div className="text-right">
              <div className="text-sm font-medium mb-1">2025 - Present</div>
              <div className="text-xs text-gray-500">Full-time</div>
            </div>
            <div className="relative border-l-2 border-black dark:border-white pl-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black dark:bg-white" />
              <h3 className="text-xl font-bold mb-2">
                Full-Stack Developer
              </h3>
              <div className="text-gray-600 dark:text-gray-400 mb-4">
                Tech Company • Bangkok, Thailand
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Building scalable web applications using React and Node.js.
                Led development of 3 major features that improved user
                engagement by 40%.
              </p>
            </div>
          </div>*/}

          {/* Experience Item 2 */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8">
            <div className="text-right">
              <div className="text-sm font-medium mb-1">
                June 2025 - October 2025
              </div>
              <div className="text-xs text-gray-500">Internship</div>
            </div>
            <div className="relative border-l-2 border-black dark:border-white pl-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black dark:bg-white" />
              <h3 className="text-xl font-bold mb-2">
                Full Stack Developer Intern
              </h3>
              <div className="text-gray-600 dark:text-gray-400 mb-4">
                Gofive Co.,Ltd. • On-site
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Contributed to Empeo, the company’s core HR platform. Fixed bugs
                and production issues. Handled PI (Program Increment) tasks and
                sprint deliverables. Developed and enhanced small-scale features
                to improve user experience.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8">
            <div className="text-right">
              <div className="text-sm font-medium mb-1">
                June 2021 - October 2025
              </div>
              <div className="text-xs text-gray-500">Education</div>
            </div>
            <div className="relative border-l-2 border-black dark:border-white pl-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black dark:bg-white" />
              <h3 className="text-xl font-bold mb-2">Computer Engineering</h3>
              <div className="text-gray-600 dark:text-gray-400 mb-4">
                Rajamangala University of Technology Isan
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Focused on software development and data structures. Graduated
                with First Class Honors (GPA 3.77/4.0).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
