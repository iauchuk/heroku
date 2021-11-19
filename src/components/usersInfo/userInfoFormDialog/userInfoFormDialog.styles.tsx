import { makeStyles } from "@mui/styles";

const styledUserInfoFormDialog = makeStyles({
  dialogWrapper: {
    "& .MuiDialog-paper": {
      background: `white`,
      width: `100%`,
      padding: `20px 30px`,
      "& form": {
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `space-between`,
        height: `100%`,
        textAlign: `center`,
      },
    },
  },
  dialogTitle: {
    "&.MuiTypography-h6": {
      padding: 0,
      "& p": {
        fontSize: "20px",
        padding: 0,
        margin: 0,
      },
    },
  },
  inputWrapper: {
    width: `100%`,
    marginBottom: `24px !important`,
  },
  dialogHead: {
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    marginBottom: `20px`,
    "& button": {
      height: "40px",
      width: "40px",
    },
  },
});

export default styledUserInfoFormDialog;
