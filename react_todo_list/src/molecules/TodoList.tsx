import styled from "@emotion/styled";
import type { Todo } from "../types/todo";
import { TodoButton } from "../atoms/TodoButton";

const STodoList = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const STodoListLi = styled.li`
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  padding: 15px;

  &:last-child {
    border-bottom: none;
  }

  input[type="checkbox"] {
    width: 40px;
    height: auto;
    margin: auto 0;
    border: none;
  }
`;

const SEditToodoInput = styled.input`
  border: none;
  font-size: 24px;
  color: #4d4d4d;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const TodoList = (props: any) => {
  const {
    todos,
    onChangeTodoCheck,
    onChangeTodo,
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
            <STodoListLi key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onChangeTodoCheck(todo.id)}
              />
              {todo.editing ? (
                <>
                  <SEditToodoInput
                    type="text"
                    value={todo.text}
                    onChange={(e) => onChangeTodo(e, todo.id)}
                  />
                  <TodoButton
                    type="save"
                    onClick={() => onSaveEditTodo(todo.id, todo.text)}
                  >
                    保存
                  </TodoButton>
                </>
              ) : (
                <>
                  <span>{todo.text}</span>
                  <TodoButton
                    type="edit"
                    onClick={() => onClickEditTodo(todo.id)}
                  >
                    編集
                  </TodoButton>
                  <TodoButton
                    type="delete"
                    onClick={() => onClickDeleteTodo(todo.id)}
                  >
                    削除
                  </TodoButton>
                </>
              )}
            </STodoListLi>
          ))
        )}
      </ul>
    </STodoList>
  );
};
