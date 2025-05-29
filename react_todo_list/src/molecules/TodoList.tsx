import styled from "@emotion/styled";
import type { Todo } from "../types/todo";
import { TodoItem } from "./TodoItem";

const STodoList = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export const TodoList = (props: any) => {
  const {
    todos,
    onChangeTodoCheck,
    onSaveEditTodo,
    onClickEditTodo,
    onClickDeleteTodo,
  } = props;

  return (
    <STodoList>
      <ul>
        {todos.length === 0 ? (
          <p />
        ) : (
          todos.map((todo: Todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onChangeTodoCheck={onChangeTodoCheck}
              onSaveEditTodo={onSaveEditTodo}
              onClickEditTodo={onClickEditTodo}
              onClickDeleteTodo={onClickDeleteTodo}
            />
          ))
        )}
      </ul>
    </STodoList>
  );
};
