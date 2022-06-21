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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import {
  IconRefresh,
  IconForm,
  MyContainer,
  MyTitleForm,
  BoxFormSubject,
  InputSubject,
  ImageSubject,
  MyTitleSubject,
  MyContainerSub,
  MyDeleteIcon,
} from "./Styled";
import Form from "./Edit";

const Subjects = () => {
  const [list, setList] = useState([]);
  const [professor_nome, setProfessor_Nome] = useState("");
  const [titulo, setTitulo] = useState("");
  const [resposta, setResposta] = useState(null);
  const [displayForm, setDisplayForm] = useState(null);

  const getAll = () => {
    axios
      .get("https://secret-headland-69654.herokuapp.com/materias/")
      .then((response) => {
        setList(response.data);
      });
  };

  const postSubject = (e) => {
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

  const deleteSubject = async (id) => {
    const delBodyRequest = {
      id,
      titulo,
      professor_nome,
    };
    await axios
      .delete("https://secret-headland-69654.herokuapp.com/materias/", {
        data: delBodyRequest,
      })
      .then((response) => {
        setResposta(response);
      });

    setList((oldList) => oldList.filter((item) => item.id));
  };

  const updateSubject = async (item) => {
    const putBodyRequest = {
      id: displayForm.id,
      titulo: item.titulo,
      professor_nome: item.professor_nome,
    };
    await axios
      .put(
        "https://secret-headland-69654.herokuapp.com/materias/",
        putBodyRequest
      )
      .then((response) => {
        setResposta(response);
        console.log(response);
        setList((oldList) =>
          oldList.map((item) => (item.id === displayForm.id ? response : item))
        );
      });
  };

  function refreshPage() {
    window.location.reload();
  }

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
            Subjects <IconForm />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MyTitleForm
            style={{
              textAlign: "center",
              marginTop: "-1rem",
              marginBottom: "2rem",
            }}
          >
            Subject table
          </MyTitleForm>
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
                      <TableCell>
                        <strong>ID</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Subject</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Teacher's name</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Edit</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Delete</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {list.map((item) => (
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {item.id}
                        </TableCell>
                        <TableCell align="center">{item.titulo}</TableCell>
                        <TableCell align="center">
                          {item.professor_nome}
                        </TableCell>
                        <TableCell align="center">
                          <Button onClick={() => setDisplayForm(item)}>
                            <EditIcon style={{ color: "orange" }} />
                          </Button>
                        </TableCell>
                        <TableCell align="center">
                          <Button onClick={() => deleteSubject(item.id)}>
                            <MyDeleteIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {resposta && resposta.data.message && (
                  <MyTitleSubject
                    style={{
                      textAlign: "center",
                      fontSize: "15px",
                      color: "#000",
                      marginLeft: "3rem",
                      fontWeight: "bold",
                    }}
                  >
                    {resposta.data.message}
                    <Button onClick={refreshPage}>
                      <IconRefresh />
                    </Button>
                  </MyTitleSubject>
                )}
              </TableContainer>
            </MyContainerSub>
            {displayForm && (
              <Form
                titulo={displayForm.titulo}
                professor_nome={displayForm.professor_nome}
                putSubject={updateSubject}
              />
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <BoxFormSubject component="form" onSubmit={postSubject} autoComplete="on">
        <MyTitleForm>Add new subject</MyTitleForm>
        <InputSubject
          placeholder="Title"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <InputSubject
          placeholder="Teacher's name"
          value={professor_nome}
          onChange={(e) => setProfessor_Nome(e.target.value)}
        />
        <Button
          style={{ backgroundColor: "orange" }}
          type="Submit"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </BoxFormSubject>
    </MyContainer>
  );
};

export default Subjects;
