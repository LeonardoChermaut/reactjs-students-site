import React from "react";
import { Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { MyInput } from "./Styled";

const ariaLabel = { "aria-label": "description" };

const Form = (props) => {
    const [professor_nome, setProfessor_Nome] = React.useState(props.professor_nome);
    const [titulo, setTitulo] = React.useState(props.titulo);

    const submit = (e) => {
        e.preventDefault();
        props.putSubject({ professor_nome, titulo, id: props.id });
    };

    return (
        <Box
            component="form"
            onSubmit={submit}
            sx={{
            marginTop: 10,
            }}
            noValidate
            autoComplete="off"
        >
            <MyInput
                placeholder="Title"
                inputProps={ariaLabel}
                value={titulo}
                onChange={({ target }) => setTitulo(target.value)}
            />
            <MyInput
                placeholder="Teacher's name"
                inputProps={ariaLabel}
                value={professor_nome}
                onChange={({ target }) => setProfessor_Nome(target.value)}
            />
            <Button
                style={{ backgroundColor: "orange" }}
                type="Submit"
                variant="contained"
                endIcon={<SendIcon />}
            >
                Update
            </Button>
        </Box>
    );
};

export default Form;
