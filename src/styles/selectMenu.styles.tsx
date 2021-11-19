import { makeStyles } from "@mui/styles";

const styledSelectMenu = makeStyles({
  selectMenu: {
    height: `48px`,
    marginBottom: `24px`,
  },
  selectMenuLabel: {
    "&.MuiInputLabel-root": {
      lineHeight: `inherit`,
    },
  },
});

export default styledSelectMenu;
