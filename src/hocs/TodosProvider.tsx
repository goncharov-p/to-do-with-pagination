import { useState, FC } from "react";
import { ITodo } from "../class/TodoInterface";
import { TodosContext } from "../context/TodosContext";

export const TodosProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};
