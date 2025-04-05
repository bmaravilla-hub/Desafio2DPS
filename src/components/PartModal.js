import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView, Platform, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../utils/colors';

/**
 * Componente PartModal para mostrar detalles completos de una pieza
 * CRITERIO 4: Implementación completa del Modal
 * CRITERIO 2: Uso correcto de componentes básicos (View, Text, etc.)
 * CRITERIO 3: Componentes interactivos (TouchableOpacity) 
 * Props:
 * - part: Objeto con los datos de la pieza (requerido)
 * - isVisible: Booleano para controlar visibilidad (requerido)
 * - onClose: Función para cerrar el modal (requerido)
 */

const { height } = Dimensions.get('window');

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
        <View style={[ styles.modalContainer,
          Platform.OS === 'web' ? styles.webModal : styles.mobileModal
        ]}>
          {/* Encabezado */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Detalles de la Pieza</Text>
            <TouchableOpacity 
              onPress={onClose}
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
    <Text style={[styles.detailValue, !value && styles.emptyValue]}> 
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
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    paddingLeft: 10,
  },
  emptyValue: {
    color: colors.textHint,
    fontStyle: 'italic',
  },
  closeButton: {
    backgroundColor: colors.primary,
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
