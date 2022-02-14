import React, { useState } from "react";
import { Card } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
<<<<<<< Updated upstream
import { Checkbox, Stack, Container, Box, TextField } from "@mui/material";
import { TodoTypes } from "/home/user/todo-tS/to-do/src/class/TodoInterface";
=======
import { Checkbox, Stack, Box, TextField } from "@mui/material";
// import { TodoTypes } from "/home/user/todo-tS/to-do/src/class/TodoInterface";
import { TodoTypes } from "../class/TodoInterface";
>>>>>>> Stashed changes
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import RadioButtonUncheckedSharpIcon from '@mui/icons-material/RadioButtonUncheckedSharp';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Pagination from '@mui/material/Pagination';

interface ElProps extends TodoTypes {
  check: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number,TextEdit:string) => void;

}

const ItemTodos: React.FC<ElProps> = (props) => {
  const { id, text, complete, check, deleteTodo, editTodo } = props;
  const [edit, SetEdit] = useState<boolean>(false);
  const [TextEdit, setTextEdit] = useState("");
  console.log(edit);
  const useStyles = makeStyles({
    field:{
      color:"#8A2BE2",
      }
     
    }
  )
 
 const classes = useStyles()

  return (
    <div>
      <Box sx={{ m: "auto", width: 1000 }}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Stack direction="row">
            <Checkbox icon={<RadioButtonUncheckedSharpIcon sx={{ color:["#8A2BE2"]}}/>} checkedIcon={<CheckCircleSharpIcon sx={{ color:["#8A2BE2"]}}/>} sx={{ mr: 3}} onChange={() => check(id)} />
            {edit ? (
              <TextField
                id="standard-basic"
                label="Отредактируйте текст"
                variant="standard"
                size="small"
                value={TextEdit}
                onChange={(e) => setTextEdit(e.target.value)}
              />
            ) : (
              <p className={classes.field}>{text}</p>
            )}
          </Stack>
          <Stack direction="row" mt="auto" mb="auto">
              {edit?<CheckIcon sx={{ color:["#8A2BE2"]}} onClick = {()=>{editTodo(id,TextEdit);SetEdit(false)}}/>
              :<ModeEditIcon
              sx={{ color:["#8A2BE2"]}}
              onClick={() => {
                SetEdit(true);
                setTextEdit(text);
              }}
            />}
            
            <DeleteForeverIcon onClick={() => deleteTodo(id)} sx={{ mr: 2,color:["#8A2BE2"]}}/>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};
export { ItemTodos };
