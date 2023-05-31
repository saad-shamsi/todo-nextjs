import { Todo } from "@/lib/drizzle";

const getData = async () => {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/todo", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch the data");
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const Todolist = async () => {
  const res: { data: Todo[] } = await getData();
  return (
    <>
      {res.data.map((item) => {
        return (
          <div
            key={item.id}
            className="flex py-4 px-4 items-center gap-3  bg-slate-300 rounded-full "
          >
            {/* circle */}
            <div className="w-3 h-3 rounded-full bg-secondary "></div>
            {/* todo title */}
            <p className="text-lg font-medium">{item.task}</p>
          </div>
        );
      })}
    </>
  );
};
export default Todolist;
