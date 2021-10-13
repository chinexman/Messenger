import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import socketClient from 'socket.io-client';
import { theme } from "./themes/theme";
import Routes from "./routes";
import socket from './socket'

function App() {
  const socket1 = socketClient("http://localhost:5001");

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
