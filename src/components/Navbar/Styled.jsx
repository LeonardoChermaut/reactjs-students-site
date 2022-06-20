import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import { Button, Typography } from "@mui/material";

export const MyNavbar = styled(AppBar)`
  && {
    background: rgb(61, 29, 121);
  }
`;

export const MyTypography = styled(Typography)`
  &:hover {
    color: orange;
  }
`;

export const MyButtonNav = styled(Button)`
  &:hover {
    color: orange;
    border: none;
  }
`;
