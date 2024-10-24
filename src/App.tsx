import { useEffect, useState } from "react";
import "./App.css";
import { Todo } from "./type";
import TodoList from "./TodoList";
import TodoForm from "./Form";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodosData = async () => {
    try {
      const config: RequestInit = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("http://localhost:3001/todos", config);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setTodos(data);
    } catch (err) {
      console.log("error::: ", err);
    }
  };

  const createTask = async (task: string) => {
    const body = {
      text: task
    }
    const config: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    };
    await fetch("http://localhost:3001/todos", config);
  };

  const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      task: {value: string}
    }
    
    await createTask(formElements.task.value);
    
    form.reset(); 

    await getTodosData();
  };

  useEffect(() => {
    getTodosData();
  }, []);

  return (
    <div className="App">
      <h1>TODOS</h1>
      <TodoForm onSubmit={onSubmit} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
