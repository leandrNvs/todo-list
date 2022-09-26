import useTodos from "../../features/todos/todos.context";
import {
   delTodo,
   editTodo,
   toggleDoneTodo,
} from "../../features/todos/todos.reducer";
import { Todos } from "../../features/todos/todos.type";
import { Filter } from "../../types/filter.type";
import {
   Check,
   Icon,
   IconContainer,
   TodoItem,
   TodoListForm,
} from "./listTodos.style";
import { BiTrash, BiEditAlt } from "react-icons/bi";
import React, { Fragment, useEffect, useRef, useState } from "react";

type ListTodosProps = {
   filter: Filter;
};

const useApplyFilter = (fltr: Filter, todos: Todos) => {
   switch (fltr) {
      case "all":
         return todos;
      case "pending":
         return todos.filter((item) => item.isDone === false);
      case "completed":
         return todos.filter((item) => item.isDone === true);
   }
};

const initialEdit = {
   edit: false,
   id: 0,
   todo: "",
};

export const ListTodos = ({ filter }: ListTodosProps) => {
   const { todos, dispatch } = useTodos();
   const filteredTodos = useApplyFilter(filter, todos);
   const [edit, setEdit] = useState(initialEdit);
   const editInput = useRef<null | HTMLInputElement>(null);

   const enableEdit = (id: number, todo: string) => {
      setEdit({
         edit: true,
         id,
         todo,
      });
   };

   const handleChange = (id: number) => {
      dispatch(toggleDoneTodo(id));
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (edit.todo) {
         dispatch(editTodo(edit.id, edit.todo));
         setEdit(initialEdit);
      }
   };

   useEffect(() => {
      editInput.current?.focus();
   }, [edit.edit]);

   return (
      <TodoListForm onSubmit={handleSubmit}>
         {todos.length < 1 && <h2>You don't have tasks.</h2>}
         {filteredTodos.map((todo) => (
            <TodoItem key={todo.id}>
               {edit.edit && edit.id === todo.id ? (
                  <input
                     type="text"
                     value={edit.todo}
                     onChange={(e) =>
                        setEdit((t) => ({ ...t, todo: e.target.value }))
                     }
                     onBlur={() => setEdit(initialEdit)}
                  />
               ) : (
                  <Fragment>
                     <input
                        ref={editInput}
                        type="checkbox"
                        checked={todo.isDone}
                        onChange={() => handleChange(todo.id)}
                     />
                     <Check isDone={todo.isDone}>{todo.todo}</Check>
                  </Fragment>
               )}
               <IconContainer>
                  <Icon onClick={() => enableEdit(todo.id, todo.todo)}>
                     <BiEditAlt />
                  </Icon>
                  <Icon onClick={() => dispatch(delTodo(todo.id))}>
                     <BiTrash />
                  </Icon>
               </IconContainer>
            </TodoItem>
         ))}
      </TodoListForm>
   );
};
