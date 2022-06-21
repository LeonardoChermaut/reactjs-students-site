import * as React from "react";
import { MyContainer } from "../Subject/Styled";
import { MyImageHome, MyTitleHome } from "./Styled";

const Main = () => {
  return (
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

  );
};

export default Main;
