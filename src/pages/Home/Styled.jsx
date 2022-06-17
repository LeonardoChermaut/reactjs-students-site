import styled from "styled-components";
import { Container } from "@mui/material";

export const MyContainerHome = styled(Container)`
  && {
    display: flex;
    align-content: space-around;
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

export const MyImageHome = styled.img`
  max-width: 400px;
  min-width: 300px;
  display: block;
  margin: 0px auto;
`;

export const MyTitleHome = styled.p`
  margin-top: 9rem;
  text-align: center;
  font-size: 21px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: #db8711;
`;
