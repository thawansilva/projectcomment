import React from "react";
import Image from "./img/people.svg";
import { Box, Button, List } from "./styled";

export function App() {
  const [Comment, setComment] = React.useState();
  const [AllComent, setAllComents] = React.useState([]);

  function ChangedText(event) {
    setComment(event.target.value);
  }

  function ClickedButton() {
    if (Comment.length != 0) {
      setAllComents([...AllComent, Comment]);
    }
  }

  return (
    <Box>
      <img src={Image} alt="Picture People" />
      <textarea
        name="text"
        id="text"
        cols="30"
        rows="10"
        placeholder="Digite o comentário"
        onChange={ChangedText}
      ></textarea>
      <Button isOn={Comment} onClick={ClickedButton}>
        Comentar
      </Button>
      <List>
        {AllComent.map((string) => (
          <li className="item" key={string}>
            {string}
          </li>
        ))}
      </List>
    </Box>
  );
}
