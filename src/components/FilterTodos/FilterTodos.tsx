import React from "react";
import useTodos from "../../features/todos/todos.context";
import { clearAllTodos } from "../../features/todos/todos.reducer";
import { Filter } from "../../types/filter.type";
import { Button, ButtonGroup } from "./filter.style";

type FilterTodosProps = {
   filter: Filter;
   setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};

type BtnProps = {
   filter: Filter;
   filterType: Filter;
   setFilter: React.Dispatch<React.SetStateAction<Filter>>;
   children: string;
};

const Btn = ({ filter, filterType, setFilter, children }: BtnProps) => {
   return (
      <Button
         className={`${filter === filterType ? "active" : ""}`}
         onClick={() => setFilter(filterType)}
      >
         {children}
      </Button>
   );
};

export const FilterTodos = ({ filter, setFilter }: FilterTodosProps) => {
   const filters: Filter[] = ["all", "pending", "completed"];
   const { dispatch } = useTodos();

   return (
      <ButtonGroup>
         {filters.map((item) => (
            <Btn
               key={item}
               filter={filter}
               filterType={item}
               setFilter={setFilter}
            >
               {item}
            </Btn>
         ))}
         <Button primary onClick={() => dispatch(clearAllTodos())}>
            Clear All
         </Button>
      </ButtonGroup>
   );
};
