import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";

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

const Esqueleto = styled(Skeleton)`
  margin-bottom: 14px;
`;

const Loading = ({ loading }) => {
  if (!loading) return null;

  return (
    <Fragment>
      <Formu>
        <Esqueleto
          variant="rect"
          width="100%"
          height={50}
          style={{ marginBottom: "20px" }}
          animation="wave"
        />
        <Esqueleto variant="rect" animation="wave" width="100%" height={22} />
        <Esqueleto variant="rect" animation="wave" width="100%" height={22} />
        <Esqueleto variant="rect" animation="wave" width="100%" height={22} />
        <Esqueleto variant="rect" animation="wave" width="100%" height={22} />
        <Esqueleto variant="rect" animation="wave" width="100%" height={40} />
      </Formu>
    </Fragment>
  );
};

export default Loading;
