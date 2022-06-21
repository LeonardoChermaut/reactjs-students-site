import React from "react";
import { Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { MyInput } from "./Styled";

const ariaLabel = { "aria-label": "description" };

const Form = (props) => {
  //Essa informações devem vir do estado compartilhado
  const [nome, setNome] = React.useState(props.nome);
  const [cidade, setCidade] = React.useState(props.cidade);
  const [idade, setIdade] = React.useState(props.idade);
  const submit = (e) => {
    e.preventDefault();
    props.putStudent({ nome, cidade, idade, id:props.id });
  };

  return (
    <Box
      component="form"
      onSubmit={submit}
      sx={{
        marginTop: 10,
      }}
      noValidate
      autoComplete="off"
    >
      <MyInput
        placeholder="Name"
        inputProps={ariaLabel}
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <MyInput
        placeholder="City"
        inputProps={ariaLabel}
        value={cidade}
        onChange={({ target }) => setCidade(target.value)}
      />
      <MyInput
        placeholder="Age"
        inputProps={ariaLabel}
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />

      <Button
        style={{ backgroundColor: " orange " }}
        type="Submit"
        variant="contained"
        endIcon={<SendIcon />}
      >
        Update
      </Button>
    </Box>
  );
};

export default Form;
