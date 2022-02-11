import React, { useState } from "react";
import { ItemTodos } from "./ItemTodos";
import { TodoTypes } from "/home/user/todo-tS/to-do/src/class/TodoInterface";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";

interface ItemListProps {
  items: TodoTypes[];
  check: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, textEdit: string) => void;
}

export const ItemList: React.FC<ItemListProps> = (props) => {
  const { items, check, deleteTodo, editTodo } = props;
  const countItem = Math.ceil(items.length / 3);

  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const lastIndex = page * 3;
  const firstIndex = lastIndex - 3;
  const currentPage = items.slice(firstIndex, lastIndex);

  return (
    <div>
      <Box sx={{ m: "auto", width: 1000 }}>
        {currentPage.map((element) => (         
          <ItemTodos
            {...element}
            key={element.id}
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
          onChange={handleChange}
          sx={{ ml: 100, mt: 6 }}
          color="primary"
        />
      </Box>
    </div>
  );
};

