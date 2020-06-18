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

const Cotizacion = ({ dataCotiza }) => {
  const { dataCotizacion, setDataCotizacion } = dataCotiza;
  const { done, cotizacion, data } = dataCotizacion;
  const { marca, year, plan } = data;

  const handleClick = () => {
    setDataCotizacion({
      data: {},
      cotizacion: "",
      done: false,
    });
  };

  if (!done) return null;

  return (
    <Fragment>
      <Formu>
        <TextCotizacion>Cotizacion</TextCotizacion>
        <p>Marca : {marca}</p>
        <p>Año : {year}</p>
        <p>Plan : {plan}</p>
        <p>
          <strong>Cotizacion : </strong>
          {cotizacion}
        </p>
        <Button
          variant="primary"
          type="button"
          style={{ width: "100%" }}
          onClick={handleClick}
        >
          Ok
        </Button>
      </Formu>
    </Fragment>
  );
};

export default Cotizacion;
