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

  return (
    <Fragment>
      <Topbar />
      <ContenedorFormulario>
        {loading ? (
          <Cotizacion />
        ) : (
          <Formulario data={{ setDataCotizacion, setLoading }} />
        )}
        {<Cotizacion />}
        {<Loading />}
      </ContenedorFormulario>
    </Fragment>
  );
}

export default App;
