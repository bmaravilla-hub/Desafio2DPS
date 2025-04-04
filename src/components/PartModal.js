import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../utils/colors';

/**
 
 * CRITERIO 4: Implementación completa del Modal
 * CRITERIO 2: Uso correcto de componentes básicos (View, Text, etc.)
 * CRITERIO 3: Componentes interactivos (TouchableOpacity) 
 * Props:
 * - part: Objeto con los datos de la pieza (requerido)
 * - isVisible: Booleano para controlar visibilidad (requerido)
 * - onClose: Función para cerrar el modal (requerido)
 */
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
        <View style={styles.modalContainer}>
          {/* Encabezado */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Detalles de la Pieza</Text>
            <TouchableOpacity 
              onPress={onClose}
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
    <Text 
      style={[
        styles.detailValue,
        !value && styles.emptyValue // Estilo para valores vacíos
      ]}
    >
      {value || 'No especificado'}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
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
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    paddingLeft: 10,
  },
  emptyValue: {
    color: colors.textHint,
    fontStyle: 'italic',
  },
  closeButton: {
    backgroundColor: colors.primary,
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