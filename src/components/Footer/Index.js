import * as React from "react";
import {
  Footer,
  InIcon,
  InstaIcon,
  MailIcon,
  LiFooter,
  MyLinkFooter,
  MyTextFooter,
  UlCustomFooter,
} from "./Styled";

export default function ButtonAppBar() {
  return (
    <Footer>
      <UlCustomFooter>
        <LiFooter>
          <InstaIcon />
          <MyLinkFooter href="#">Follow</MyLinkFooter>
        </LiFooter>
        <LiFooter>
          <InIcon />
          <MyLinkFooter href="#">Connect with us</MyLinkFooter>
        </LiFooter>
        <LiFooter>
          <MailIcon />
          <MyLinkFooter href="#">tabelas@dev.com</MyLinkFooter>
        </LiFooter>
      </UlCustomFooter>
      <MyTextFooter>
        Todos os direitos reservados.<br></br> Copyright &copy; serratec.org
      </MyTextFooter>
    </Footer>
  );
}
