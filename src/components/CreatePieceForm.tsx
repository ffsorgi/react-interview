import React from "react";
import { useState } from "react";
import { TPiece } from "../types";
import { EPieceTypes } from "../enums";
import "../assets/css/CreatePieceForm.css";
import { isValidFormData, stringToFloatString } from "../utils";

const initialPiece: TPiece = {
  name: "",
  material: "",
  ancho: "",
  largo: "",
  tipo: "",
};

export const CreatePieceForm = () => {
  const [formData, setFormData] = useState<TPiece>(initialPiece);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidFormData(formData)) return;

    const formDataFormated = {
      ...formData,
      ancho: stringToFloatString(formData.ancho),
      largo: stringToFloatString(formData.largo),
    };

    saveInLocalStorage(formDataFormated);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveInLocalStorage = (newPiece: TPiece): void => {
    const stored = localStorage.getItem("pieces");

    const actualPieces: TPiece[] = stored ? JSON.parse(stored) : [];

    const currentlyExists = actualPieces.some(
      (piece) => piece.name === newPiece.name
    );

    if (currentlyExists) {
      alert("¡Ya existe una pieza con ese nombre!");
      return;
    }
    actualPieces.push(newPiece);

    localStorage.setItem("pieces", JSON.stringify(actualPieces));
    setFormData(initialPiece);
    alert("¡Pieza creada!");
  };

  return (
    <div className="container">
      <h2>Crear nueva pieza</h2>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          name="name"
          minLength={4}
          placeholder="Nombre de la pieza"
          value={formData?.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="material"
          minLength={3}
          placeholder="Material de la pieza"
          value={formData?.material}
          onChange={handleChange}
        />
        <input
          type="number"
          min={0}
          name="ancho"
          placeholder="Ancho de la pieza (mm)"
          value={formData?.ancho}
          onChange={handleChange}
        />
        <input
          type="number"
          min={0}
          name="largo"
          placeholder="Largo de la pieza (mm)"
          value={formData?.largo}
          onChange={handleChange}
        />
        <select name="tipo" value={formData.tipo} onChange={handleChange}>
          <option value={""}>Seleccione un tipo de material</option>
          {Object.entries(EPieceTypes).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        <button className="btn btn-success" type="submit">
          Crear
        </button>
      </form>
    </div>
  );
};
