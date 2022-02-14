<<<<<<< Updated upstream
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from "@mui/material";
=======
import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material";
import { ContextTest} from "./context/ContextTest";

>>>>>>> Stashed changes

const theme = createTheme({
  palette: {
    primary: {
      main: "#8A2BE2",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
=======
    <ContextTest>
  <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </ContextTest>
  </React.StrictMode>,  

  document.getElementById("root")
>>>>>>> Stashed changes
);

reportWebVitals();
