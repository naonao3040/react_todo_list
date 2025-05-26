import styled from "@emotion/styled";
import type React from "react";

const SSaveButton = styled.button`
  width: 20%;
  font-size: 24px;
  padding: 16px;
  background-color: #00bfff;
  color: white;
  border: none;
  cursor: pointer;
  height: 70px;
`;

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export const SaveButton = (props: Props) => {
  const { children, onClick } = props;
  return <SSaveButton onClick={onClick}>{children}</SSaveButton>;
};
