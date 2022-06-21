import React from "react";
import { Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { MyInput } from "./Styled";
import { StudentContext } from "../../context";
import { useEffect, useContext } from "react";

const ariaLabel = { "aria-label": "description" };

const Edit = (props) => {
  const [nome, setNome] = React.useState();
  const [cidade, setCidade] = React.useState();
  const [idade, setIdade] = React.useState();
  const {students} = useContext(StudentContext);

  useEffect(() => {
    const studentSelected = students.find(student => student.id === props.id)
    setNome(studentSelected.nome);
    setIdade(studentSelected.idade);
    setCidade(studentSelected.cidade);
  },[]) 

  const submit = (e) => {
    e.preventDefault();
    props.putStudent({ nome, cidade, idade, id: props.id });
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
        type="number"
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

export default Edit;
