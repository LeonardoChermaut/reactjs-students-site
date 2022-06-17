import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Container } from "@mui/material";

import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

export const MyDeleteIcon = styled(DeleteIcon)`
  && {
    margin-left: 1.4rem;
  }
`;

export const MyTitleTable = styled.h2`
  align-items: center;
  text-align: center;
  color: #5f31b3;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export const ListButton = styled(Button)`
  && {
    margin-top: 1rem;
  }
`;

export const IconForm = styled(FormatListBulletedIcon)`
  && {
    margin-left: 8px;
  }
`;

export const IconRefresh = styled(RestartAltIcon)`
  && {
    margin-left: 5px;
  }
`;

export const MyContainer = styled(Container)`
  && {
  }
`;

export const MyTitleForm = styled.h2`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 19px;
  margin-bottom: 3.5rem;
  margin-top: 1rem;
`;

export const BoxFormStudent = styled(Box)`
  && {
  }
`;

export const InputStudent = styled(Input)`
  && {
    margin-right: 1rem;
  }
`;

export const ImageStudent = styled.img`
  max-width: 400px;
  min-width: 300px;
  display: block;
  margin-top: 2rem;
  margin: 0px auto;
`;

export const MyTitleStudents = styled.p`
  margin-top: 9rem;
  text-align: center;
  font-size: 21px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: #db8711;
`;
