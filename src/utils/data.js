/**
 * Estructura:
 * - id: Identificador único
 * - type: Tipo de pieza
 * - brand: Marca
 * - serial: Número de serie
 * - price: Precio con formato
 * - date: Fecha de cambio (DD/MM/YYYY)
 * - warranty: Tiempo de garantía
 * - installedBy: Taller de instalación
 * - mileage: Kilometraje cuando se instaló
 * - notes: Observaciones adicionales
 */

export const partsData = [
    {
      id: '1',
      type: 'Batería',
      brand: 'ACDelco',
      serial: 'ACD-2024-X',
      price: '$120.99',
      date: '15/04/2024',
      warranty: '2 años',
      installedBy: 'Taller Solar',
      mileage: '45,200 km',
      notes: 'Batería sellada libre de mantenimiento'
    },
    {
      id: '2',
      type: 'Pastillas de freno',
      brand: 'Bosch',
      serial: 'BPS-0987-Z',
      price: '$85.50',
      date: '22/03/2024',
      warranty: '1 año',
      installedBy: 'Frenos Express',
      mileage: '43,800 km',
      notes: 'Material cerámico, baja producción de polvo'
    },
    {
      id: '3',
      type: 'Aceite sintético',
      brand: 'Mobil 1',
      serial: 'M1-5W30-2023',
      price: '$42.75',
      date: '10/02/2024',
      warranty: '6 meses',
      installedBy: 'Lubricantes Don Carlos',
      mileage: '42,150 km',
      notes: 'Cambio completo con filtro nuevo'
    },
    {
      id: '4',
      type: 'Bujías',
      brand: 'NGK',
      serial: 'BKR6E-11',
      price: '$68.30',
      date: '05/01/2024',
      warranty: '18 meses',
      installedBy: 'Taller Eléctrico Automotriz',
      mileage: '40,500 km',
      notes: 'Platino doble, gap 0.8mm'
    },
    {
      id: '5',
      type: 'Filtro de aire',
      brand: 'K&N',
      serial: 'KN-33-2034',
      price: '$55.20',
      date: '18/12/2023',
      warranty: '1 año',
      installedBy: 'Performance Motors',
      mileage: '38,750 km',
      notes: 'Filtro lavable de alto flujo'
    },
    {
      id: '6',
      type: 'Amortiguadores',
      brand: 'KYB',
      serial: 'KYB-EXCEL-G',
      price: '$240.00',
      date: '30/11/2023',
      warranty: '3 años',
      installedBy: 'Suspensiones Total',
      mileage: '36,200 km',
      notes: 'Par delantero, incluye montaje'
    }
  ];
  
  //Rebeca puedes agregar más piezas o modificarlas