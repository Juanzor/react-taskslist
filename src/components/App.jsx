import Tasklist from "./TaskList";
import TaskForm from "./TaskForm";

export const App = () => {
    return (
        <main className="bg-zinc-900 h-screen p-10">
            <div className="container mx-auto">
                <TaskForm />
                <Tasklist />
            </div>
        </main>
    );
};
