import React from "react";
import styled from "styled-components";
import { Navbar } from "react-bootstrap";

const Header = styled(Navbar)`
  background-color: #007bff!important;
  justify-content: center;
  display: flex;
`;

const Topbar = () => {
  return (
    <Header expand="lg">
      <Navbar.Brand style={{ color: "white" }}>
        Cotizador de Seguros
      </Navbar.Brand>
    </Header>
  );
};

export default Topbar;
