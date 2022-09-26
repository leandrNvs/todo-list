import React, { createContext, useContext, useReducer } from "react";
import { initialTodosState } from "./todos";
import { todosReducer } from "./todos.reducer";
import { Todos } from "./todos.type";
import { ReducerActions } from "./todosReducer.type";

type TodosProviderProps = {
   children: React.ReactNode;
};

type TodosContextProps = {
   todos: Todos;
   dispatch: React.Dispatch<ReducerActions>;
};

const TodosContext = createContext({} as TodosContextProps);

export const TodosProvider = ({ children }: TodosProviderProps) => {
   const [todos, dispatch] = useReducer(todosReducer, initialTodosState);

   return (
      <TodosContext.Provider value={{ todos, dispatch }}>
         {children}
      </TodosContext.Provider>
   );
};

const useTodos = () => useContext(TodosContext);

export default useTodos;
