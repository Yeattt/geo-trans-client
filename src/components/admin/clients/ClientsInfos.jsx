export const ClientsInfos = ({clients}) => {
    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-black font-bold my-4">Detalles del Cliente</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="font-bold text-lg text-purplePz">ID:</div>
                     <div className="text-lg text-black">{clients.id}</div>

                     <div className="font-bold text-lg text-purplePz">Documento:</div>
                     <div className="text-lg text-black">{clients.documento}</div>

                     <div className="font-bold text-lg text-purplePz">Nombre:</div>
                     <div className="text-lg text-black">{clients.nombre}</div>

                     <div className="font-bold text-lg text-purplePz">Razon Social:</div>
                     <div className="text-lg text-black">{clients.razonSocial}</div>

                     <div className="font-bold text-lg text-purplePz">Telefono:</div>
                     <div className="text-lg text-black">{clients.telefono}</div>
                  </div>

                  
               </div>
            </div>
         </div>
    );
}