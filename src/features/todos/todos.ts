import { Todo, Todos } from "./todos.type";

export const initialTodosState: Todos = [];

export const createTodo = (todo: string): Todo => ({
   id: Date.now(),
   todo,
   isDone: false,
});
