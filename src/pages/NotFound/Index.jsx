import React from "react";
import notfound from "../../images/notfound.png";
import { MyDivNotFound, NotFoundImg } from "./Styled";

const NotFound = () => {
  return (
    <MyDivNotFound>
      <NotFoundImg src={notfound} alt="" />
    </MyDivNotFound>
  );
};

export default NotFound;
