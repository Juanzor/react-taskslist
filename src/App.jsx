import Tasklist from "./components/TaskList";
import TaskForm from "./components/TaskForm";

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
