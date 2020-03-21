/* eslint-disable */
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const styles = ({ breakpoints }) => ({
  root: {
    padding: 16,
    [breakpoints.up("sm")]: {
      padding: 24,
      maxWidth: 500,
      margin: "auto"
    },
    [breakpoints.up("md")]: {
      maxWidth: 700
    }
  }
});

const ContentEx = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant={"overline"}>INTRODUCING</Typography>
    <Typography weight={"bold"} variant={"h4"} gutterBottom>
      Impressum <Link underline={"none"}>KMU vs. Corona</Link>
    </Typography>
    <Typography indent={"small"}>
<br /> 
            Nicolai Semmelmann <br />
            Müllerstr. 27  <br />
            80469 München <br />
            kontakt at kmuvscorona.de
    </Typography>
  </div>
);

ContentEx.propTypes = {};
ContentEx.defaultProps = {};

export default withStyles(styles)(ContentEx);
