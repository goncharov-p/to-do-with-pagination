import AppBar from "@mui/material/AppBar";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { ItemList } from "./components/ItemList";
import { useEffect, useState } from "react";
import { Todo } from "./class/Todo";
import { TodoTypes } from "/home/user/todo-tS/to-do/src/class/TodoInterface";
import { elementAcceptingRef } from "@mui/utils";

const App: React.FC = () => {
  const [value, setValue] = useState("");

  // const Todos: TodoTypes[] = []; массив не работает

  const [todos, setTodos] = useState<TodoTypes[]>([]);

  const todoPush = () => {
    // let todo: TodoTypes = { text: value, complete: false };
    // Todos.push(todo); закоментированный код не работает 
    if (value) {
      setTodos([...todos, { id: Date.now(), text: value, complete: false }]);
      setValue("");
    }
  };

  const check = (id: number): void => {
    setTodos(
      todos.map((element) => {
        if (element.id !== id) return element;
        return {
          ...element,
          complete: !element.complete,
        };
      })
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((element) => element.id != id));
  };

  const editTodo = (id: number, TextEdit: string): void => {
    setTodos(todos.map((elem)=>{
      if(elem.id!==id){return elem}else{
        return{...elem,text:TextEdit}
      }
    }))
  };
  console.log(todos);

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="regular">
          <Typography variant="h5" m="auto" component="div">
            To-Do-list
          </Typography>
        </Toolbar>
      </AppBar>
      <Card sx={{ maxWidth: 800, m: "auto", mt: 2, mb: 4 }}>
        <CardContent>
          <TextField
            id="outlined-basic"
            label="Enter Title"
            variant="outlined"
            value={value}
            fullWidth
            onChange={(e) => setValue(e.target.value)}
          />
          <Box textAlign="center">
            <Button variant="contained" sx={{ mt: 2 }} onClick={todoPush}>
              Add
            </Button>
          </Box>
        </CardContent>
      </Card>
      <ItemList
        items={todos}
        check={check}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default App;
