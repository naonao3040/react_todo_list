import styled from "@emotion/styled";
import { SaveButton } from "../atoms/SaveButton";

const STodoForm = styled.form`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 0px;
`;

const SNewTodoInput = styled.input`
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  box-sizing: border-box;
  padding: 15px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
`;

type Props = {
  inputValue: string;
  setInputValue: (value: string) => void;
  onClickCreateTodo: () => void;
};

export const NewTodoForm = (props: Props) => {
  const { inputValue, setInputValue, onClickCreateTodo } = props;
  return (
    <>
      <STodoForm>
        <SNewTodoInput
          type="text"
          placeholder="タスクを入力してください"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SaveButton onClick={onClickCreateTodo}>保存</SaveButton>
      </STodoForm>
    </>
  );
};
