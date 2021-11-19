import { makeStyles } from "@mui/styles";

const styledSpinner = makeStyles({
  spinner: {
    position: `fixed`,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    background: `rgba(0,0,0,0.5)`,
    zIndex: 999,
  },
});

export default styledSpinner;
