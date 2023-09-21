import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="text-white p-12 py-10 grid gap-20
    sm:grid-cols-2 max-w-[1200px] mx-auto pt-20 "
    >
      {/*primera seccion */}
      <section className="grid gap-10 ">
        <div>
          <h3 className="uppercase text-2xl font-bold">
            My projects
          </h3>
          <h2 className="text-xl font-semibold text-gray-400 mt-2">
            Work that I´ve done for the past 1 year{" "}
          </h2>
        </div>
        <div className="rounded-lg">
        <article className=" bg-gray-950 static shadow-xl shadow-sky-500">
          
           <div >
            <img src="/images/project1.png" alt="" />
          </div>
          <section className="p-6">
            <h4>CRUD Website Design</h4>
            <p className="text-gray-400 text-sm pb-8">This project is a user CRUD on a responsive web page.</p>
            <div className="flex justify-center">
              <a
                href="https://eclectic-croquembouche-d3e0a7.netlify.app/"
                className=" transition ease-in-out delay-150 
                bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 
                hover:text-black duration-150 p-4 py-6 grid content-center text-lg rounded-md
                relative pt-0"  
               
              >
                <p className="translate-y-2">Ver proyecto</p>
                
              </a>
            </div>
          </section>
        </article>
        </div>

        <article className="bg-gray-950 static shadow-lg shadow-sky-500">
          <div className="">
            <img src="/images/project2.png" alt="" />
          </div>
          <section className="p-6">
            <h4>E-comerce Website</h4>
            <p className="text-gray-400 text-sm pb-8">
              This project is an E-commerce made with Javascript, 
              HTML and CSS.</p>
            <div className="flex justify-center">
              <a
                href="https://proyecto-pri-perezcastillo.netlify.app/#"
                className=" transition ease-in-out delay-150 
              bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 
              hover:text-black duration-150 p-4 py-6 grid content-center text-lg rounded-md
              relative pt-0 "
              >
                <p className="translate-y-2">Ver proyecto</p>
                
              </a>
            </div>
          </section>
        </article>
      </section>

      {/*segunda seccion */}
      <section className="grid gap-10 ">
        <article className="bg-gray-950 static shadow-lg shadow-sky-500">
          <div>
            <img src="/images/project3.png" alt="" />
          </div>
          <section className="p-6">
            <h4>Website</h4>
            <p className="text-gray-400 text-sm pb-8">
              This is a project where random phrases are shown, 
              this project was made with React and states were used.</p>
            <div className="flex justify-center">
              <a
              
                href="https://creative-pony-22742e.netlify.app/"
                className=" transition ease-in-out delay-150 
              bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 
              hover:text-black duration-150 p-4 py-6 grid content-center text-lg rounded-md
              relative pt-0 "
              >
                <p className="translate-y-2">Ver proyecto</p>
                
              </a>
            </div>
          </section>
        </article>

        <article className="bg-gray-950 static shadow-lg shadow-sky-500">
          {/*EN PROCESO, CONTINUARA */}
          <div >
            <img src="/images/project4.png" alt="" />
          </div>
          <section className="p-6">
            <h4>Website</h4>
            <p className="text-gray-400 text-sm pb-8">
              This project uses the management of APIs, React, 
              States, Axios and Components.</p>
            <div className="flex justify-center">
              <a
                href="https://dazzling-truffle-ff62f2.netlify.app/"
                className=" transition ease-in-out delay-150 
              bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 
              hover:text-black duration-150 p-4 py-6 text-lg rounded-md
              relative pt-0 "
              >
                <p className="translate-y-2">Ver proyecto</p>
                
              </a>
            </div>
          </section>
        </article>
      </section>
    </section>
  );
};

export default Projects;
