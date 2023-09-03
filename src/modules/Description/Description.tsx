import React from "react";
import Layout from "../../components/Layout/Layout";
import { Typography } from "@mui/material";

export const Description = () => {
  return (
    <Layout title="Description: Tools use for these project">
      <div style={{ width: "100%", height: "80vh" }}>
        <Typography variant="body1">
          Welcome to this project, this is a little react app that shows the use
          of the Moveable component. This component allows you to grab any HTML
          or JSX Element and modifies their position or size.
        </Typography>
        <Typography variant="body1">
          It implements a navbar and three modules, Home with the requirements
          of the challenge, Playground where I tried other configurations of the
          library and this module, where you can read about the project
        </Typography>
      </div>
    </Layout>
  );
};
