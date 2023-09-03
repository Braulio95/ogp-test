import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { MAIN_ROUTES } from "./constants/routes";
import { NavBar } from "./components/NavBar/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme/customTheme";
import { Home } from "./modules/Home/Home";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

function App() {
  const [imageURL, setImageURL] = useState("");
  const { HOME, JOBS, CANDIDATES, USERS } = MAIN_ROUTES;
  const navTabs = [
    {
      id: 1,
      label: "Home",
      routePath: HOME,
    },
    {
      id: 2,
      label: "Jobs",
      routePath: JOBS,
    },
    {
      id: 3,
      label: "Candidates",
      routePath: CANDIDATES,
    },
    {
      id: 4,
      label: "Users",
      routePath: USERS,
    },
  ];
  useEffect(() => {
    // Cuando el componente se monta, establece la URL de la imagen
    setImageURL("https://via.placeholder.com/200x200.png?text=Move+me");
  }, [imageURL]);
  console.log(imageURL);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <NavBar pageName="Test" tabItems={navTabs} />
          <Routes>
            <Route element={<Home />} index />
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
