import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StorePicker from "./storepicker";
import App from "./App";

const Router = () => (
  <BrowserRouter>

    <Routes>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />

    </Routes>
  </BrowserRouter>
)

export default Router;