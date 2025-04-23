import MaterialList from "../components/MaterialList";
import PiecesList from "../components/PiecesList";
import { CreatePieceForm } from "../components/CreatePieceForm";
import TodoList from "../components/TodoList";
import "./HomeView.css";

const HomeView: React.FC = () => {
  return (
    <div className="container">
      <TodoList />
      <div className="mt-10" />
      <div className="home-grid">
        <CreatePieceForm />
        <MaterialList />
        <PiecesList />
      </div>
    </div>
  );
};

export default HomeView;
