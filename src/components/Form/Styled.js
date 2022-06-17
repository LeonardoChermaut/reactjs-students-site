import styled from "styled-components";
import { Button } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Container } from "@mui/material";

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
