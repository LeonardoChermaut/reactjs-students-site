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
];

const linhas = [
  { id: 1, lastName: "Chermaut", firstName: "Leonardo", age: 25 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 29 },
  { id: 6, lastName: "Melisandre", firstName: "Camila", age: 15 },
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

  // useEffect(() => {
  //   if (rows.length > 0) {
  //     setLoading(false);
  //   }
  // }, [rows]);
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
