import React from 'react';

export const Banner = () => {
   return (
      <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
         <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
            <div className="flex flex-col gap-8">
               <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
                  Transporte Seguro y Efectivo
               </h1>

               <p className="text-gray-500 text-2xl leading-[2.5rem]">
                  Ayudamos con la gestión de Transporte de todo tipo, con una amplia experiencia y un gran equipo de trabajo.
               </p>

               <div className="flex flex-col md:flex-row items-center gap-4">
                  <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl transition duration-300 hover:bg-primaryHover">
                     Contáctenos
                  </button>
               </div>
            </div>
         </div>
         
         <div className="md:col-span-3 flex items-center justify-center relative">
            <div>
               <img
                  src="assets/banner.png"
                  className="w-[250px] h-[250px] md:w-[620px] md:h-[450px] object-contain xl:-mt-28"
               />
            </div>
            
            {/* Circle Decoration */}
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-primary border-[10px] border-primary rounded-full -z-10"></div>
         </div>
      </section>
   );
};