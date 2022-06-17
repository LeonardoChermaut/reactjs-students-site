import React, { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconForm, ListButton } from "./Styled";
import Container from "@mui/material/Container";

const ariaLabel = { "aria-label": "description" };

const FormApi = () => {
  const [list, setList] = useState([]);
  const [professor_nome, setProfessor_Nome] = useState("");
  const [titulo, setTitulo] = useState("");
  const [resposta, setResposta] = useState(null);

  const getAll = async () => {
    var response = await axios
      .get("https://secret-headland-69654.herokuapp.com/materias/")
      .then((response) => {
        console.log("Everything is awesome.");
      });
    // .catch((error) => {
    //   console.warn("Not good man :(" + error);
    // });

    setList(response.data);
    console.log(response.data);
  };

  const postUser = (e) => {
    e.preventDefault();
    const postBodyRequest = {
      titulo,
      professor_nome,
    };
    axios
      .post(
        "https://secret-headland-69654.herokuapp.com/materias/",
        postBodyRequest
      )
      .then((response) => {
        setResposta(response);
      });
  };

  const deletUser = async (id) => {
    const delBodyRequest = {
      id,
      titulo,
      professor_nome,
    };

    await axios.delete(
      "https://secret-headland-69654.herokuapp.com/materias/",
      delBodyRequest
    );
    setList((oldList) =>
      oldList.filter(
        (item) =>
          item.id !== id ||
          item.titulo !== titulo ||
          item.nome !== professor_nome
      )
    );
  };

  return (
    <Container
      maxWidth="md"
      style={{ height: 400, width: "100%", marginTop: "5rem" }}
    >
      <ListButton className="ListButton" onClick={getAll}>
        Listar Api
        <IconForm />
      </ListButton>

      {list.map((itens) => (
        <>
          <table style={{ border: "1px solid", width: "100%" }}>
            <li key={itens.id}>
              {Object.entries(itens).map(([id, titulo]) => (
                <li>
                  {`${id}, ${titulo}, ${professor_nome}`}
                  <Button onClick={() => deletUser(itens.id, itens.titulo)}>
                    <DeleteIcon />
                  </Button>
                </li>
              ))}
            </li>
          </table>
        </>
      ))}
      <Box
        component="form"
        onSubmit={postUser}
        sx={{
          "& > :not(style)": { m: 1 },
          marginTop: 10,
        }}
        noValidate
        autoComplete="off"
      >
        <Input
          placeholder="Titulo"
          inputProps={ariaLabel}
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <Input
          placeholder="Nome do professor"
          inputProps={ariaLabel}
          value={professor_nome}
          onChange={(e) => setProfessor_Nome(e.target.value)}
        />
        {resposta && resposta.data.message && <h4>{resposta.data.message}</h4>}
        <Button type="Submit" variant="contained" endIcon={<SendIcon />}>
          Enviar
        </Button>
      </Box>
    </Container>
  );
};

export default FormApi;
