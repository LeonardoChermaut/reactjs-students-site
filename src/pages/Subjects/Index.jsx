import React, { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { IconForm, ListButton, MyContainer, MyTitleForm } from "../Styled";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MyDeleteIcon } from "../Styled";
import Navbar from "../../components/Navbar/Index";

const Subjects = () => {
  const [list, setList] = useState([]);
  const [professor_nome, setProfessor_Nome] = useState("");
  const [titulo, setTitulo] = useState("");
  const [resposta, setResposta] = useState(null);

  const getAll = () => {
    var response = axios
      .get("https://secret-headland-69654.herokuapp.com/materias/")
      .then((response) => {
        setList(response.data);
      });
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
      { data: delBodyRequest }
    );

    setList((oldList) => oldList.filter((item) => item.id !== id));
  };

  return (
    <Container
      position="static"
      maxWidth="md"
      style={{ height: 400, width: "100%", marginTop: "5rem" }}
    >
      <ListButton className="ListButton" onClick={getAll}>
        Listar Api
        <IconForm />
      </ListButton>

      {list.map((itens) => (
        <MyContainer>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650, marginTop: 2.5, marginBottom: 2.5 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">
                    <strong>Título</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Nome do professor</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Excluir Matéria</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {itens.id}
                  </TableCell>
                  <TableCell align="center">{itens.titulo}</TableCell>
                  <TableCell align="center">{itens.professor_nome}</TableCell>
                  <TableCell align="center">
                    <Button onClick={() => deletUser(itens.id)}>
                      <MyDeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </MyContainer>
      ))}
      <Box
        component="form"
        onSubmit={postUser}
        sx={{
          marginTop: 10,
        }}
        noValidate
        autoComplete="off"
      >
        <MyTitleForm>Adicionar novas matérias</MyTitleForm>

        <Input
          placeholder="Titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <Input
          placeholder="Nome do professor"
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

export default Subjects;
