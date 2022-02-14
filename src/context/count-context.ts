import React from "react";
import { TodoTypes } from "../class/TodoInterface";

export type ContextTypeTodos = {
  todos: TodoTypes[]
 setTodos: (todos: TodoTypes[]) => void
}


