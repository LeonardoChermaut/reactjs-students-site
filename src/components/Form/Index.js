import React from "react";
import { Input, Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const ariaLabel = { "aria-label": "description" };

const Form = (props) => {
  const [nome, setNome] = React.useState(props.nome);
  const [cidade, setCidade] = React.useState(props.cidade);
  const [idade, setIdade] = React.useState(props.idade);
  const enviar = (e) => {
    e.preventDefault();
    props.putUser({ nome, cidade, idade });
  };

  return (
    <Box
      component="form"
      onSubmit={enviar}
      sx={{
        marginTop: 10,
      }}
      noValidate
      autoComplete="off"
    >
      <h4></h4>

      <Input
        placeholder="Nome"
        inputProps={ariaLabel}
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <Input
        placeholder="Cidade"
        inputProps={ariaLabel}
        value={cidade}
        onChange={({ target }) => setCidade(target.value)}
      />
      <Input
        placeholder="Idade"
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
        Enviar
      </Button>
    </Box>
  );
};

export default Form;
