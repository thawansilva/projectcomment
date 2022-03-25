import styled from "styled-components";
const Box = styled.div`
  width: 414px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  border-radius: 10px;
  background-color: #3936c0;
  color: #fff;
  box-shadow: #000;

  img {
    width: 70%;
    margin-top: 2em;
  }

  textarea {
    font-family: "Roboto", sans-serif;
    width: 342px;
    max-height: 78px;
    margin-top: 50px;
    padding: 5px;
    border-radius: 10px;
  }
`;
const Button = styled.button`
  color: #fff;
  width: 342px;
  height: 64px;
  background: ${(props) => (props.isOn ? "#000" : "#333")};
  border-radius: 10px;
  cursor: pointer;
  margin: 20px 8px;
`;
const List = styled.ul`
  li {
    width: 342px;
    height: 30px;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.14);
    color: #fff;
    padding: 5px;
  }
`;
export { Box, Button, List };
