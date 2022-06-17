import * as React from "react";
import { MyContainer } from "../Styled";
import { MyImageHome, MyTitleHome } from "./Styled";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";

const Main = () => {
  return (
    <BrowserRouter>
    <MyContainer>
      <MyTitleHome>
        Estude de casa, através de nossos sistemas.<br></br>
        Podendo cadastrar suas matérias e suas informações de aluno.
      </MyTitleHome>
      <MyImageHome
        src="https://aaraconsultancy.com/wp-content/uploads/2021/07/no-fees.jpg"
        alt="Ilustração de três moças estudando."
      />
    </MyContainer>
    </BrowserRouter>
  );
};

export default Main;
