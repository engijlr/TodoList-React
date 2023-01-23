import "./App.css";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function App() {
  return (
    <div className="App">
      <Todo task="hola" />
      <NewTodoForm />
    </div>
  );
}

export default App;
