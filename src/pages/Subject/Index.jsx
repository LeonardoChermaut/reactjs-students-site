import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MyDeleteIcon } from "./Styled";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import {
  IconForm,
  ListButton,
  MyContainer,
  MyTitleForm,
  BoxFormSubject,
  InputSubject,
  ImageSubject,
  MyTitleSubject,
  MyContainerSub,
} from "./Styled";
const ariaLabel = { "aria-label": "description" };

const Subjects = () => {
  const [list, setList] = useState([]);
  const [professor_nome, setProfessor_Nome] = useState("");
  const [titulo, setTitulo] = useState("");
  const [resposta, setResposta] = useState(null);

  const getAll = () => {
    axios
      .get("https://secret-headland-69654.herokuapp.com/materias/")
      .then((response) => {
        setList(response.data);
      });
  };
  const updateUser = async (id) => {
    const putBodyRequest = {
      id,
      titulo,
      professor_nome,
    };
    await axios
      .put("https://secret-headland-69654.herokuapp.com/alunos/", {
        data: putBodyRequest,
      })
      .then((response) => {
        setResposta(response);
        setList((oldList) => oldList.filter((item) => item.id));
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

    setList((oldList) => oldList.filter((item) => item.id));
  };

  return (
    <MyContainer>
      <MyTitleSubject>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quae
        nulla distinctio suscipit ea ad saepe nesciunt dolores, molestias odit.
        Enim voluptatum velit ipsa quaerat cupiditate, pariatur eveniet
        laboriosam saepe!
      </MyTitleSubject>
      <ImageSubject src="https://media.istockphoto.com/vectors/woman-working-at-night-vector-id1266262293?k=20&m=1266262293&s=612x612&w=0&h=2VxmVd9l3FxFY6jRmiM8nl5fqiVqBM_LQ4M6hgHXX2Q=" />

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={getAll}
        >
          <Typography>
            Listar Api <IconForm />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MyContainerSub>
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
                    {list.map((itens) => (
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {itens.id}
                        </TableCell>
                        <TableCell align="center">{itens.titulo}</TableCell>
                        <TableCell align="center">
                          {itens.professor_nome}
                        </TableCell>
                        <TableCell align="center">
                          <Button
                            onClick={() => (
                              <BoxFormSubject
                                component="form"
                                onSubmit={updateUser}
                                sx={{
                                  marginTop: 10,
                                }}
                                noValidate
                                autoComplete="off"
                              >
                                <InputSubject
                                  placeholder="Titulo"
                                  inputProps={ariaLabel}
                                  value={titulo}
                                  onChange={(e) => setTitulo(e.target.value)}
                                />
                                <InputSubject
                                  placeholder="Nome do professor"
                                  inputProps={ariaLabel}
                                  value={professor_nome}
                                  onChange={(e) =>
                                    setProfessor_Nome(e.target.value)
                                  }
                                />

                                {resposta && resposta.data.message && (
                                  <h4>{resposta.data.message}</h4>
                                )}
                                <Button
                                  onClick={() => updateUser(itens.id)}
                                  type="Submit"
                                  variant="contained"
                                  endIcon={<SendIcon />}
                                >
                                  Enviar
                                </Button>
                              </BoxFormSubject>
                            )}
                          >
                            <EditIcon />
                          </Button>
                        </TableCell>
                        <TableCell align="center">
                          <Button onClick={() => deletUser(itens.id)}>
                            <MyDeleteIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </MyContainerSub>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <BoxFormSubject component="form" onSubmit={postUser} autoComplete="on">
        <MyTitleForm>Adicionar novas matérias</MyTitleForm>

        <InputSubject
          placeholder="Titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <InputSubject
          placeholder="Nome do professor"
          value={professor_nome}
          onChange={(e) => setProfessor_Nome(e.target.value)}
        />
        {resposta && resposta.data.message && <h4>{resposta.data.message}</h4>}
        <Button type="Submit" variant="contained" endIcon={<SendIcon />}>
          Enviar
        </Button>
      </BoxFormSubject>
    </MyContainer>
  );
};

export default Subjects;
