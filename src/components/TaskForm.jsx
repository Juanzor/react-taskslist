import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const value = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        value.createTask({ title, description });
        setTitle("");
        setDescription("");
    };

    return (
        <div className="max-w-md mx-auto">
            <form
                className="bg-slate-800 p-10 mb-4 "
                onSubmit={handleSubmit}
                action=""
            >
            <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>

                <input
                    className="bg-slate-300 p-3 w-full mb-2"
                    placeholder="Tu tarea..."
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    autoFocus={true}
                />
                <textarea
                    className="bg-slate-300 p-3 w-full mb-2"
                    placeholder="Descripcion"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                ></textarea>

                <button className="bg-indigo-800 px-3 py-1 rounded-md mt-4 hover:bg-indigo-700 text-white" type="submit">Agregar</button>
            </form>
        </div>
    );
}

export default TaskForm;
