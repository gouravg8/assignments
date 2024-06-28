import "./App.css";

interface Todo {
  id: number;
  title: string;
  description: string;
}

const todos: Todo[] = [
  { id: 1, title: "todo1", description: "desc 1" },
  { id: 2, title: "todo2", description: "desc 2" },
  { id: 3, title: "todo3", description: "desc 3" },
];
function App() {
  return (
    <>
      <div>
        <Todo todo={todos} />
      </div>
    </>
  );
}

const Todo = ({ todo }: { todo: Todo[] }) => {
  return (
    <>
      {todo.map((t: Todo) => (
        <p key={t.id}>
          {t.title}, {t.description}
        </p>
      ))}
    </>
  );
};

export default App;
