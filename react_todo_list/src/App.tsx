import "./App.css";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import type { Todo } from "./types/todo";
import { TodoFooter } from "./molecules/TodoFooter";
import { TodoList } from "./molecules/TodoList";
import { NewTodoForm } from "./molecules/NewTodoForm";

const STodoSection = styled.div`
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Array<Todo>>(() => {
    // 初期化時にlocalStorageからデータを取得
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // 保存ボタンの処理
  const onClickCreateTodo = () => {
    const text = inputValue.trim();

    if (text === "") return;
    const newTodo = {
      // 重複を避けるため、Dateで擬似的に一意のidを生成する
      id: Date.now(),
      text: inputValue,
      completed: false,
      editing: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue("");
  };

  // 編集ボタンの処理
  const onClickEditTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, editing: true }
          : { ...todo, editing: false }
      )
    );
  };

  const onSaveEditTodo = (id: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, editing: false } : todo
      )
    );
  };

  const onChangeTodoCheck = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 削除ボタンの処理
  const onClickDeleteTodo = (id: number) => {
    const confirm = window.confirm("本当に削除しますか？");
    if (confirm)
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // リロード時
  useEffect(() => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, editing: false }))
    );
  }, []);

  return (
    <>
      <STodoSection>
        <NewTodoForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          onClickCreateTodo={onClickCreateTodo}
        />
        <TodoList
          todos={todos}
          onChangeTodoCheck={onChangeTodoCheck}
          onSaveEditTodo={onSaveEditTodo}
          onClickEditTodo={onClickEditTodo}
          onClickDeleteTodo={onClickDeleteTodo}
        ></TodoList>
        <TodoFooter todos={todos} />
      </STodoSection>
    </>
  );
}
