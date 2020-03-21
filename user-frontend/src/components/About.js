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
      Über Uns <Link underline={"none"}>KMU vs. Corona</Link>
    </Typography>
    <Typography gutterBottom>
      <b>Stand: 21.3.2020</b>
    </Typography>
    <Typography indent={"small"}>
      "48 Stunden. Herausforderungen der Bundesregierung und aus der Gesellschaft. Du und theoretisch 80 Millionen andere. Die Covid-19 Krise. Vielfältige Lösungen."
    </Typography>
    <br />
    <img ahref="www.google.de" src="https://wirvsvirushackathon.org/wp-content/uploads/2020/03/12-scaled.jpg" width="40%" height="auto" />
    <br />
    <br />
    <Typography>Unter diesem Motto hat eine Initative der Bundesregierung - nach estnischem Vorbild - zu einem Hackathon für digitale Lösungen zur Bewältigung der Corona Krise aufgerufen.  KMU Vs. Corona ist unser Beitrag: eine Seite die den Kampf der kleinen und mittelständischen Unternehmen gegen die wirtschaftlichen Verwerfungen durch die Krise unterstützen soll.
  </Typography>

    <br />
    <Typography weight={"bold"} variant={"h5"} gutterBottom>
      {"Was machen wir?"}
    </Typography>
    <Typography gutterBottom>
      I created this because
      <br />
    </Typography>
    <Typography component={"div"}>
      <ol>
        <li>
          It took me a lot of time to initialize dashboard layout when I have
          new projects and I’m sure that a lot of you guys agree with me.
        </li>
        <li>
          Sometimes it is hard to refactor because the structure is so poor
          because someone isn’t deeply understand what he/she was doing, as a
          result, rewrite the whole layout (it actually happened, at least in my
          experience).
        </li>
        <li>
          Because we need to be fast to let others continue our work, we
          frequently write poor and a lot of code. However, we say we don’t have
          time to fix them. Eventually, spend all day paying technical debts.
        </li>
      </ol>
    </Typography>
    <br />
    <br />
    <br />
    <Typography weight={"bold"} variant={"h5"} gutterBottom>
      Objectives
    </Typography>
    <Typography>
      It must be easy enough to use, however still be able to adjust to compat
      with real word examples and usages. More importantly, it need to follow{" "}
      <Link
        target={"_blank"}
        rel="noopener"
        href={"https://material.io/design/components/navigation-drawer.html#"}
        underline={"none"}
      >
        Material specs
      </Link>{" "}
      since we are 100% based on Material-UI with no other styling libraries.
      Last but not least, responsive is a must.
    </Typography>
    <br />
    <br />
    <br />
    <Typography weight={"bold"} variant={"h5"} gutterBottom>
      Solution
    </Typography>
    <Typography>Separate layout into 5 components</Typography>
    <Typography component={"div"}>
      <ul>
        <li>Root</li>
        <li>Header (AppBar)</li>
        <li>Nav (Drawer)</li>
        <li>Content</li>
        <li>Footer</li>
      </ul>
    </Typography>
    <Typography>
      <b>Root</b> will provide context to other components to sync states across
      them.
    </Typography>
    <Typography>
      <b>Behavior</b> of your layout will be controlled by using config (just a
      plain object) that will be injected to the Root.
    </Typography>
    <Typography>
      <b>Presets</b> is a set of predefined config that I can come up with after
      researching a lot of the real world websites and also the{" "}
      <Link
        href={
          "https://material.io/design/components/navigation-drawer.html#usage"
        }
      >
        official Material specs
      </Link>
    </Typography>
    <br />
    <br />
    <br />
  </div>
);

ContentEx.propTypes = {};
ContentEx.defaultProps = {};

export default withStyles(styles)(ContentEx);
