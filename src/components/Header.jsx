import React from "react";

const Header = () => {
  return (
    <section id="presentation"
      className="text-white md:grid md:grid-cols-[1.5fr_1.5fr] 
        md:min-h-[500px] max-w-[1200px] mx-auto pb-16 "
    >
             {/*realizando el chat*/}
  {/*  <a className="translate-x-20 flex justify-center" href="">
    <i className="text-green-600 text-6xl absolute bx bxs-chat"></i>
    </a>
  */}
      <div className=" flex justify-center pt-20 ">
        {/*En proceso... 
        md:translate-y-1/4
          md:max-w[130px] max-w-xs */}
        <img
          className="p-8 max-w-xs shadow-lg shadow-cyan-500
          sm:opacity-60"
          src="/images/HeaderPerfil.jpg"
          alt=""
        />
      </div>

      <section className="p-8 py-10 md:grid md:place-content-center md:px-10 md:mt-16">
        <h2 className="text-3xl font-bold md:text-4xl">
          I’m Pierre Pérez Castillo. A fronted developer
        </h2>
        <p className="mt-1 md:mt-1">
          I am a developer who is passionate about web development and who seeks
          innovation in this field and I always strive to carry out a project in
          the best way.
        </p>
      </section>

    </section>


  );
};

export default Header;
