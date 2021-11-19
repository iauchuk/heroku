import React from "react";
import { styled } from "@mui/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const CustomTooltip = styled(({ className, ...props }: any) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: `100%`,
    backgroundColor: `black`,
  },
});

export default CustomTooltip;
