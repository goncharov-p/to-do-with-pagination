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
import { useState,useContext } from "react";
import { TodoTypes } from "/home/user/todo-tS/to-do/src/class/TodoInterface";
import { Context } from "./context/count-context";


const App: React.FC = () => {
  const [newTaskText, setNewTaskText] = useState("");
  // const [todos, setTodos] = useState<TodoTypes[]>([]);
const {todos, setTodos}=useContext(Context);
  const AddTask = () => {
    if (newTaskText) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTaskText, complete: false },
      ]);
      setNewTaskText("");
    }
  };

  const check = (id: number): void => {
    setTodos(
      todos.map((element:any) => {
        if (element.id !== id) return element;
        return {
          ...element,
          complete: !element.complete,
        };
      })
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((element:any) => element.id !== id));
  };

  const editTodo = (id: number, textEdit: string): void => {
    setTodos(
      todos.map((elem:any) => {
        if (elem.id !== id) {
          return elem;
        } else {
          return { ...elem, text: textEdit };
        }
      })
    );
  };

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
            value={newTaskText}
            fullWidth
            onChange={(e) => setNewTaskText(e.target.value)}
          />
          <Box textAlign="center">
            <Button variant="contained" sx={{ mt: 2 }} onClick={AddTask}>
              Add
            </Button>
          </Box>
        </CardContent>
      </Card>
      <ItemList
        // items={todos}
        check={check}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default App;
