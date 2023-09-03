import React from "react";
import Layout from "../../components/Layout/Layout";
import MoveableComp from "../../components/Moveable/MoveableComp";
import { Grid } from "@mui/material";
import { assignUniqueKeys } from "../../utils/assignUniqueKeys";

export const Home = () => {
  const elements = [<img alt="" />];
  return (
    <Layout title="Main Page: Movable Image">
      <Grid item md={1}>
        <MoveableComp
          image="https://via.placeholder.com/200x200.png?text=Move+me!"
          children={assignUniqueKeys(elements)}
        />
      </Grid>
    </Layout>
  );
};
