import { FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useGetApiData } from '../../../../hooks';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import { PDFViewer, Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican


export const QuotesReporting = () => {
    const { data: quotes, isLoading: quotesIsLoading } = useGetApiData('/quotes');
    const [quotesList, setQuotesList] = useState([]);

    

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            marginBottom: 10,
        },
    });

    useEffect(() => {
        if (!quotesIsLoading) {
            setQuotesList(quotes.quotes);
        }
    }, [quotesIsLoading]);

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

            <div className="mr-20">

                <PDFDownloadLink document={
                    <Document>
                        <Page size="A4" style={styles.page}>
                            {quotesList.map((quote, index) => (
                                <View key={index} style={styles.text}>
                                    <Text>ID: {quote.id}</Text>
                                    <Text>Nombre Origen: {quote.nombreOrigen}</Text>
                                    <Text>Nombre Destino: {quote.nombreDestino}</Text>
                                    <Text>Ciudad Origen: {quote.ciudadOrigen}</Text>
                                    <Text>Ciudad Destino: {quote.ciudadDestino}</Text>
                                    <Text>Dirección: {quote.direccion}</Text>
                                    <Text>Contacto: {quote.contacto}</Text>
                                    <Text>Fecha Solicitud: {quote.fechaSolicitud}</Text>
                                    <Text>Fecha Servicio: {quote.fechaServicio}</Text>
                                    <Text>Hora Cargue: {quote.horaCargue}</Text>
                                    <Text>Tipo Camión: {quote.tipoCamion}</Text>
                                    <Text>Peso Aproximado: {quote.pesoAproximado}</Text>
                                    <Text>Valor Mercancía: {quote.valorMercancia}</Text>
                                    <Text>Contenido: {quote.contenido}</Text>
                                    <Text>Valor Transporte: {quote.valorTransporte}</Text>
                                    <Text>Observaciones: {quote.observaciones}</Text>
                                    <Text>User ID: {quote.userId}</Text>
                                    <Text>Company ID: {quote.companyId}</Text>
                                </View>
                            ))}
                        </Page>
                    </Document>
                } fileName="cotizaciones.pdf">
                    <button>PDF</button>

                </PDFDownloadLink>
            </div>

        </div>


    );
}
