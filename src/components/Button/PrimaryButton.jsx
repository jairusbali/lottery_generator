import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const PrimaryButton = ({ name, onClick }) => {
  const classes = useStyles();

  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={onClick}
      className={classes.button}
    >
      {name}
    </Button>
  );
};

export default PrimaryButton;
