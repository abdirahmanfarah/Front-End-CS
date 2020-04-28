import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF0000",
    },
    secondary: {
      main: "#FF0000",
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: "Roboto",
    body1: {
      fontSize: "1.5rem",
    },
  },
});

export default theme;
