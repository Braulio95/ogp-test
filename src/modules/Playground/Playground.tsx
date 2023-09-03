import React from "react";
import Layout from "../../components/Layout/Layout";
import MoveableComp from "../../components/Moveable/MoveableComp";
import { Grid } from "@mui/material";
import { assignUniqueKeys } from "../../utils/assignUniqueKeys";

export const Playground = () => {
  const elements = [<div>Hola mundo</div>, <div>Hola mundo</div>];

  return (
    <Layout title="Playground: Other cases testing">
      <Grid item md={1}>
        <MoveableComp children={assignUniqueKeys(elements)} />
      </Grid>
    </Layout>
  );
};
