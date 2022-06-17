import * as React from "react";
import Grid from "@mui/material/Grid";
import { Footer, MyTextFooter } from "./Styled";

export default function ButtonAppBar() {
  return (
    <Grid item xs={12}>
      <Footer>
        <MyTextFooter>Copyright &copy; serratec.org</MyTextFooter>
      </Footer>
    </Grid>
  );
}
