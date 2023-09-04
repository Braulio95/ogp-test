import { Box, Container, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { colorPalette } from "../../styles/partials/colors";
import { Spacings } from "../../styles/partials/spacings";
import { LayoutProps } from "../../types/LayoutProps";

/**
 * Represents a layout component.
 *
 * @param children - The content to be rendered within the layout.
 * @param title - The title text for the layout. (Optional)
 */

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid
        columnSpacing={{
          xs: Spacings.spacing4,
          sm: Spacings.spacing6,
          md: Spacings.spacing8,
          lg: Spacings.spacing10,
        }}
        container
        justifyContent="center"
        maxWidth={1280}
        paddingX={{
          xs: Spacings.spacing4,
          sm: Spacings.spacing6,
          md: Spacings.spacing12,
          lg: Spacings.spacing14,
        }}
        rowSpacing={Spacings.spacing6}
      >
        <Grid item xs={12}>
          {/* Page title */}
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
            marginTop={Spacings.spacing8}
            width="100%"
          >
            {title && (
              <Box alignItems={"center"} display={"flex"}>
                <Typography
                  color={colorPalette.paragraphBaseline}
                  marginLeft={0}
                  variant="h2"
                >
                  {title}
                </Typography>
              </Box>
            )}
          </Box>
        </Grid>
        {children}
      </Grid>
    </Container>
  );
};

export default Layout;
