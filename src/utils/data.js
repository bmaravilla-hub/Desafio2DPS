/**
 * Datos de piezas vehiculares
 * Estructura:
 * - id: Identificador único 
 * - type: Tipo de pieza
 * - brand: Marca
 * - serial: Número de serie  
 * - price: Precio con formato
 * - date: Fecha de cambio (DD/MM/YYYY)
 * - warranty: Tiempo de garantía
 * - description: Descripción de la pieza
 */
export const partsData = [
  {
    id: '1',
    type: 'Batería 12V',
    brand: 'ACDelco Professional',
    serial: 'ACD-2024-X-70AH',
    price: '$149.99',
    date: '15/04/2024',
    warranty: '24 meses',
    description: 'Batería AGM, 70Ah, 760CCA. Incluye instalación.'
  },
  {
    id: '2',
    type: 'Pastillas de freno delanteras',
    brand: 'Bosch QuietCast',
    serial: 'BPS-0987-Z-CER',
    price: '$89.50',
    date: '22/03/2024',
    warranty: '12 meses o 20,000 km',
    description: 'Material cerámico, compatible con sensores de desgaste'
  },
  {
    id: '3',
    type: 'Aceite sintético',
    brand: 'Mobil 1 Extended Performance',
    serial: 'M1-5W30-EP-5L',
    price: '$52.75',
    date: '10/02/2024',
    warranty: '6 meses',
    description: '5 litros + filtro OEM. Cambio completo.'
  },
  {
    id: '4',
    type: 'Filtro de aire alto flujo',
    brand: 'K&N Performance',
    serial: 'KN-33-2034-RD',
    price: '$65.20',
    date: '18/12/2023',
    warranty: 'Lavable por 100,000 km',
    description: 'Lavable y reutilizable. Aumenta flujo de aire en 50%.'
  },
  {
    id: '5',
    type: 'Amortiguadores delanteros',
    brand: 'KYB Excel-G',
    serial: 'KYB-EXCEL-G-F',
    price: '$260.00',
    date: '30/11/2023',
    warranty: '36 meses',
    description: 'Par delantero. Incluye kit de montaje completo.'
  },
  {
    id: '6',
    type: 'Correa de distribución',
    brand: 'Gates PowerGrip',
    serial: 'GT-5672-X',
    price: '$135.90',
    date: '15/10/2023',
    warranty: '24 meses',
    description: 'Kit completo con tensor y poleas'
  },
];
