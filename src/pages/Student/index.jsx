import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
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
} from "../Student/Styled";
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

  const deletUser = async (id) => {
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
                        <strong>Nome</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Cidade</strong>
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
                    {list.map((itens) => (
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {itens.id}
                        </TableCell>
                        <TableCell align="center">{itens.nome}</TableCell>
                        <TableCell align="center">{itens.cidade}</TableCell>
                        <TableCell align="center">{itens.idade}</TableCell>
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
