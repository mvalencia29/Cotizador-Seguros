import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Topbar from "./components/Topbar";
import Formulario from "./components/Formulario";
import Cotizacion from "./components/Cotizacion";
import Loading from "./components/Loading";

const ContenedorFormulario = styled.div`
  justify-content: center;
  display: flex;
  align-content: center;
  position: relative;
`;

function App() {
  const [dataCotizacion, setDataCotizacion] = useState({
    data: {},
    cotizacion: "",
    done: false,
  });

  const [loading, setLoading] = useState(false);

  const { done } = dataCotizacion;

  return (
    <Fragment>
      <Topbar />
      <ContenedorFormulario>
        <Formulario data={{ setDataCotizacion, setLoading, done, loading  }}  />
        <Cotizacion dataCotiza={{dataCotizacion, setDataCotizacion}}  />
        <Loading loading={loading} />
      </ContenedorFormulario>
    </Fragment>
  );
}

export default App;
