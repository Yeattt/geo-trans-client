import React from 'react'
import { QuotesCard } from './QuotesCard'

function ReportPdf({ quotes }) {
  console.log(quotes)
  return (
    <>
    <div className="max-h-[500px] overflow-y-scroll">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="px-6 py-2 text-primary">ID</th>
              <th className="px-6 py-2 text-primary">Fecha solicitud</th>
              <th className="px-6 py-2 text-primary">Hora Cargue</th>
              <th className="px-6 py-2 text-primary">Destino</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Origen</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Direccion</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Contacto</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Nom. Origen</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Fecha Servicio</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Nom. Destino</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Tipo Camion</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Peso</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Vlr. Mercancia</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Contenido</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Vlr. Transporte</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Observaciones</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Company Id</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">User Id</th>
              <th className="px-6 py-2 text-primary">Estado</th>
              <th className="px-6 py-2 text-primary">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              quotes.map(quote => (
                <QuotesCard key={quote.id} quote={quote} />
              ))
            }
          </tbody>
        </table>
      </div>
    </>
    
  )
}

export default ReportPdf