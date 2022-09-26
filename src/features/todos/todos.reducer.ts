import { createTodo, initialTodosState } from "./todos";
import { Todos } from "./todos.type";
import {
   AddTodo,
   ClearAllTodos,
   DelTodo,
   DoneTodo,
   EditTodo,
   ReducerActions as Action,
   TodosActions,
} from "./todosReducer.type";

// ACTION CREATORS
export const addTodo = (todo: string): AddTodo => ({
   type: TodosActions.add,
   payload: todo,
});

export const delTodo = (id: number): DelTodo => ({
   type: TodosActions.del,
   payload: id,
});

export const editTodo = (id: number, todo: string): EditTodo => ({
   type: TodosActions.edit,
   payload: {
      id,
      todo,
   },
});

export const toggleDoneTodo = (id: number): DoneTodo => ({
   type: TodosActions.done,
   payload: id,
});

export const clearAllTodos = (): ClearAllTodos => ({
   type: TodosActions.clear,
});

export const todosReducer = (state: Todos, action: Action): Todos => {
   switch (action.type) {
      case TodosActions.add:
         return [...state, createTodo(action.payload)];
      case TodosActions.del:
         return state.filter((item) => item.id !== action.payload);
      case TodosActions.done:
         return state.map((item) =>
            item.id === action.payload
               ? { ...item, isDone: !item.isDone }
               : item
         );
      case TodosActions.edit:
         const { id, todo } = action.payload;
         return state.map((item) =>
            item.id === id ? { ...item, todo: todo } : item
         );
      case TodosActions.clear:
         return initialTodosState;
      default:
         return state;
   }
};
