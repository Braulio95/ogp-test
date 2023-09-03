import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import React, { FC } from "react";
import { colorPalette } from "../../styles/partials/colors";
import { Spacings } from "../../styles/partials/spacings";
import { LayoutProps } from "../../types/LayoutProps";

export const Layout: FC<LayoutProps> = ({
  children,
  isTitleLoading,
  referred,
  title,
  onClickBackButton,
}) => {
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
            {isTitleLoading ? (
              <Skeleton height={40} width={320} />
            ) : (
              title && (
                <Box alignItems={"center"} display={"flex"}>
                  <Typography
                    color={colorPalette.paragraphBaseline}
                    marginLeft={onClickBackButton ? Spacings.spacing4 : 0}
                    variant="h2"
                  >
                    {title}
                  </Typography>
                  {referred && (
                    <Box
                      sx={{
                        backgroundColor: colorPalette.accentPurple,
                        borderRadius: `${Spacings.spacing3}px`,
                        height: Spacings.spacing8,
                        marginLeft: Spacings.spacing4,
                        width: "70px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: colorPalette.backgroundWhite,
                          paddingX: Spacings.spacing4,
                          paddingY: Spacings.spacing3,
                          textAlign: "center",
                        }}
                        variant="caption-bold"
                      >
                        Referred
                      </Typography>
                    </Box>
                  )}
                </Box>
              )
            )}
          </Box>
        </Grid>
        {children}
      </Grid>
    </Container>
  );
};

export default Layout;
