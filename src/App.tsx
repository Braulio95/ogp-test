import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { MAIN_ROUTES } from "./constants/routes";
import { NavBar } from "./components/NavBar/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme/customTheme";
import { Home } from "./modules/Home/Home";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Playground } from "./modules/Playground/Playground";

function App() {
  const { HOME, PLAYGROUND, DESCRIPTION } = MAIN_ROUTES;
  const navTabs = [
    {
      id: 1,
      label: "Home",
      routePath: HOME,
    },
    {
      id: 2,
      label: "Playground",
      routePath: PLAYGROUND,
    },
    {
      id: 3,
      label: "Description",
      routePath: DESCRIPTION,
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <NavBar pageName="Test" tabItems={navTabs} />
          <Routes>
            <Route element={<Home />} index />
            <Route element={<Playground />} path={PLAYGROUND} />
          </Routes>
        </Router>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Made by Braulio Estrada" />
        </BottomNavigation>
      </div>
    </ThemeProvider>
  );
}

export default App;
