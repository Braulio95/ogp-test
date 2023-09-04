import React from "react";
import Layout from "../../components/Layout/Layout";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

export const Description = () => {
  return (
    <Layout title="Description: Tools use for these project">
      <div style={{ width: "100%", height: "80vh", padding: "1rem" }}>
        <Typography variant="body1" sx={{ padding: "1rem" }}>
          Welcome to this project, this is a little react app that shows the use
          of the Moveable component. This component allows you to grab any HTML
          or JSX Element and modifies their position or size.
        </Typography>
        <Typography variant="body1" sx={{ padding: "1rem" }}>
          Here you can see the libraries used in this project:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="React" secondary="Front-end library" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Moveable"
              secondary="Component that allows to modify the size and position of an element"
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Material UI" secondary="Design library" />
          </ListItem>
          <Typography variant="body1" sx={{ padding: "1rem" }}>
            The project has three modules, that are the ones you can see in the
            navbar, the Home module shows the main assingment of the challenge,
            the Playground module shows how the Moveable library works with
            other kind of components and the last module is Description, the one
            you are seeing right now.
          </Typography>
        </List>
      </div>
    </Layout>
  );
};
