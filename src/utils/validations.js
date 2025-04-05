/** 
 * @param {Object} part - Objeto con los datos de la pieza a validar
 * @returns {Object} errors - Objeto con mensajes de error por campo
 */
export const validatePart = (part) => {
    const errors = {};
    
    // Validación de marca 
    if (!part.brand.trim()) {
      errors.brand = 'La marca es requerida';
    } else if (part.brand.trim().length < 2) {
      errors.brand = 'La marca debe tener al menos 2 caracteres';
    }
  
    // Validación de número de serie 
    if (!part.serial.trim()) {
      errors.serial = 'El número de serie es requerido';
    } else if (!/^[A-Z0-9-]+$/.test(part.serial)) {
      errors.serial = 'Solo letras mayúsculas, números y guiones';
    }
  
    // Validación de precio 
    if (!part.price.trim()) {
      errors.price = 'El precio es requerido';
    } else if (!/^\$?\d+(\.\d{1,2})?$/.test(part.price)) {
      errors.price = 'Formato inválido (ej: $120.50)';
    }
  
    // Validación de fecha
    if (!part.date) {
      errors.date = 'La fecha es requerida';
    } else if (isNaN(new Date(part.date).getTime())) {
      errors.date = 'Fecha inválida';
    }
  
    // Validación para garantía
    if (part.warranty && !/^\d+\s(años|meses)$/.test(part.warranty)) {
      errors.warranty = 'Formato: "2 años" o "6 meses"';
    }
  
    return errors;
  };
  
  