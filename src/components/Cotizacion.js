import React, { useState, Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Formu = styled(Form)`
  width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 23px;
  margin-top: 30px;
  background-color: white;
  box-shadow: rgb(201, 201, 201) 0px 0px 10px 0px;
  text-align: center;
`;

const TextCotizacion = styled.h4`
  margin-bottom: 25px;
`;

const Cotizacion = ({ dataCotizacion }) => {
  const { done } = dataCotizacion;
  if (!done) return null;
  return (
    <Fragment>
      <Formu>
        <TextCotizacion>Cotizacion</TextCotizacion>
        <p>Marca : Americano</p>
        <p>Año : 2010</p>
        <p>Plan : Basico</p>
        <p>
          <strong>Cotizacion : </strong>Americano
        </p>
        <Button variant="primary" type="button" style={{ width: "100%" }}>
          Ok
        </Button>
      </Formu>
    </Fragment>
  );
};

export default Cotizacion;
