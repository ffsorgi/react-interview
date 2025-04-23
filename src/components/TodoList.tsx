import { usePublicJson } from "../hooks/";
import { TTask } from "../types";
import { Loading } from "./ui/Loading";

const TodoList: React.FC = () => {
  const { data: tasks, isLoading, error } = usePublicJson<TTask>("tasks");

  //Esto se puede manejar enviando una toast, un alert o de otra manera
  if (error) return <>{error}</>;

  return (
    <>
      <h1>Tareas para completar</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Tarea</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default TodoList;
