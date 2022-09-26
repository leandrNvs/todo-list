import { Fragment, useState } from "react";
import { CreateTodos } from "./components/CreateTodos/CreateTodos";
import { FilterTodos } from "./components/FilterTodos/FilterTodos";
import { ListTodos } from "./components/ListTodos/ListTodos";
import { TodosProvider } from "./features/todos/todos.context";
import { Container, GlobalStyle } from "./globalStyle";
import { Filter } from "./types/filter.type";

const App = () => {
   const [filter, setFilter] = useState<Filter>("all");

   return (
      <Fragment>
         <GlobalStyle />
         <TodosProvider>
            <Container as="main">
               <CreateTodos />
               <FilterTodos filter={filter} setFilter={setFilter} />
               <ListTodos filter={filter} />
            </Container>
         </TodosProvider>
      </Fragment>
   );
};

export default App;
