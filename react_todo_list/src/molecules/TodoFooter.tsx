import styled from "@emotion/styled";
import type { Todo } from "../types/todo";

const STodoFooter = styled.footer`
  color: #777;
  height: 90px;
  padding: 15px 15px;
  border-top: 1px solid #e6e6e6;
`;

type Props = {
  todos: Array<Todo>;
};

export const TodoFooter = (props: Props) => {
  const { todos } = props;
  return (
    <STodoFooter>
      <div>全てのTodoの数: {todos.length}</div>
      <div>完了済み: {todos.filter((todo: Todo) => todo.completed).length}</div>
      <div>未完了: {todos.filter((todo: Todo) => !todo.completed).length}</div>
    </STodoFooter>
  );
};
