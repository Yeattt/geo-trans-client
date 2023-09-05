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
import { QuotesCard } from './QuotesCard';
// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican


export const QuotesReporting = () => {
    const tablePdf = useRef()

  const generatePdf = useReactToPrint({
    content: () => tablePdf.current,
    documentTitle: 'Informes de cotizaciones'
  })

    const { isLoading,  data: { quotes } } = useGetApiData('/quotes');


    if (isLoading || quotes === undefined) {
        return <AdminLayout>Loading...</AdminLayout>;
      }

    return (
        <div className="grid grid-cols-2 gap-9">
            <div className="ml-40">
                <ReactHTMLTableToExcel
                    id="botonExportarExcel"
                    table='cotizaciones'
                    filename='cotizaciones'
                    sheet="pagina 1"
                    buttonText='Excel' />
            </div>


            <div className='hidden'>
              <div ref={tablePdf}>
                <ReportPdf quotes={quotes}/>
              </div>
            </div>


            <span className="ml-16 text-6xl text-red-600 hover:text-red-800 font-bold cursor-pointer">
            <BiSolidFilePdf onClick={generatePdf}/>
            </span>
          

        </div>


    );
}
