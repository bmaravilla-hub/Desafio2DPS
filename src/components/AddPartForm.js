import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';
import { validatePart } from '../utils/validations';
import colors from '../utils/colors';

const AddPartForm = ({ isVisible, onClose, onSubmit }) => {
  // CRITERIO 3: Manejo de estado con useState para los datos del formulario
  const [part, setPart] = useState({
    type: 'Frenos',
    brand: '',
    serial: '',
    price: '',
    date: new Date(),
  });
  
  const [errors, setErrors] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);

  // CRITERIO 3: Función para validar y enviar los datos
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
    
    // Para esetear el formulario después de enviar
    setPart({ type: 'Frenos', brand: '', serial: '', price: '', date: new Date() });
    setErrors({});
  };

  return (
    // CRITERIO 4: Implementación del Modal
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
          <View style={styles.formBody}>
            {/* CRITERIO 3: Uso de Picker para selección de tipo de pieza */}
            <Text style={styles.label}>Tipo de Pieza *</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={part.type}
                onValueChange={(value) => setPart({ ...part, type: value })}
                style={styles.picker}
              >
                <Picker.Item label="Frenos" value="Frenos" />
                <Picker.Item label="Aceite" value="Aceite" />
                <Picker.Item label="Batería" value="Batería" />
                <Picker.Item label="Bujía" value="Bujía" />
                <Picker.Item label="Filtro de Aire" value="Filtro de Aire" />
              </Picker>
            </View>

            {/* CRITERIO 2: Campo de texto para marca*/}
            <Text style={styles.label}>Marca *</Text>
            <TextInput
              style={[styles.input, errors.brand && styles.inputError]}
              placeholder="Ej: Bosch"
              value={part.brand}
              onChangeText={(text) => setPart({ ...part, brand: text })}
            />
            {errors.brand && <Text style={styles.errorText}>{errors.brand}</Text>}

            {/*CRITERIO 2: Campo de texto para número de serie */}
            <Text style={styles.label}>No. Serie *</Text>
            <TextInput
              style={[styles.input, errors.serial && styles.inputError]}
              placeholder="Ej: ABC123"
              value={part.serial}
              onChangeText={(text) => setPart({ ...part, serial: text })}
            />
            {errors.serial && <Text style={styles.errorText}>{errors.serial}</Text>}

            {/*CRITERIO 2: Campo de texto para precio */}
            <Text style={styles.label}>Precio *</Text>
            <TextInput
              style={[styles.input, errors.price && styles.inputError]}
              placeholder="Ej: $120.50"
              value={part.price}
              onChangeText={(text) => setPart({ ...part, price: text })}
              keyboardType="numeric"
            />
            {errors.price && <Text style={styles.errorText}>{errors.price}</Text>}

            {/*CRITERIO 3: Selector de fecha con DateTimePicker */}
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
          </View>

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

export default AddPartForm;