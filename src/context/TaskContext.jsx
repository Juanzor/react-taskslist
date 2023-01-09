import { tasks as data } from "../tasks";
import { useState, useEffect, createContext } from "react";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);
    const createTask = (task) => {
        const array = [
            ...tasks,
            {
                title: task.title,
                description: task.description,
                id: tasks.length,
            },
        ];
        setTasks(array);
    };
    const deleteTask = (id) => {
        const array = tasks.filter((n) => n.id !== id);
        setTasks(array);
    };

    useEffect(() => {
        setTasks(data);
    }, []);

    return (
        <TaskContext.Provider
            value={{
                tasks,
                deleteTask,
                createTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}
