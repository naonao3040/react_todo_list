import styled from "@emotion/styled";

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

export const SaveButton = (props) => {
  const { children, onClick } = props;
  return <SSaveButton onClick={onClick}>{children}</SSaveButton>;
};
