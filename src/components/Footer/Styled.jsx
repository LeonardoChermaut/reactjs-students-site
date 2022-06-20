import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  height: 80px;
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, rgb(57, 28, 57) 33%, #4f0606 100%);
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
`;

export const MyTextFooter = styled.p`
  text-align: center;

  font-size: 17px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #fff;
`;

export const InstaIcon = styled(InstagramIcon)`
  && {
    color: #fff;
    width: 18px;
  }
`;
export const InIcon = styled(LinkedInIcon)`
  && {
    color: #fff;
    width: 18px;
  }
`;
export const MailIcon = styled(EmailIcon)`
  && {
    color: #fff;
    width: 18px;
  }
`;
export const NetworkTitleFooter = styled.p``;
