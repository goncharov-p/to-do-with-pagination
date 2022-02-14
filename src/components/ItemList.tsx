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

  const countItem = todos.length ? Math.ceil(todos.length / 3) : 1;

  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const lastIndex = page * 3;
  const firstIndex = lastIndex - 3;
  const currentPage = todos.slice(firstIndex, lastIndex);

  return (
    <div>
      <Box sx={{ m: "auto", maxWidth:'800px' }}>
        {currentPage.map((element: any) => (
          <ItemTodos
            {...element}
            key={element.id}
            check={check}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
        <Box sx={{ display:'flex',justifyContent:'flex-end',width:'100%'}}>
          <Pagination
            count={countItem}
            defaultPage={1}
            siblingCount={1}
            boundaryCount={1}
            onChange={handleChange}
            sx={{ display: "flex", justifyContent: "flex-end" }}
            color="primary"
            size="small"
          />
        </Box>
      </Box>
    </div>
  );
};

