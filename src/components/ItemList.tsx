import React, { useState } from "react";
import { ItemTodos } from "./ItemTodos";
import { TodoTypes } from "/home/user/todo-tS/to-do/src/class/TodoInterface";
import Pagination from "@mui/material/Pagination";
<<<<<<< Updated upstream
import {Box} from "@mui/material";
=======
import { Box } from "@mui/material";
import {Ctxt} from "../context/ContextTest"
>>>>>>> Stashed changes


interface ToProps {
  items: TodoTypes[];
  check: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, TextEdit: string) => void;
}

<<<<<<< Updated upstream
const ItemList: React.FC<ToProps> = (props) => {
  const { items, check, deleteTodo, editTodo } = props;
  const countItem =Math.ceil(items.length / 3);
=======
export const ItemList: React.FC<ItemListProps> = (props) => {
  const {  check, deleteTodo, editTodo } = props;
  const {todos, setTodos}=useContext(Ctxt)!; 
  
  const countItem =todos.length? Math.ceil(todos.length / 10):1;
>>>>>>> Stashed changes

  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const lastIndex = page * 3;
  const firstIndex = lastIndex - 3;
  const currentP = items.slice(firstIndex, lastIndex);

  return (
    <div>
     <Box sx={{ m: "auto", width: 1000 }}>
      {currentP.map((element, index) => (
        <ItemTodos
          {...element}
          key={index}
          check={check}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}

      <Pagination
        count={countItem}
        defaultPage={1}
        siblingCount={0}
        boundaryCount={items.length}
        page={page}
        onChange={handleChange} sx={{ml:100,mt:6}}
        color="primary"
      />
      </Box>
    </div>
  );
};
export { ItemList };
