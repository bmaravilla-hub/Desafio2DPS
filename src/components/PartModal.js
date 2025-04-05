import React from 'react';
<<<<<<< HEAD
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView, Platform, Dimensions } from 'react-native';
=======
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../utils/colors';

/**
<<<<<<< HEAD
 * Componente PartModal para mostrar detalles completos de una pieza
=======
 
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
 * CRITERIO 4: Implementación completa del Modal
 * CRITERIO 2: Uso correcto de componentes básicos (View, Text, etc.)
 * CRITERIO 3: Componentes interactivos (TouchableOpacity) 
 * Props:
 * - part: Objeto con los datos de la pieza (requerido)
 * - isVisible: Booleano para controlar visibilidad (requerido)
 * - onClose: Función para cerrar el modal (requerido)
 */
<<<<<<< HEAD

const { height } = Dimensions.get('window');

=======
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
const PartModal = ({ part, isVisible, onClose }) => {
  if (!part) return null;

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
<<<<<<< HEAD
        <View style={[ styles.modalContainer,
          Platform.OS === 'web' ? styles.webModal : styles.mobileModal
        ]}>
=======
        <View style={styles.modalContainer}>
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
          {/* Encabezado */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Detalles de la Pieza</Text>
            <TouchableOpacity 
              onPress={onClose}
<<<<<<< HEAD
              style={styles.closeIcon}
            >
              <MaterialIcons name="close" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>

         {/* Cuerpo con ScrollView */}
         <ScrollView style={styles.modalBody}
         contentContainerStyle={styles.scrollContent}>
          <DetailRow label="Tipo de Pieza:" value={part.type} />
          <DetailRow label="Marca:" value={part.brand} />
          <DetailRow label="N° de Serie:" value={part.serial} />
          <DetailRow label="Precio:" value={`${part.price}`} />
          <DetailRow label="Fecha de Cambio:" value={part.date} />
          <DetailRow label="Garantía:" value={part.warranty} />
          <DetailRow label="Descripción:" value={part.description} />
        </ScrollView>
=======
              hitSlop={{top: 20, bottom: 20, left: 20, right: 20}} // área táctil
            >
              <MaterialIcons 
                name="close" 
                size={24} 
                color={colors.text} 
              />
            </TouchableOpacity>
          </View>

          {/* Cuerpo con ScrollView para muchos campos */}
          <ScrollView style={styles.modalBody}>
            <DetailRow label="Tipo de Pieza:" value={part.type} />
            <DetailRow label="Marca:" value={part.brand} />
            <DetailRow label="N° de Serie:" value={part.serial} />
            <DetailRow label="Precio:" value={part.price} />
            <DetailRow label="Fecha de Cambio:" value={part.date} />
            
            {/*Rebeca puedes agregar más campos según necesidad */}
            <DetailRow label="Kilometraje:" value={part.mileage} />
            <DetailRow label="Taller:" value={part.workshop} />
            <DetailRow label="Garantía:" value={part.warranty} />
          </ScrollView>
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed

          {/* Pie del modal */}
          <View style={styles.modalFooter}>
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={onClose}
              activeOpacity={0.7}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

// Componente auxiliar para filas de detalle
const DetailRow = ({ label, value }) => (
  <View style={styles.detailRow}>
    <Text style={styles.detailLabel}>{label}</Text>
<<<<<<< HEAD
    <Text style={[styles.detailValue, !value && styles.emptyValue]}> 
=======
    <Text 
      style={[
        styles.detailValue,
        !value && styles.emptyValue // Estilo para valores vacíos
      ]}
    >
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
      {value || 'No especificado'}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
    overflow: 'hidden',
  },
  webModal: {
    width: '40%',
    minWidth: 400,
    maxWidth: 600,
  },
  mobileModal: {
    width: '90%',
    maxHeight: height * 0.7,
=======
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    width: '100%',
    maxWidth: 400, 
    backgroundColor: colors.white,
    borderRadius: 20, 
    padding: 25,
    maxHeight: '80%', 
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
<<<<<<< HEAD
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryLight,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  closeIcon: {
    padding: 5,
  },
  modalBody: {
    maxHeight: Platform.OS === 'web' ? 'auto' : height * 0.5,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  modalFooter: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.primaryLight,
=======
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryLight,
    paddingBottom: 15,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 22,
    fontFamily: 'Lato-Bold',
    color: colors.primary,
    flex: 1,
  },
  modalBody: {
    flex: 1,
    marginVertical: 5,
  },
  modalFooter: {
    marginTop: 15,
    alignItems: 'center', 
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
<<<<<<< HEAD
    marginBottom: 15,
  },
  detailLabel: {
    fontWeight: '600',
    color: colors.textPrimary,
    fontSize: 16,
  },
  detailValue: {
    fontWeight: '400',
    color: colors.textSecondary,
    fontSize: 16,
    textAlign: 'right',
    flex: 1,
=======
    marginBottom: 10,
    paddingVertical: 8,
  },
  detailLabel: {
    fontFamily: 'Lato-SemiBold',
    color: colors.textPrimary,
    fontSize: 16,
    flex: 1,
  },
  detailValue: {
    fontFamily: 'Lato-Regular',
    color: colors.textSecondary,
    fontSize: 16,
    flex: 1,
    textAlign: 'right',
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
    paddingLeft: 10,
  },
  emptyValue: {
    color: colors.textHint,
    fontStyle: 'italic',
  },
  closeButton: {
    backgroundColor: colors.primary,
<<<<<<< HEAD
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default PartModal;
=======
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    minWidth: 120,
  },
  closeButtonText: {
    color: colors.white,
    fontFamily: 'Lato-SemiBold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PartModal;
>>>>>>> 0862ebc76ca6bb6d9874b002ef81a3c156b413ed
