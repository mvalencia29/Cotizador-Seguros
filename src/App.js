import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Topbar from "./components/Topbar";
import Formulario from "./components/Formulario";

const ContenedorFormulario = styled.div`
  justify-content: center;
  display: flex;
  align-content: center;
  position: relative;
`;

function App() {

  

  return (
    <Fragment>
      <Topbar />
      <ContenedorFormulario>
        <Formulario />
      </ContenedorFormulario>
    </Fragment>
  );
}

export default App;
