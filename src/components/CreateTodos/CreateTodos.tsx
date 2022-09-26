import React, { useEffect, useRef, useState } from "react";
import useTodos from "../../features/todos/todos.context";
import { addTodo } from "../../features/todos/todos.reducer";
import { CreateTodosForm, TodosInput } from "./createTodos.style";

const useInputFocus = () => {
   const inputRef = useRef<null | HTMLInputElement>(null);

   useEffect(() => {
      inputRef.current?.focus();
   }, []);

   return inputRef;
};

export const CreateTodos = () => {
   const [todo, setTodo] = useState("");
   const { dispatch } = useTodos();
   const inputRef = useInputFocus();

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (todo) {
         dispatch(addTodo(todo));
         setTodo("");
      }
   };

   return (
      <CreateTodosForm onSubmit={handleSubmit}>
         <TodosInput
            ref={inputRef}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a Task"
         />
      </CreateTodosForm>
   );
};
