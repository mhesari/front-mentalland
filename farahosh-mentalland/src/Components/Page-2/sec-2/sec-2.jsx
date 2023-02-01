import styles from "./sec2.module.css";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { useMinimalSelectStyles } from "@mui-treasury/styles/select/minimal";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Sec3 = () => {
  const [val, setVal] = useState(1);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const minimalSelectClasses = useMinimalSelectStyles();

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon
        className={props.className + " " + minimalSelectClasses.icon}
      />
    );
  };

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
      list: minimalSelectClasses.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Grid container rowSpacing={5}>
          <Grid item md={4} xs={12}>
            <FormControl>
              <Select
                disableUnderline
                classes={{ root: minimalSelectClasses.select }}
                MenuProps={menuProps}
                IconComponent={iconComponent}
                value={val}
                onChange={handleChange}
              >
                <MenuItem value={0}>Principle</MenuItem>
                <MenuItem value={1}>Sketch</MenuItem>
                <MenuItem value={2}>Photoshop</MenuItem>
                <MenuItem value={3}>Framer</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4} xs={12}></Grid>
          <Grid item md={4} xs={12}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Sec3;
