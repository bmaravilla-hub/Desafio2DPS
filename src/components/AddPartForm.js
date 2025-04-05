import React, { useState } from 'react';
<<<<<<< HEAD
import { View, Text, Modal, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
=======
import { View, Text, Modal, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';
import { validatePart } from '../utils/validations';
import colors from '../utils/colors';

<<<<<<< HEAD
/**
 * Componente AddPartForm - Modal para agregar nuevas piezas
 *  Funcionalidades:
 *   Formulario para registrar piezas de vehículo
 *   Validación de campos obligatorios
 */

const AddPartForm = ({ isVisible, onClose, onSubmit }) => {
  const [part, setPart] = useState({
    type: 'Batería 12V',
=======
const AddPartForm = ({ isVisible, onClose, onSubmit }) => {
  // CRITERIO 3: Manejo de estado con useState para los datos del formulario
  const [part, setPart] = useState({
    type: 'Frenos',
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
    brand: '',
    serial: '',
    price: '',
    date: new Date(),
<<<<<<< HEAD
    description: '',
    warranty: '', 
=======
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
  });
  
  const [errors, setErrors] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);

<<<<<<< HEAD
  // Función para validar y enviar los datos
=======
  // CRITERIO 3: Función para validar y enviar los datos
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
  const handleSubmit = () => {
    const validationErrors = validatePart(part);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit({
      ...part,
      id: Date.now().toString(),
      date: part.date.toLocaleDateString('es-ES'),
    });
    
<<<<<<< HEAD
    // Resetear el formulario después de enviar
    setPart({ type: 'Batería 12V', brand: '', serial: '', price: '', date: new Date(), description: '', warranty: '' });
=======
    // Para esetear el formulario después de enviar
    setPart({ type: 'Frenos', brand: '', serial: '', price: '', date: new Date() });
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
    setErrors({});
  };

  return (
<<<<<<< HEAD
        // CRITERIO 4: Implementación del Modal
=======
    // CRITERIO 4: Implementación del Modal
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Encabezado del Modal */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Agregar Nueva Pieza</Text>
            <TouchableOpacity onPress={onClose}>
              <MaterialIcons name="close" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>

          {/* Cuerpo del Formulario */}
<<<<<<< HEAD
          <ScrollView style={styles.formBody} keyboardShouldPersistTaps="handled">
            {/* Selector de Tipo de Pieza */}
=======
          <View style={styles.formBody}>
            {/* CRITERIO 3: Uso de Picker para selección de tipo de pieza */}
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
            <Text style={styles.label}>Tipo de Pieza *</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={part.type}
                onValueChange={(value) => setPart({ ...part, type: value })}
                style={styles.picker}
              >
<<<<<<< HEAD
                <Picker.Item label="Batería 12V" value="Batería 12V" />
                <Picker.Item label="Pastillas de freno delanteras" value="Pastillas de freno delanteras" />
                <Picker.Item label="Aceite sintético" value="Aceite sintético 5W-30" />
                <Picker.Item label="Filtro de aire alto flujo" value="Filtro de aire alto flujo" />
                <Picker.Item label="Amortiguadores delanteros" value="Amortiguadores delanteros" />
                <Picker.Item label="Correa de distribución" value="Correa de distribución" />
              </Picker>
            </View>

            {/* Campo de texto para Marca */}
=======
                <Picker.Item label="Frenos" value="Frenos" />
                <Picker.Item label="Aceite" value="Aceite" />
                <Picker.Item label="Batería" value="Batería" />
                <Picker.Item label="Bujía" value="Bujía" />
                <Picker.Item label="Filtro de Aire" value="Filtro de Aire" />
              </Picker>
            </View>

            {/* CRITERIO 2: Campo de texto para marca*/}
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
            <Text style={styles.label}>Marca *</Text>
            <TextInput
              style={[styles.input, errors.brand && styles.inputError]}
              placeholder="Ej: Bosch"
              value={part.brand}
              onChangeText={(text) => setPart({ ...part, brand: text })}
            />
            {errors.brand && <Text style={styles.errorText}>{errors.brand}</Text>}

<<<<<<< HEAD
            {/* Campo de texto para Número de Serie */}
=======
            {/*CRITERIO 2: Campo de texto para número de serie */}
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
            <Text style={styles.label}>No. Serie *</Text>
            <TextInput
              style={[styles.input, errors.serial && styles.inputError]}
              placeholder="Ej: ABC123"
              value={part.serial}
              onChangeText={(text) => setPart({ ...part, serial: text })}
            />
            {errors.serial && <Text style={styles.errorText}>{errors.serial}</Text>}

<<<<<<< HEAD
            {/* Campo de texto para Precio */}
=======
            {/*CRITERIO 2: Campo de texto para precio */}
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
            <Text style={styles.label}>Precio *</Text>
            <TextInput
              style={[styles.input, errors.price && styles.inputError]}
              placeholder="Ej: $120.50"
              value={part.price}
              onChangeText={(text) => setPart({ ...part, price: text })}
              keyboardType="numeric"
            />
            {errors.price && <Text style={styles.errorText}>{errors.price}</Text>}

<<<<<<< HEAD
            {/* Selector de Fecha */}
=======
            {/*CRITERIO 3: Selector de fecha con DateTimePicker */}
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
            <Text style={styles.label}>Fecha de Cambio *</Text>
            <TouchableOpacity 
              style={styles.dateButton} 
              onPress={() => setShowDatePicker(true)}
            >
              <Text>{part.date.toLocaleDateString('es-ES')}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={part.date}
                mode="date"
                display="default"
                onChange={(_, selectedDate) => {
                  setShowDatePicker(false);
                  if (selectedDate) setPart({ ...part, date: selectedDate });
                }}
              />
            )}
<<<<<<< HEAD
            
            {/* Campo de texto para Garantía */}
            <Text style={styles.label}>Garantía *</Text>
            <TextInput
              style={[styles.input, errors.warranty && styles.inputError]}
              placeholder="Ej: 12 meses"
              value={part.warranty}
              onChangeText={(text) => setPart({ ...part, warranty: text })}
            />
            {errors.warranty && <Text style={styles.errorText}>{errors.warranty}</Text>}

            {/* Campo de texto para Descripción */}
            <Text style={styles.label}>Descripción</Text>
            <TextInput
              style={[styles.input, errors.description && styles.inputError]}
              placeholder="Ej: Batería AGM, 70Ah, 760CCA. Incluye instalación."
              value={part.description}
              onChangeText={(text) => setPart({ ...part, description: text })}
            />
            {errors.description && <Text style={styles.errorText}>{errors.description}</Text>}
          </ScrollView>
=======
          </View>
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed

          {/* Pie del Modal con botones */}
          <View style={styles.modalFooter}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    width: '90%',
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 20
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    paddingBottom: 10
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text
  },
  formBody: {
    marginVertical: 10
  },
  label: {
    marginBottom: 5,
    color: colors.text,
    fontWeight: '600'
  },
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: colors.background
  },
  inputError: {
    borderColor: '#FF6B6B'
  },
  errorText: {
    color: '#FF6B6B',
    marginBottom: 10,
    fontSize: 12
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    backgroundColor: colors.background
  },
  picker: {
    height: 50
  },
  dateButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: colors.background
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10
  },
  cancelButton: {
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 10,
    marginRight: 10,
    minWidth: 100
  },
  submitButton: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    minWidth: 100
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

<<<<<<< HEAD
export default AddPartForm;
=======
export default AddPartForm;
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
