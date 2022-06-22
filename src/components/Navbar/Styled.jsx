import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import { Button, Typography } from "@mui/material";

export const MyNavbar = styled(AppBar)`
  && {
    background: linear-gradient(90deg, rgb(79, 29, 79) 33%, #352261 100%);
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
