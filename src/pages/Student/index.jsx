import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import {
  IconForm,
  ListButton,
  MyContainer,
  MyTitleForm,
  MyTitleStudents,
  MyDeleteIcon,
  BoxFormStudent,
  InputStudent,
  ImageStudent,
} from "../Student/Styled";
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
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [idade, setIdade] = useState("");
  const [resposta, setResposta] = useState(null);

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
    await axios.delete("https://secret-headland-69654.herokuapp.com/alunos/", {
      data: delBodyRequest,
    });

    setList((oldList) => oldList.filter((item) => item.id));
  };

  return (
    <MyContainer
      position="static"
      maxWidth="md"
      style={{ height: 400, width: "100%", marginTop: "5rem" }}
    >
      <MyTitleStudents>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia culpa
        eligendi corrupti rerum maiores. Sit, veritatis? Hic, quos amet expedita
        illo tempora unde nemo. Magni sint nostrum sunt tenetur dolor.
      </MyTitleStudents>
      <ImageStudent src="https://cdni.iconscout.com/illustration/premium/thumb/online-study-2710520-2261196.png" />
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
                    <strong>Idade</strong>
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
                  <TableCell align="center">{itens.nome}</TableCell>
                  <TableCell align="center">{itens.cidade}</TableCell>
                  <TableCell align="center">{itens.idade}</TableCell>
                  <TableCell align="center">
                    <Button onClick={() => deleteUser(itens.id)}>
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
        {resposta && resposta.data.message && <h4>{resposta.data.message}</h4>}
        <Button type="Submit" variant="contained" endIcon={<SendIcon />}>
          Enviar
        </Button>
      </BoxFormStudent>
    </MyContainer>
  );
};

export default Students;
