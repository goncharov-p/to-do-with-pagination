export interface TodoTypes {
  id: number;
  text: string;
  complete: boolean;
}

type ContextType = {
  todos: TodoTypes[]
  setTodos: (todos: TodoTypes) => void
}
