export const AboutUs = () => {
   return (
      <section className="py-16 bg-gray-100">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
               <div className="md:w-1/2">
                  <h2 className="text-4xl font-bold mb-4">Información de la Empresa</h2>
                  <p className="text-gray-600 mb-6">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus tellus ac tellus molestie,
                     vitae rutrum nisl interdum. Aliquam lacinia gravida ex, id rhoncus nunc fringilla eu. Nunc pellentesque
                     euismod leo, ac tincidunt lacus dictum eu. Suspendisse lacinia scelerisque dapibus.
                  </p>
                  <p className="text-gray-600 mb-6">
                     Integer non lectus ullamcorper, cursus felis eget, malesuada odio. In quis enim rutrum, interdum lorem
                     vitae, varius leo. Integer sed eleifend urna. Curabitur consectetur lorem vel nibh malesuada, eget
                     posuere dolor volutpat.
                  </p>
               </div>
               <div className="md:w-1/2">
                  <img
                     src="assets/company-info.png"
                     alt="Company Info"
                     className="w-full h-auto rounded-lg shadow"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}