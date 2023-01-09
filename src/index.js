import ReactDom from "react-dom/client";
import { App } from "./App";
import { TaskContextProvider } from "./context/TaskContext";
import "./index.css";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <TaskContextProvider>
        <App />
    </TaskContextProvider>
);
