import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Checkbox, Stack, Box, TextField } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import RadioButtonUncheckedSharpIcon from "@mui/icons-material/RadioButtonUncheckedSharp";
import { makeStyles } from "@material-ui/core/styles";
import {ITodo} from "../class/TodoInterface"

interface ItemTodosProps extends ITodo {
  check: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, textEdit: string) => void;
}

const useStyles = makeStyles({
  field: {
    color: "#8A2BE2",
  },
});

export const ItemTodos: React.FC<ItemTodosProps> = (props) => {
  const { check, deleteTodo, editTodo, ...task } = props;
  const [edit, SetEdit] = useState<boolean>(false);
  const [textEdit, setTextEdit] = useState("");

  const classes = useStyles();

  return (
    <div>
      <Box sx={{ m: "auto", width: '100%' }}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Stack direction="row">
            <Checkbox
              icon={
                <RadioButtonUncheckedSharpIcon sx={{ color: ["#8A2BE2"] }} />
              }
              checkedIcon={<CheckCircleSharpIcon sx={{ color: ["#8A2BE2"] }} />}
              sx={{ mr: 3 }}
              onChange={() => check(task.id)}
            />
            {edit ? (
              <TextField
                id="standard-basic"
                label="Отредактируйте текст"
                variant="standard"
                size="small"
                value={textEdit}
                onChange={(e) => setTextEdit(e.target.value)}
              />
            ) : (
              <p className={classes.field}>{task.text}</p>
            )}
          </Stack>
          <Stack direction="row" mt="auto" mb="auto">
            {edit ? (
              <CheckIcon
                sx={{ color: ["#8A2BE2"] }}
                onClick={() => {
                  editTodo(task.id, textEdit);
                  SetEdit(false);
                }}
              />
            ) : (
              <ModeEditIcon
                sx={{ color: ["#8A2BE2"] }}
                onClick={() => {
                  SetEdit(true);
                  setTextEdit(task.text);
                }}
              />
            )}

            <DeleteForeverIcon
              onClick={() => deleteTodo(task.id)}
              sx={{ mr: 2, color: ["#8A2BE2"] }}
            />
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

