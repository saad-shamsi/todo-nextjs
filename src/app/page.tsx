import Image from "next/image";
import Todolist from "./components/Todolist";
import AddTodo from "./components/AddTodo";

export default function Home() {
  return (
    <main
      className=" bg-gradient-to-tr
  from-primary to-secondary h-screen font-semibold text-8xl flex items-center justify-center"
    >
      <div className="px-3 py-4 rounded-lg space-y-4 shadow-lg bg-white w-full  max-w-md">
        {/* @ts-ignore */}
        <Todolist />
        {/* prompt bar */}
        <AddTodo />
        <div className="w-1/2 h-2 bg-black/80 rounded mx-auto mt-5"></div>
      </div>
    </main>
  );
}
