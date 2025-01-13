"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const projectData = [
  {
    image: "/work/Frame3.png",
    category: "Fullstack",
    name: "Verisight",
    description:
      "A browser extension using AI/ML and community efforts to help people assess the credibility of news articles",
    link: "/",
    github: "https://github.com/orgs/verisight/repositories",
  },
  {
    image: "/work/Frame6.png",
    category: "Fullstack",
    name: "Blog Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/Frame7.png",
    category: "Java",
    name: "Westminster Shopping Centre",
    description:
      "A product management application utilizing Java and Java Swing, featuring product storage and basket cart management with file handling capabilities",
    link: "/",
    github: "/",
  },
  {
    image: "/work/Frame4.png",
    category: "Fullstack",
    name: "The FoodFlow",
    description:
      "A revolutionary food redistribution system aimed at addressing a critical issue in our society - Excess Food Waste and Hunger.",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [
  "All",
  ...new Set(projectData.map((project) => project.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = projectData.filter((project) => {
    return activeCategory === "All"
      ? project
      : project.category === activeCategory;
  });
  console.log(filteredProjects);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 text-center xl:mb-16 mx-auto">
          Projects
        </h2>
        <Tabs defaultValue={activeCategory} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => (
              <TabsTrigger
                key={index}
                value={category}
                className="capitalize w-[162px] md:w-auto"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent key={index} value={activeCategory}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
