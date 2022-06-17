import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import {
  IconForm,
  ListButton,
  MyContainer,
  MyTitleForm,
  MyDeleteIcon,
  BoxFormStudent,
  InputStudent,
} from "../Student/Styled";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";

const ariaLabel = { "aria-label": "description" };

const Students = () => {
  const [list, setList] = useState([]);
  const [aluno_nome, setAluno_Nome] = useState("");
  const [titulo, setTitulo] = useState("");
  const [resposta, setResposta] = useState(null);

  const getAll =
    (() => {
      axios
        .get("https://secret-headland-69654.herokuapp.com/alunos/")
        .then((response) => {
          setList(response.data);
        });
    },
    []);

  const postUser = (e) => {
    e.preventDefault();
    const postBodyRequest = {
      titulo,
      aluno_nome,
    };
    axios
      .post(
        "https://secret-headland-69654.herokuapp.com/alunos/",
        postBodyRequest
      )
      .then((response) => {
        setResposta(response);
      });
  };

  const deleteUser = async (id) => {
    const delBodyRequest = {
      id,
      titulo,
      aluno_nome,
    };
    await axios.delete("https://secret-headland-69654.herokuapp.com/alunos/", {
      data: { delBodyRequest },
    });

    setList((oldList) =>
      oldList.filter(
        (item) =>
          item.id !== id || item.titulo !== titulo || item.nome !== aluno_nome
      )
    );
  };

  return (
    <>
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
                      <Button onClick={() => deleteUser()}>
                        <MyDeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </MyContainer>
        ))}
        <BoxFormStudent
          component="form"
          onSubmit={postUser}
          sx={{
            marginTop: 10,
          }}
          noValidate
          autoComplete="off"
        >
          <MyTitleForm>Adicionar novos alunos</MyTitleForm>

          <InputStudent
            placeholder="Titulo"
            inputProps={ariaLabel}
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <InputStudent
            placeholder="Nome do professor"
            inputProps={ariaLabel}
            value={aluno_nome}
            onChange={(e) => setAluno_Nome(e.target.value)}
          />
          {resposta && resposta.data.message && (
            <h4>{resposta.data.message}</h4>
          )}
          <Button type="Submit" variant="contained" endIcon={<SendIcon />}>
            Enviar
          </Button>
        </BoxFormStudent>
      </Container>
    </>
  );
};

export default Students;
