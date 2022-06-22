import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = styled.footer`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  width: 100%;
  height: 100px;
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, rgb(57, 28, 57) 33%, #4f0606 100%);
  position: fixed;
  bottom: 0px;
`;

export const MyTextFooter = styled.p`
  text-align: center;
  margin-left: 5rem;
  margin-top: 1.9rem;
  font-size: 13px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #fff;
`;
export const NetworkTitleFooter = styled.p`
  text-align: center;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const MyLinkFooter = styled.a`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: orange;
  }
`;

export const LiFooter = styled.li`
  list-style: none;
`;
export const UlCustomFooter = styled.ul``;
export const InstaIcon = styled(InstagramIcon)`
  && {
    color: #fff;
    width: 18px;
    padding: 0;
    margin-right: 7px;
    margin-top: -2.5px;
    margin-bottom: -6px;
  }
`;

export const InIcon = styled(LinkedInIcon)`
  && {
    margin-right: 7px;
    margin-top: -2.5px;
    margin-bottom: -6px;
    color: #fff;
    width: 18px;
  }
`;
export const MailIcon = styled(EmailIcon)`
  && {
    margin-right: 7px;
    margin-top: -2.5px;
    margin-bottom: -7px;
    color: #fff;
    width: 18px;
  }
`;
