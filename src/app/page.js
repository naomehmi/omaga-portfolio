'use client'

import { Silkscreen } from "next/font/google";
import ProjectNth from "@/templates/get_project_nth";
import React from "react";
import { projects } from "@/data/projects";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: ["400"] });
const headers = silkscreen.className;

export default function Home() {
  
  const [projetcIdx, setProjectIdx] = React.useState(0);

  function handleIdx ( selectedIdx ) {
    setProjectIdx(selectedIdx);
  }
  
  const projectNames = projects.map((prjct) => prjct.title);

  return (
    <main className="flex min-h-screen flex-col items-center px-10 py-24 md:p-24 lg:mx-6">
      <h1 className={`${headers} text-3xl md:text-5xl text-center`}>Naomi Prisella</h1>
      <p className="mt-10 mb-10 md:mb-20 text-center text-sm md:text-xl">
        &lt;hi&gt; a computer science / informatics engineering student based in
        indonesia, enjoys problem solving and learning about new things in the
        development world &lt;/hi&gt;
      </p>
      <div className="lg:flex justify-start">
        <div className="links lg:pr-36 lg:max-w-[20vw] w-screen flex flex-col justify-center lg:block">
          <h2 className={`${headers} w-full text-center lg:text-left text-2xl mb-3 mt-10 lg:mt-0`}>Projects</h2>
          <div className="grid grid-rows-3 grid-flow-col justify-around lg:block lg:mx-0">
            {projectNames.map((btn, idx) => (
              <div key={idx}>
                <button className={`text-sm md:text-base lg:text-xl text-left lg:mb-3 hover:underline ${projetcIdx == idx ? 'underline' : ''}`} onClick={() => handleIdx(idx)}>{btn}</button>
                <br />
              </div>
            ))}
          </div>
        </div>
        <div className="content m-10 lg:my-0">
          <ProjectNth index={projetcIdx} />
        </div>
      </div>
    </main>
  );
}
