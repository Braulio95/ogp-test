import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Hierarchies, Hierarchy } from "../../styles/partials/hierarchies";
import { Spacings } from "../../styles/partials/spacings";
import { NavBarProps } from "../../types/NavBarProps";

export const NavBar = ({ pageName, tabItems }: NavBarProps) => {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const location = useLocation();
  const optionsHierarchy = Hierarchies[Hierarchy.Hierarchy4];

  useEffect(() => {
    if (tabItems && tabItems.length) {
      const activeTabIndex = tabItems.findIndex(
        (tab) => tab.routePath === location.pathname
      );
      setActiveTab(activeTabIndex + 1);
    }
  }, [location.pathname, tabItems]);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLAnchorElement>,
    tabIndex: number
  ) => {
    if (event.key === "Enter") {
      setActiveTab(tabIndex);
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        alignItems: "center",
        boxShadow: `${optionsHierarchy.shadow} rgba(${optionsHierarchy.rgba})`,
        display: "inline-flex",
        minWidth: "min-content",
        width: "100%",
      }}
    >
      <Toolbar sx={{ maxWidth: "1122px", width: "100%" }}>
        <Typography sx={{ alignSelf: "center", flexGrow: 1 }} variant="h3">
          {pageName}
        </Typography>
        <Box
          sx={{
            alignItems: "center",
            display: "inline-flex",
            gap: Spacings.spacing6,
          }}
        >
          {tabItems && tabItems.length && (
            <Tabs
              value={activeTab || tabItems[0].id}
              onChange={(_event, newValue) => setActiveTab(newValue)}
            >
              {tabItems.map(({ id, label, routePath }, index) => (
                <Tab
                  aria-selected={routePath === location.pathname}
                  component={NavLink}
                  disableFocusRipple
                  key={`${index}-${label}`}
                  label={label}
                  ref={(tab) => (tabRefs.current[index] = tab)}
                  sx={{ textTransform: "none" }}
                  tabIndex={0}
                  to={routePath}
                  value={id}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </Tabs>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
