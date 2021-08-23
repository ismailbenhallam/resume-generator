import { Typography } from "@material-ui/core";
import MuiLink from "@material-ui/core/Link";
import React from "react";
import { useLocation } from "react-router-dom";
import appName from "../data/site";
import Margin from "./helpers/margin/Margin";

export default function Copyright() {
  const location = useLocation();
  return (
    <Margin value="30px">
      <Typography variant="body1" color="textSecondary" align="center">
        {/* <hr style={{ width: "500px" }} /> */}
        {"Copyright © "}
        <MuiLink color="inherit" href={location.pathname}>
          {appName}
        </MuiLink>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Margin>
  );
}
