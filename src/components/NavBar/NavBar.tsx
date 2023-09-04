import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Hierarchies, Hierarchy } from "../../styles/partials/hierarchies";
import { Spacings } from "../../styles/partials/spacings";
import { NavBarProps } from "../../types/NavBarProps";

/**
 * Represents a navigation bar component.
 *
 * @param pageName - The name of the current page.
 * @param tabItems - An array of tab items for rendering navigation tabs.(Optional)
 *                   Each tab item should have an `id`, `label`, and `routePath`.
 */

export const NavBar = ({ pageName, tabItems }: NavBarProps) => {
  //Setting state variables for the tabs
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const location = useLocation();
  const optionsHierarchy = Hierarchies[Hierarchy.Hierarchy4];

  //Function that allows the tabs to work with Enter key
  const handleKeyDown = (
    event: KeyboardEvent<HTMLAnchorElement>,
    tabIndex: number
  ) => {
    if (event.key === "Enter") {
      setActiveTab(tabIndex);
    }
  };

  useEffect(() => {
    // This effect will run when there are changes in location.pathname or tabItems.

    if (tabItems && tabItems.length) {
      // Check if tabItems exist and there is at least one item in the list.

      // Find the index of the tab that matches the current route (location.pathname).
      const activeTabIndex = tabItems.findIndex(
        (tab) => tab.routePath === location.pathname
      );

      // Set the state activeTab to the index of the active tab + 1.
      // +1 because the values for Tabs should be 1-based nor 0 like arrays.
      setActiveTab(activeTabIndex + 1);
    }
  }, [location.pathname, tabItems]);

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
