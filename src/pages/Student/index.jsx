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
  BoxFormStudent,
  MyDeleteIcon,
  InputStudent,
  MyTitleStudents,
  ImageStudent,
  MyTitleTable,
  MyContainerSub,
} from "./Styled";
import Form from "./Form";
import { useEffect, useContext } from "react";
import Lottie from "react-lottie";
import loadingAnimation from "../../components/Animation/loading.json";
import { StudentContext } from "../../context";

const Students = () => {
  const { students, setStudents } = useContext(StudentContext);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [resposta, setResposta] = useState(null);
  const [displayForm, setDisplayForm] = useState(null);
  const [loading, setLoading] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const getAll = () => {
    axios
      .get("https://secret-headland-69654.herokuapp.com/alunos/")
      .then((response) => {
        setStudents(response.data);
      });
  };

  useEffect(() => {
    if (students.length > 0) {
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    }
  }, [students]);

  const postStudent = (e) => {
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

  const deleteStudent = async (id) => {
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
        setStudents((oldList) => oldList.filter((item) => item.id));
      });
  };

  const updateStudent = async (item) => {
    const putBodyRequest = {
      id: displayForm.id,
      nome: item.nome,
      cidade: item.cidade,
      idade: item.idade,
    };
    await axios
      .put(
        "https://secret-headland-69654.herokuapp.com/alunos/",
        putBodyRequest
      )
      .then((response) => {
        setResposta(response);
        console.log(response);
        setStudents((oldList) =>
          oldList.map((item) => (item.id === displayForm.id ? response : item))
        );
      });
  };

  function refreshPage() {
    window.location.reload();
  }

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
            Students <IconForm />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MyTitleForm style={{ textAlign: "center" }}>
            Table of students
          </MyTitleForm>
          <Typography>
            <MyContainerSub>
              {loading ? (
                <Lottie options={defaultOptions} height={115} width={350} />
              ) : (
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
                          <strong>Name</strong>
                        </TableCell>
                        <TableCell align="center">
                          <strong>City</strong>
                        </TableCell>
                        <TableCell align="center">
                          <strong>Age</strong>
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
                      {students.map((item) => (
                        <TableRow>
                          <TableCell component="th" scope="row">
                            {item.id}
                          </TableCell>
                          <TableCell align="center">{item.nome}</TableCell>
                          <TableCell align="center">{item.cidade}</TableCell>
                          <TableCell align="center">{item.idade}</TableCell>
                          <TableCell align="center">
                            <Button onClick={() => setDisplayForm(item)}>
                              <EditIcon style={{ color: "orange" }} />
                            </Button>
                          </TableCell>
                          <TableCell align="center">
                            <Button onClick={() => deleteStudent(item.id)}>
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
              )}
            </MyContainerSub>
            {displayForm && (
              <Form
                id={displayForm.id}
                nome={displayForm.nome}
                cidade={displayForm.cidade}
                idade={displayForm.idade}
                putStudent={updateStudent}
              />
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <BoxFormStudent component="form" onSubmit={postStudent} autoComplete="on">
        <MyTitleForm>Add new student</MyTitleForm>
        <InputStudent
          placeholder="Name"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <InputStudent
          placeholder="City"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <InputStudent
          placeholder="Age"
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <Button
          style={{ backgroundColor: "orange" }}
          type="Submit"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </BoxFormStudent>
    </MyContainer>
  );
};

export default Students;
