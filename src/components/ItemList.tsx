import React, { useState, useContext } from "react";
import { ItemTodos } from "./ItemTodos";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";
import { TodosContext } from "../context/TodosContext";

interface ItemListProps {
  check: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, textEdit: string) => void;
}

export const ItemList: React.FC<ItemListProps> = (props) => {
  const { check, deleteTodo, editTodo } = props;
  const { todos, setTodos } = useContext(TodosContext!);

  const countItem = todos.length ? Math.ceil(todos.length / 10) : 1;

  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const lastIndex = page * 10;
  const firstIndex = lastIndex - 10;
  const currentPage = todos.slice(firstIndex, lastIndex);

  return (
    <div>
      <Box sx={{ m: "auto", width: 1000 }}>
        {currentPage.map((element: any) => (
          <ItemTodos
            {...element}
            key={element.id}
            check={check}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
        <Box sx={{ ml: 75, mt: 6 }}>
          <Pagination
            count={countItem}
            defaultPage={1}
            siblingCount={1}
            boundaryCount={1}
            onChange={handleChange}
            sx={{ display: "flex", justifyContent: "flex-end" }}
            color="primary"
          />
        </Box>
      </Box>
    </div>
  );
};
