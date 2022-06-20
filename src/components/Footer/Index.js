import * as React from "react";
import { Footer, InIcon, InstaIcon, MailIcon, MyTextFooter } from "./Styled";

export default function ButtonAppBar() {
  return (
    <Footer>
      <MyTextFooter>
        <InstaIcon />
        <InIcon />
        <MailIcon />
      </MyTextFooter>
      <MyTextFooter>Copyright &copy; serratec.org</MyTextFooter>
    </Footer>
  );
}
