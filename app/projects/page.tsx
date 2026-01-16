import React from "react";
import { promises as fs } from "fs";
import Link from "next/link";
const fetchProjects = async () => {
  // const response = await fetch('./data.json')
  // const data = await response.json()
  // return data
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf-8");
  return JSON.parse(file);
};

const page = async () => {
  const data = await fetchProjects();
  console.log("data", data);
  return (
    <div>
      <div className="text-on-surface mt-6">
        <p className="font-bold md:text-3xl text-2xl pb-6">Projects</p>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((project: any) => (

          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            aria-label={`Go to ${project.name} project page`}
          >
            <div className="rounded-xl p-6 interactive-bg-surface gap-y-4 cursor-pointer">
              <div className="w-full flex gap-x-4 justify-between">
                <div>
                  <p className="text-on-surface text-lg font-bold">{project.title}</p>
                  <p className="text-on-surface-variant text-base">
                    {project.excerpt}
                  </p>
                </div>
                <div className="fill-on-primary-container p-4 w-12 h-12 rounded-full bg-primary-container flex items-center justify-center cursor-pointer hover:bg-primary-hover hover:text-primary-dark-hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                  >
                    <path
                      d="M25.0639 22.9042L25.6152 9.32012L12.4339 5.99067"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.38498 23.6799L25.4229 9.46362"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* <div className="rounded-lg overflow-hidden flex w-full h-80 my-4">
                <picture className="w-full h-full object-cover">

                  <img
                    srcSet={`assets/${project.image} 1x, assets/${project.image} 2x`}
                    src={`assets/${project.image}`}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div> */}

              <ul className="flex flex-wrap w-full gap-2">
                {
                  project.technologies.map((tag: string, index: number) => (
                    <li
                      key={index}
                      className="text-on-surface-variant text-sm bg-surface-variant/20 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </li>
                  ))
                }
               

              </ul>
            </div>
          </Link>

        ))}
      </div>
    </div>
  );
};

export default page;
