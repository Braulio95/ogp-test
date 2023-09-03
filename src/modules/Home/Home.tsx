import React from "react";
import Layout from "../../components/Layout/Layout";
import MoveableComp from "../../components/Moveable/MoveableComp";
import { Grid } from "@mui/material";

export const Home = () => {
  const elements = [
    <img src="https://via.placeholder.com/200x200.png?text=Move+me!" alt="" />,
  ];
  return (
    <Layout title="Main Page: Movable Image">
      <Grid item md={1}>
        <MoveableComp
          image="https://via.placeholder.com/200x200.png?text=Move+me!"
          children={elements}
        />
      </Grid>
    </Layout>
  );
};
