import { createContext } from "react";
import { ITodo } from "../class/TodoInterface";

interface ITodoContext {
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
}

export const TodosContext = createContext<ITodoContext>(null!);
