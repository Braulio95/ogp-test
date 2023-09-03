// Import the createTheme function from the Material-UI library
import { createTheme } from '@mui/material/styles';
import { CSSProperties } from 'react';
// Import all colors from a local file
import * as colors from '../partials/colors';
import { Spacings, spacingScale } from '../partials/spacings';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        'body1-medium': CSSProperties;
        'body2-bold': CSSProperties;
        'body2-medium': CSSProperties;
        'caption-bold': CSSProperties;
    } // allow configuration using `createTheme`

    interface TypographyVariantsOptions {
        'body1-medium'?: CSSProperties;
        'body2-bold'?: CSSProperties;
        'body2-medium'?: CSSProperties;
        'caption-bold'?: CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        'body1-medium': true;
        'body2-bold': true;
        'body2-medium': true;
        'caption-bold': true;
    }
}

// Create a theme object with customized palette and component styles
export const theme = createTheme({
    // Customize the color palette of the theme
    palette: {
        // Customize the primary color to use a specific shade of blue
        primary: {
            main: colors.colorPalette.primaryGreen,
        },
        action: {
            disabled: colors.colorPalette.disabledGray2,
        },
    },
    spacing: (factor: number) => `${spacingScale * factor}px`,
    typography: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        h1: {
            fontFamily: 'Rubik',
            fontWeight: 600,
            fontSize: '2rem',
            lineHeight: '40px',
            letterSpacing: '0.01em',
        },
        h2: {
            fontFamily: 'Rubik',
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: '32px',
            letterSpacing: '0em',
        },
        h3: {
            fontFamily: 'Rubik',
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: '24px',
            letterSpacing: '0.01em',
        },
        subtitle1: {
            fontFamily: 'Rubik',
            fontSize: '1rem',
            lineHeight: '24px',
            letterSpacing: '0.002em',
        },
        subtitle2: {
            fontFamily: 'Rubik',
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: '24px',
            letterSpacing: '0.01em',
        },
        body1: {
            fontFamily: 'Rubik',
            fontSize: '1rem',
            lineHeight: '24px',
            letterSpacing: '0.002em',
        },
        body2: {
            fontFamily: 'Rubik',
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: '0.002em',
        },
        'body1-medium': {
            fontFamily: 'Rubik',
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: '24px',
            letterSpacing: '0.002em',
        },
        'body2-medium': {
            fontFamily: 'Rubik',
            fontSize: '0.875rem',
            fontWeight: 600,
            lineHeight: '24px',
            letterSpacing: '0.002em',
        },
        'body2-bold': {
            fontFamily: 'Rubik',
            fontSize: '0.875rem',
            fontWeight: 700,
            lineHeight: '24px',
            letterSpacing: '0.002em',
        },
        button: {
            fontFamily: 'Rubik',
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: '24px',
            letterSpacing: '0.01em',
            textTransform: 'capitalize',
        },
        caption: {
            fontFamily: 'Rubik',
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: '16px',
            letterSpacing: '0.008em',
        },
        overline: {
            fontFamily: 'Rubik',
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: '16px',
            letterSpacing: '0.01em',
        },
        'caption-bold': {
            fontFamily: 'Rubik',
            fontSize: '0.75rem',
            fontWeight: 700,
            lineHeight: '16px',
            letterSpacing: '0.008em',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 360,
            md: 720,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {

        MuiCssBaseline: {
            styleOverrides: {
                input: {
                    '::-webkit-outer-spin-button': {
                        '-webkit-appearance': 'none',
                        margin: 0,
                    },
                    '::-webkit-inner-spin-button': {
                        '-webkit-appearance': 'none',
                        margin: 0,
                    },
                    'input[type=number]': {
                        '-moz-appearance': 'textfield',
                    },
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    minWidth: Spacings.spacing15,
                    fontWeight: 400,
                    height: Spacings.spacing13,
                    padding: Spacings.spacing6,
                    backgroundColor: colors.colorPalette.backgroundWhite,
                    color: colors.colorPalette.paragraphBaseline,
                    '&:hover': {
                        backgroundColor: colors.colorPalette.accentBlue1,
                    },
                    '&:focus-visible': {
                        backgroundColor: colors.colorPalette.accentBlue1,
                        border: `${Spacings.spacing2}px solid ${colors.colorPalette.focusPurple}`,
                    },
                    '&.Mui-selected': {
                        borderBottom: `${Spacings.spacing2}px solid ${colors.colorPalette.primaryGreen}`,
                        color: colors.colorPalette.primaryGreen,
                        fontWeight: 500,
                    },
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    maxHeight: Spacings.spacing13,
                    display: 'flex',
                    alignItems: 'start',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    height: Spacings.spacing13,
                    paddingInline: Spacings.spacing14,
                    backgroundColor: colors.colorPalette.backgroundWhite,
                    color: colors.colorPalette.primaryGreen,
                },
            },
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    'body1-medium': 'p',
                    'body2-medium': 'p',
                    'body2-bold': 'p',
                    'caption-bold': 'p',
                },
            },
        },
    },
});