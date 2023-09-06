import { FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useGetApiData } from '../../../../hooks';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import {BiSolidFilePdf} from 'react-icons/bi'
import {SiMicrosoftexcel} from 'react-icons/si'
import { TbReportAnalytics } from 'react-icons/tb';
import { PDFViewer, Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { AdminLayout } from '../../../layouts/AdminLayout';
import ReportPdf from './ReportPdf';
import { TripsCard } from './TripsCard';
// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican


export const ReporteViajes = () => {
    const tablePdf = useRef()

  const generatePdf = useReactToPrint({
    content: () => tablePdf.current,
    documentTitle: 'Informes de viajes'
  })

    const { isLoading,  data: { trips } } = useGetApiData('/trips');


    if (isLoading || trips === undefined) {
        return <AdminLayout>Loading...</AdminLayout>;
      }

    return (
        <div className="grid grid-cols-2 gap-9">
            <div className="ml-40">
                <ReactHTMLTableToExcel
                    id="botonExportarExcel"
                    table='viajes'
                    filename='viajes'
                    sheet="pagina 1"
                    buttonText={<span className= "ml-18 text-6xl text-green-600 hover:text-green-800 font-bold cursor-pointer"> <SiMicrosoftexcel />
                    </span>}/>
            </div>


            <div className='hidden'>
              <div ref={tablePdf}>
                <ReportPdf trips={trips}/>
              </div>
            </div>

            <span className="ml-16 text-6xl text-red-600 hover:text-red-800 font-bold cursor-pointer">
            <BiSolidFilePdf onClick={generatePdf}/>
            </span>

            

          

        </div>


    );
}
