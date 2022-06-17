import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import { IconRefresh } from "../Form/Styled";
import { MyDeleteIcon, MyTitleTable } from "./Styled";
// import { useEffect } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "fullName",
    headerName: "Nome Completo",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "age",
    headerName: "Idade",
    type: "number",
    width: 60,
  },
  {
    field: "team",
    headerName: "Grupo",
    sortable: false,
    width: 80,
  },
  {
    field: "fundation",
    headerName: "Residência",
    width: 420,
  },
];

const linhas = [
  {
    id: 1,
    lastName: "Chermaut",
    firstName: "Leonardo",
    age: 25,
    team: "Grupo 2",
    fundation: "Serratec - Residência em TIC/Software",
  },
  {
    id: 2,
    lastName: "Quessada",
    firstName: "Thais ",
    age: 30,
    team: "Grupo 2",
    fundation: "Serratec - Residência em TIC/Software",
  },
  {
    id: 3,
    lastName: "Ritchele",
    firstName: "Matheus",
    age: 23,
    team: "Grupo 2",
    fundation: "Serratec - Residência em TIC/Software",
  },
  {
    id: 4,
    lastName: "Santos",
    firstName: "Douglas",
    age: 27,
    team: "Grupo 2",
    fundation: "Serratec - Residência em TIC/Software",
  },
  {
    id: 5,
    lastName: "Ribeiro",
    firstName: "Rodrigo",
    age: 30,
    team: "Grupo 2",
    fundation: "Serratec - Residência em TIC/Software",
  },
  {
    id: 6,
    lastName: "Canto",
    firstName: "Ana",
    age: 30,
    team: "Grupo 2",
    fundation: "Serratec - Residência em TIC/Software",
  },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  const [rows, setRows] = useState(linhas);
  const [linhasSelecionadas, setlinhasSelecionadas] = useState([]);
  // const [loading, setLoading] = useState(true);

  const deletList = (ids) => {
    setRows(rows.filter((user) => !linhasSelecionadas.includes(user.id)));
  };

  return (
    <Container
      maxWidth="md"
      style={{ height: 400, width: "100%", marginTop: "7rem" }}
    >
      <MyTitleTable>Tabela em Memória</MyTitleTable>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(ids) => {
          setlinhasSelecionadas(ids);
        }}
      />
      <Button onClick={() => deletList()}>
        Excluir
        <MyDeleteIcon />
      </Button>
      <Button href="http://localhost:3000/">
        ATUALIZAR
        <IconRefresh />
      </Button>
    </Container>
  );
}
