import React, { useState, Fragment } from "react";
import { Form, Button, Col } from "react-bootstrap";
import styled from "styled-components";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const Formu = styled(Form)`
  width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 23px;
  margin-top: 30px;
  background-color: white;
  box-shadow: rgb(201, 201, 201) 0px 0px 10px 0px;
`;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Formulario = () => {
  const [dataForm, setDataForm] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState(false);

  const { marca, year, plan } = dataForm;

  const handleChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
    }
  };

  const handleCloseError = () => {
    setError(false);
  };

  const vertical = "top";
  const horizontal = "center";

  return (
    <Fragment>
      <Formu>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Marca</Form.Label>
          <Form.Control as="select" name="marca" onChange={handleChange}>
            <option value=""></option>
            <option value="Americano">Americano</option>
            <option value="Europeo">Europeo</option>
            <option value="Asiatico">Asiatico</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Año</Form.Label>
          <Form.Control as="select" name="year" onChange={handleChange}>
            <option value=""></option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
          </Form.Control>
        </Form.Group>
        <fieldset>
          <Form.Group>
            <Col style={{ textAlign: "center" }}>
              <Form.Check
                inline
                type="radio"
                label="Plan Básico"
                name="plan"
                value="Básico"
                onChange={handleChange}
                checked={plan === "Básico"}
              />
              <Form.Check
                inline
                type="radio"
                label="Plan Completo"
                name="plan"
                value="Completo"
                onChange={handleChange}
                checked={plan === "Completo"}
              />
            </Col>
          </Form.Group>
        </fieldset>
        <Button
          variant="primary"
          type="button"
          onClick={handleClick}
          style={{ width: "100%" }}
        >
          Cotizar
        </Button>
      </Formu>
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={error} autoHideDuration={1200} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error">
          Por favor completar los campos
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default Formulario;
