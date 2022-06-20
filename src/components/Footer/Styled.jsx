import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, rgb(57, 28, 57) 33%, #4f0606 100%);
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
`;

export const MyTextFooter = styled.p`
  position: absolute;
  margin-left: -3.5rem;
  text-align: center;
  justify-content: end;
  margin-top: 4.5rem;
  font-size: 8px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #fff;
`;
export const NetworkTitleFooter = styled.p`
  text-align: center;
  display: flex;
  margin-top: 2rem;
  color: #fff;
`;

export const MyLinkFooter = styled.a`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: orange;
  }
`;
export const InstaIcon = styled(InstagramIcon)`
  && {
    color: #fff;
    width: 18px;
    padding: 0;
    margin-left: 3px;
    margin-top: -2.5px;
    margin-bottom: -8px;
  }
`;

export const InIcon = styled(LinkedInIcon)`
  && {
    margin-left: 3px;
    margin-top: -2.5px;
    margin-bottom: -8px;
    color: #fff;
    width: 18px;
  }
`;
export const MailIcon = styled(EmailIcon)`
  && {
    margin-left: 3px;
    margin-top: -2.5px;
    margin-bottom: -8px;
    color: #fff;
    width: 18px;
  }
`;
