import styled from "@emotion/styled";

const STodoButton = styled.button`
  position: absolute;
  top: 5px;
  bottom: 0;
  width: 50px;
  height: 40px;
  font-size: medium;
  border: none;
  cursor: pointer;
`;

const SEditButton = styled(STodoButton)`
  right: 55px;
  color: #4caf50;
`;

const SDeleteButton = styled(STodoButton)`
  right: 10px;
  color: #cc9a9a;
`;

const SSaveTodoButton = styled(STodoButton)`
  top: 10px;
  right: 55px;
  color: #00bfff;
`;

type TodoButtonProps = {
  type: "edit" | "delete" | "save";
  onClick: () => void;
  children: React.ReactNode;
};

export const TodoButton = (props: TodoButtonProps) => {
  const { type, children, onClick } = props;

  if (type === "edit") {
    return <SEditButton onClick={onClick}>{children}</SEditButton>;
  } else if (type === "delete") {
    return <SDeleteButton onClick={onClick}>{children}</SDeleteButton>;
  } else {
    return <SSaveTodoButton onClick={onClick}>{children}</SSaveTodoButton>;
  }
};
