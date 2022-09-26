export enum TodosActions {
   add = "add_todo",
   del = "remove_todo",
   edit = "edit_todo",
   done = "toggle_done",
   clear = "clear_all_todos",
}

export type AddTodo = {
   type: TodosActions.add;
   payload: string;
};

export type DelTodo = {
   type: TodosActions.del;
   payload: number;
};

export type EditTodo = {
   type: TodosActions.edit;
   payload: {
      id: number;
      todo: string;
   };
};

export type DoneTodo = {
   type: TodosActions.done;
   payload: number;
};

export type ClearAllTodos = {
   type: TodosActions.clear;
};

export type ReducerActions =
   | AddTodo
   | DelTodo
   | EditTodo
   | DoneTodo
   | ClearAllTodos;
