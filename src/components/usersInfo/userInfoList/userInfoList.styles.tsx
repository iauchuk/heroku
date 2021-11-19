import { makeStyles } from "@mui/styles";

const styledUserInfoList = makeStyles({
  topLeftGrid: {
    background: "grey",
    borderBottom: "2px solid #aaa",
    borderRight: "2px solid #aaa",
  },
  topRightGrid: {
    background: "grey",
    borderBottom: "2px solid #aaa",
  },
  bottomLeftGrid: {
    background: "grey",
    borderRight: "2px solid #aaa",
  },
  bottomRightGrid: {
    background: "lightgrey",
    "& > div > div": {
      border: "1px solid black",
    },
    "&::-webkit-scrollbar": {
      width: `6px`,
      height: `6px`,
    },
    "&::-webkit-scrollbar-thumb": {
      borderWidth: 0,
      borderRadius: `5px`,
      backgroundColor: `gray`,
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: `darkgray`,
    },

    "&::-webkit-scrollbar-track": {
      borderWidth: 0,
    },
  },
  userInfoElement: {
    "&.MuiListItem-root": {
      display: `flex`,
      flexDirection: `column`,
      alignItems: `flex-start`,
      marginBottom: `40px`,
      backgroundColor: `white`,
      transition: `box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
      border: `1px solid black`,
      borderRadius: `12px`,
      boxShadow: ` rgb(0 0 0 / 20%) 0px 4px 2px -3px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 2px 4px 0px`,
      padding: `16px`,
      margin: `auto`,
      maxWidth: `75%`,
      minWidth: "500px",
      flexGrow: `1`,
    },
  },
  userInfoContentWrapper: {
    "& span": {
      display: `flex`,
      flexDirection: `row`,
      alignItems: `center`,
    },
  },
});

export default styledUserInfoList;
