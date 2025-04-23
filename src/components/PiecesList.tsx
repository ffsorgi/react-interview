import { ChangeEvent, useEffect, useState } from "react";
import { EPieceTypes } from "../enums";
import { usePublicJson } from "../hooks";
import { TPiece } from "../types";
import { Loading } from "./ui/Loading";

const PiecesList: React.FC = () => {
  const [pieces, setPieces] = useState<TPiece[]>([]);

  const { data, isLoading, error } = usePublicJson<TPiece>("pieces");

  //Esto se puede manejar enviando una toast, un alert o de otra manera
  if (error) return <>{error}</>;

  useEffect(() => {
    if (data) setPieces(data);
  }, [data]);

  const calculate = () => {
    return pieces
      .reduce((total, piece) => {
        const ancho = Number(piece.ancho);
        const largo = Number(piece.largo);
        return total + ancho * largo;
      }, 0)
      .toFixed();
  };

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const filtered =
      value === "TODOS" ? data : data.filter((piece) => piece.tipo === value);
    setPieces(filtered);
  };

  const conditionalStyle = (type: string): string => {
    return type === "CAJON" ? "cajon" : "";
  };

  return (
    <div>
      <h1>Despiece</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div>
            <p>{calculate()}</p>
          </div>
          <select onChange={onSelectChange} defaultValue="TODOS">
            <option value="TODOS">Todos</option>
            {Object.entries(EPieceTypes).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Ancho</th>
                <th>Largo</th>
                <th>Material</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {pieces.map((piece, index) => (
                <tr key={index}>
                  <td className="p-5">{piece.name}</td>
                  <td>{piece.ancho}</td>
                  <td>{piece.largo}</td>
                  <td>{piece.material}</td>
                  <td className={conditionalStyle(piece.tipo)}>{piece.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default PiecesList;
