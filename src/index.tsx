import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material";
import { TodosProvider } from "./hocs/TodosProvider";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8A2BE2",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <TodosProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </TodosProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

reportWebVitals();
