import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import { App } from "./components/App";
import { TaskContextProvider } from "./context/TaskContext";
import "./index.css";
var ghpages = require("gh-pages");

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <TaskContextProvider>
        <App />
    </TaskContextProvider>
);

ghpages.publish("public", function (err) {});
