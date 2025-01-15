import React from "react";
import { Brain, Bot, Cpu, Network, Database, LineChart } from "lucide-react";
import TechnologyCard from "./technology/TechnologyCard";
import TechCardNew from "./technology/TechCardNew";
import { FaPython } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

const technologies = [
  {
    icon: <FaPython className="text-primary text-[90px]" />,
  },
  {
    icon: <SiTensorflow className="text-primary text-[90px]" />,
  },
  {
    icon: <SiNextdotjs className="text-primary text-[90px]" />,
  },
  {
    icon: <FaReact className="text-primary text-[90px]" />,
  },
  {
    icon: <FaAws className="text-primary text-[90px]" />,
  },
  {
    icon: <SiFastapi className="text-primary text-[90px]" />,
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Technologies
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Cutting-edge technologies powering your success
          </p>
        </div>

        {/* <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <TechnologyCard key={tech.name} technology={tech} />
          ))}
        </div> */}

        <div className="flex  w-full justify-center items-center mt-20">
          <div className="flex flex-wrap items-center justify-center gap-14 ">
            {technologies.map((icon) => (
              <TechCardNew icon={icon.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
