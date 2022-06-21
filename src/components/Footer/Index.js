import * as React from "react";
import {
  Footer,
  InIcon,
  InstaIcon,
  MailIcon,
  MyLinkFooter,
  MyTextFooter,
  NetworkTitleFooter,
} from "./Styled";

export default function ButtonAppBar() {
  return (
    <Footer>
      <NetworkTitleFooter>
        <MyLinkFooter href="#">
          Follow
          <InstaIcon />
        </MyLinkFooter>
      </NetworkTitleFooter>
      <NetworkTitleFooter>
        <MyLinkFooter href="#">
          Connect with us
          <InIcon />
        </MyLinkFooter>
      </NetworkTitleFooter>
      <NetworkTitleFooter>
        <MyLinkFooter href="#">
          tabelas@dev.com
          <MailIcon />
        </MyLinkFooter>
      </NetworkTitleFooter>
      <MyTextFooter style={{ justifyContent: "flex-end" }}>
        <br></br>Copyright &copy; serratec.org
      </MyTextFooter>
    </Footer>
  );
}
