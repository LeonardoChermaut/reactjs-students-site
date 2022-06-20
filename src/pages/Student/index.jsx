import * as React from "react";
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
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import {
  IconForm,
  ListButton,
  MyTitleForm,
  MyTitleStudents,
  MyDeleteIcon,
  BoxFormStudent,
  InputStudent,
  ImageStudent,
  MyContainer,
  MyContainerSub,
  MyTitleTable,
  IconRefresh,
} from "../Student/Styled";
import Form from "../../components/Form/Index";
const ariaLabel = { "aria-label": "description" };

const Students = () => {
  const [list, setList] = useState([]);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [resposta, setResposta] = useState(null);
  const [exibirForm, setExibirForm] = useState(null);

  function refreshPage() {
    window.location.reload();
  }

  const handleEdit = (item) => {
    setExibirForm(item);
  };

  const getAll = () => {
    axios
      .get("https://secret-headland-69654.herokuapp.com/alunos/")
      .then((response) => {
        setList(response.data);
      });
  };

  const postUser = (e) => {
    e.preventDefault();
    const postBodyRequest = {
      nome,
      cidade,
      idade,
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
      nome,
      cidade,
      idade,
    };
    await axios
      .delete("https://secret-headland-69654.herokuapp.com/alunos/", {
        data: delBodyRequest,
      })
      .then((response) => {
        setResposta(response);
        setList((oldList) => oldList.filter((item) => item.id));
      });
  };

  const updateUser = async (item) => {
    const putBodyRequest = {
      id: exibirForm.id,
      nome: item.nome,
      cidade: item.cidade,
      idade: item.idade,
    };
    await axios
      .put("https://secret-headland-69654.herokuapp.com/alunos/", {
        data: putBodyRequest,
      })
      .then((response) => {
        setResposta(response);
        console.log(response);
        setList((oldList) =>
          oldList.map((item) => (item.id === exibirForm.id ? response : item))
        );
      });
  };

  return (
    <MyContainer>
      <MyTitleStudents>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia culpa
        eligendi corrupti rerum maiores. Sit, veritatis? Hic, quos amet expedita
        illo tempora unde nemo. Magni sint nostrum sunt tenetur dolor.
      </MyTitleStudents>
      <ImageStudent src="https://cdni.iconscout.com/illustration/premium/thumb/online-study-2710520-2261196.png" />
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
          <MyTitleForm style={{ textAlign: "center" }}>
            Tabela de alunos
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
                        <strong>Nome</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Cidade</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Idade</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Editar</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Excluir</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {list.map((item) => (
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {item.id}
                        </TableCell>
                        <TableCell align="center">{item.nome}</TableCell>
                        <TableCell align="center">{item.cidade}</TableCell>
                        <TableCell align="center">{item.idade}</TableCell>
                        <TableCell align="center">
                          <Button onClick={() => setExibirForm(item)}>
                            <EditIcon style={{ color: "orange" }} />
                          </Button>
                        </TableCell>
                        <TableCell align="center">
                          <Button onClick={() => deleteUser(item.id)}>
                            <MyDeleteIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {resposta && resposta.data.message && (
                  <MyTitleTable
                    style={{
                      textAlign: "center",
                      fontSize: "15px",
                      color: "#000",
                    }}
                  >
                    {resposta.data.message}
                    <Button onClick={refreshPage}>
                      <IconRefresh />
                    </Button>
                  </MyTitleTable>
                )}
              </TableContainer>
            </MyContainerSub>
            {exibirForm && (
              <Form
                nome={exibirForm.nome}
                cidade={exibirForm.cidade}
                idade={exibirForm.idade}
                putUser={updateUser}
              />
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
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
          placeholder="Nome"
          inputProps={ariaLabel}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <InputStudent
          placeholder="Cidade"
          inputProps={ariaLabel}
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <InputStudent
          placeholder="Idade"
          inputProps={ariaLabel}
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />

        <Button
          style={{ backgroundColor: "orange" }}
          type="Submit"
          variant="contained"
          endIcon={<SendIcon />}
          onClick={refreshPage}
        >
          Enviar
        </Button>
      </BoxFormStudent>
    </MyContainer>
  );
};

export default Students;
