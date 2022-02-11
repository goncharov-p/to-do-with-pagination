import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from "@mui/material";
import { Context } from './context/count-context';
import { TodoTypes } from "/home/user/todo-tS/to-do/src/class/TodoInterface";


const theme = createTheme({
  palette:{
    primary:{
      main:"#8A2BE2"
    }
  }
});

const Main=() => {
  const [todos, setTodos] = useState<TodoTypes[]>([]);
  return(
  <React.StrictMode>
    <Context.Provider value={{todos, setTodos}}>
  <ThemeProvider theme={theme}>
  <App />
  </ThemeProvider>
    </Context.Provider>
</React.StrictMode>
  )
}

ReactDOM.render(
 <Main/>,
  document.getElementById('root')
);

reportWebVitals();
