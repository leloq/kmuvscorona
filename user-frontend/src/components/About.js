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
      Über Uns 
    </Typography>
    <Typography gutterBottom>
    </Typography>
    <Typography fontStyle="italic" >
      "48 Stunden. Herausforderungen der Bundesregierung und aus der Gesellschaft. Du und theoretisch 80 Millionen andere. Die Covid-19 Krise. Vielfältige Lösungen."
    </Typography>
    <br />

    <Typography>Unter diesem Motto hat die <a href="http://wirvsvirushackathon.org" target="_blank">Wir Vs. Virus Hackathon"</a> Initative der Bundesregierung - nach estnischem Vorbild - zu einem Hackathon für digitale Lösungen zur Bewältigung der Corona Krise aufgerufen.  KMU Vs. Corona ist unser Beitrag: eine Seite die den Kampf der kleinen und mittelständischen Unternehmen gegen die wirtschaftlichen Verwerfungen durch die Krise unterstützen soll.
  </Typography>
  <br />
      <img ahref="www.google.de" src="https://wirvsvirushackathon.org/wp-content/uploads/2020/03/12-scaled.jpg" width="40%" height="auto" />
<br />

    <br />
    <Typography weight={"bold"} variant={"h5"} gutterBottom>
      {"Was machen wir?"}
    </Typography>
    <Typography>​Aus wirtschaftlicher Sicht mit am härtesten getroffen von der Krise sind zweifelsohne kleine und mittelständische Unternehmen, die von Krisen eines solchen Ausmaßes oft vor existenzielle Herausforderungen gestellt werden werden. _KMU vs. Corona_ soll daher unser Beitrag zur Bewältigung der Krise sein: eine Seite, die unsere kleinen und mittelständischen Unternehmen im Kampf gegen die wirtschaftlichen Verwerfungen der Krise unterstützen soll.
​
</Typography>
<br />
    <Typography weight={"bold"} variant={"h5"} gutterBottom>
      Wer sind wir?
    </Typography>
<Typography>Wir sind eine Gruppe von sieben Hackathon-Teilnehmern, primär Studenten der Informatik sowie der Volkswirtschaftslehre. In die Inhalte der Webseite sind zudem die Erfahrung sowie das Wissen vieler weiterer Teilnehmer, insbesondere der Mitglieder der verschiedenen Untergruppen des Coronanavigator-Projekts, des Hackathons eingeflossen, wofür wir außerordentlich dankbar sind. Wir sind: 
</Typography>
<br />
<Typography>
<li>Stella Canessa</li>
<li>Janika Collatz</li>
<li>Marius Haberstock</li>
<li>Patrick Koch</li>
<li>Lennart Lehmann</li>
<li>Armin Satzger</li>
<li>Leo Semmelmann</li>
</Typography>
  </div>

);

ContentEx.propTypes = {};
ContentEx.defaultProps = {};

export default withStyles(styles)(ContentEx);
