import { usePublicJson } from "../hooks";
import { TMaterial } from "../types/material.type";

const MaterialList: React.FC = () => {
  const {
    data: materials,
    isLoading,
    error,
  } = usePublicJson<TMaterial>("materials");
  // '/materials.json' es la url de la ruta

  //Esto se puede manejar enviando una toast, un alert o de otra manera
  if (error) return <>{error}</>;

  return (
    <div>
      <h1>Listado de Materiales</h1>
      {isLoading ? (
        <p>Cargando ...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Espesor</th>
              <th>Texturas</th>
              <th>Medidas (mm)</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((material, index) => (
              <tr key={index}>
                <td>{material.name}</td>
                <td>{material.price}</td>
                <td>{material.espesor}</td>
                <td>
                  <img
                    width="50"
                    height="50"
                    src={material.textura}
                    alt="Textura"
                  />
                </td>
                <td>
                  {material.ancho}x{material.largo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MaterialList;
