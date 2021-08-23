import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Switch, withStyles } from "@material-ui/core";
import { useState } from "react";

const DarkModeSwitchBase = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    // border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

const DarkModeSwitch = ({ style }) => {
  const [active, setActive] = useState(localStorage.getItem("darkMode"));
  return (
    <Grid
      component="label"
      container
      alignItems="center"
      spacing={0}
      style={style}>
      <Grid item>
        <FontAwesomeIcon icon={faSun} color="yellow" />
      </Grid>
      <Grid item>
        <Switch
          //   checked={state.checkedC}
          //   onChange={handleChange}
          name="checkedC"
        />
      </Grid>
      <Grid item>
        <FontAwesomeIcon icon={faMoon} color="#0055ff" />
      </Grid>
    </Grid>
  );
};

export default DarkModeSwitch;
