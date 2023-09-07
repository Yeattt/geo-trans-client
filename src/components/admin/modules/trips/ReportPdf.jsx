import React from 'react'
import { TripsCard } from './TripsCard'

function ReportPdf({ trips }) {
  console.log(trips)
  return (
    <>
    <div className="max-h-[500px] overflow-y-scroll">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="px-6 py-2 text-primary">ID</th>
              <th className="px-6 py-2 text-primary">Cantidad</th>
              <th className="px-6 py-2 text-primary">Codigo producto</th>
              <th className="px-6 py-2 text-primary">Destino</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Empaque</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Naturaleza</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Numero remesa</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Origen</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Producto transportar</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Saldo a pagar</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Unidad de medida</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Valor a pagar</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Tipo Viaje</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Fecha Viaje</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Cliente</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Vehiculo</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Conductor</th>
              <th className="px-6 py-2 text-primary">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              trips.map(trip => (
                <TripsCard key={trip.id} trip={trip} />
              ))
            }
          </tbody>
        </table>
      </div>
    </>
    
  )
}

export default ReportPdf