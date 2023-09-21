import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="text-white px-2 py-12 max-w-[1200px] mx-auto pt-64 pb-28 ">
     
     {/*Subseccion */}
      <section className="md:grid md:grid-cols-[1fr_auto] md:gap-16 p-4">
        <article className="pb-8">
          <h3 className="font-bold text-3xl">Skillset</h3>
          <p className="text-gray-400 mt-3">
            Whit skills in over 4 diferrent fields of design, I am the perfect
            person to hire when in the comes to a full fledged project.
          </p>
        </article>
        <section
          className="grid gap-82 pt-6 md:grid-cols-2
      md:gap-x-32"
        >
          <article className="pb-8">
            <div>
              <img src="/images/skill.png" alt="" />
            </div>
            <h4 className="text-2xl font-semibold my-2">Frameworks</h4>
            <ul>
              <li>React</li>
              <li>Boostrap</li>
              <li>Laravel</li>
            </ul>
          </article>

          <article className="pb-8">
            <div>
              <img src="/images/skill.png" alt="" />
            </div>
            <h4 className="text-2xl font-semibold my-2">Source Control</h4>
            <ul>
              <li>Git/Github</li>
            </ul>
          </article>

          <article className="pb-8">
            <div>
              <img src="/images/skill.png" alt="" />
            </div>
            <h4 className="text-2xl font-semibold my-2">Languages</h4>
            <ul>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>Python</li>
              <li>PHP</li>
            </ul>
          </article>

          <article className="pb-8">
            <div>
              <img src="/images/skill.png" alt="" />
            </div>
            <h4 className="text-2xl font-semibold my-2">Additional skills</h4>
            <ul>
              <li>MySQL</li>
              <li>Software modeling</li>
              <li>DB modeling</li>
              <li>UML diagrams</li>
            </ul>
          </article>
        </section>
      </section>

      {/*Sección inferior logos*/}

      <section className="grid grid-cols-2 mt-6 sm:grid-cols-4  shadow-lg shadow-cyan-500a
      max-w-[1000px] mx-auto">
        
        <div
          className="aspect-square grid place-content-center 
      border-[1px] border-gray-800 p-20"
        >
          <img className="rounded-md animate-ping" src="/images/JavaScript-logo.png" alt="" />
        </div>

        <div
          className="aspect-square grid place-content-center 
      border-[1px] border-gray-800 p-20"
        >
          <img className="rounded-md animate-ping" src="/images/react.png" alt="" />
        </div>

        <div
          className="aspect-square grid place-content-center 
      border-[1px] border-gray-800 p-20"
        >
          <img className="rounded-md animate-ping" src="/images/sql.png" alt="" />
        </div>

        <div
          className="aspect-square grid place-content-center 
      border-[1px] border-gray-800 p-20"
        >
          <img className="rounded-md animate-ping" src="/images/Python1.png" alt="" />
        </div>
      </section>
    </section>
  );
};

export default Skills;

