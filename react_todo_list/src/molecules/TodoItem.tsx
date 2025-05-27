import { useState, type ChangeEvent } from "react";
import styled from "@emotion/styled";
import type { Todo } from "../types/todo";
import { TodoButton } from "../atoms/TodoButton";

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

type TodoItemProps = {
  todo: Todo;
  onChangeTodoCheck: (id: number) => void;
  onSaveEditTodo: (id: number, newText: string) => void;
  onClickEditTodo: (id: number) => void;
  onClickDeleteTodo: (id: number) => void;
};

export const TodoItem = (props: TodoItemProps) => {
  const {
    todo,
    onChangeTodoCheck,
    onSaveEditTodo,
    onClickEditTodo,
    onClickDeleteTodo,
  } = props;

  const [editingText, setEditingText] = useState(todo.text);

  const handleSave = () => {
    onSaveEditTodo(todo.id, editingText);
  };

  return (
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
            value={editingText}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEditingText(e.target.value)
            }
          />
          <TodoButton type="save" onClick={handleSave}>
            保存
          </TodoButton>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <TodoButton type="edit" onClick={() => onClickEditTodo(todo.id)}>
            編集
          </TodoButton>
          <TodoButton type="delete" onClick={() => onClickDeleteTodo(todo.id)}>
            削除
          </TodoButton>
        </>
      )}
    </STodoListLi>
  );
};
