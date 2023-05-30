import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { Todo, todoTable, NewTodo, db } from "../../../lib/drizzle";
export async function GET(request: NextRequest) {
  try {
    await sql`CREATE TABLE IF NOT EXISTS Todos (id SERIAL, Todos VARCHAR(255));`;

    const res = await db.select().from(todoTable);
    console.log(res);

    return NextResponse.json({ data: res });
  } catch (err) {
    console.log((err as { message: string }).message);
    return NextResponse.json({ message: "Something went wrong" });
  }
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  try {
    if (req.task) {
      const res = db
        .insert(todoTable)
        .values({
          task: req.task,
        })
        .returning();
      console.log(res);
      return NextResponse.json({ message: "Task added successfully" });
    } else {
      throw new Error("task field is required");
    }
  } catch (error) {
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}
