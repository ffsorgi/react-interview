import { EPieceTypes } from "../enums";
import { TPiece } from "../types";

export const isValidFormData = (formData: TPiece): boolean => {
  let errors: string[] = [];
  const { name, material, ancho, largo, tipo } = formData;

  const anchoNumber = Number(ancho);
  const largoNumber = Number(largo);

  if (!name || name.trim().length < 3) {
    errors.push("El nombre del material debe tener al menos 3 caracteres.");
  }

  if (!material || material.trim().length < 3) {
    errors.push("El material debe tener al menos 3 caracteres.");
  }

  if (!ancho || isNaN(anchoNumber) || anchoNumber <= 0 || anchoNumber > 3000) {
    errors.push("El ancho debe ser un número entre 1 y 3000 mm.");
  }

  if (!largo || isNaN(largoNumber) || largoNumber <= 0 || largoNumber > 3000) {
    errors.push("El largo debe ser un número entre 1 y 3000 mm.");
  }

  if (!tipo || !(tipo in EPieceTypes)) {
    errors.push("Debe seleccionar un tipo válido (CAJON, BASE o PUERTA).");
  }

  if (errors.length > 0) {
    alert(errors.join("\n"));
    return false;
  }
  return true;
};
