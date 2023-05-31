"use client";
import react, { useState } from "react";
import Image from "next/image";
import { NewTodo } from "@/lib/drizzle";
import { useRouter } from "next/navigation";

const Bar = () => {
  const [task, setTask] = useState<NewTodo | null>({
    task: "",
  });
  const { refresh } = useRouter();

  const handleSubmit = async () => {
    try {
      if (task) {
        const res = await fetch("/api/todo", {
          method: "POST",
          body: JSON.stringify({
            task: task.task,
          }),
        });
        console.log(res.ok);
        refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(task);
  return (
    <div>
      <form className="w-full flex ">
        <input
          onChange={(e) => setTask({ task: e.target.value })}
          type="text"
          className="w-full rounded-full  px-5 py-3.5 border  focus:outline-secondary"
          placeholder="Write a new task"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="p-5 rounded-full bg-gradient-to-b  from-secondary to-primary"
        >
          <Image
            className=""
            alt="svg image"
            src="/vector.svg"
            width={20}
            height={20}
          />
        </button>
      </form>
    </div>
  );
};
export default Bar;
