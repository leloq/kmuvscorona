/* eslint-disable */
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Octicon, {repo} from '@primer/octicons-react'


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
    <Typography weight={"bold"} variant={"h4"} gutterBottom>
      Unterstützen / Hilfe leisten 
    </Typography>
    <Typography>
    Es gibt eine Vielzahl von Möglichkeiten für Sie, sich zum Wohle unserer heimischen kleinen und mittleren Unternehmen zu engagieren. Auf dieser Seite möchten wir Ihnen eine Auswahl präsentieren.
    </Typography>

    <br />



    <Typography weight={"bold"} variant={"h5"} gutterBottom>
      Unterstützung für KMUs leisten
    </Typography>

    <Typography>
      <li>Bei lokalem Einzelhandel einkaufen: Häufig müssen sie nicht mehr physisch erscheinen, um die Dienste ihres lokalen Einzelhandels in Anspruch zu nehmen. Viele Einzelhändler bieten inzwischen Lieferservices an, die in Anspruch genommen werden können.</li>
      <li>Künstler*innen unterstützen: Durch den Kauf ihrer Produkte, den Kauf von Tickets und Gutscheinen für die Zeit nach Corona sowie den Tausch von Tickets für ausfallende Konzerte und andere Events gegen Gutscheine anstelle einer Erstattung des Kaufpreises. Alternativ können z.B. auch Tickets gekauft werden, die nicht wirklich stattfinden und stattdessen die Solidarität mit den Künstler*innen zum Ziel haben, etwa über <a style={{textDecoration: 'none'}} href="https://keinerkommt.de/" target="_blank">https://keinerkommt.de/</a> . </li>
      <li>Sich als Erntehelfer verdingen: Viele landwirtschaftliche Produzenten haben Schwierigkeiten aufgrund des Einreiseverbots für Erntehelfer aus dem EU- und Nicht-EU-Ausland. Über Vermittlungsplattformen wie das vom Bundesministerium für Ernährung und Landwirtschaft getragene <a style={{textDecoration: 'none'}} href="https://www.daslandhilft.de" target="_blank">https://www.daslandhilft.de</a> kannst du stattdessen deine Hilfe anbieten. </li>

    </Typography>

    <br />

    <Typography weight={"bold"} variant={"h5"} gutterBottom>
      Unsere Arbeit unterstützen
    </Typography>

    <Typography>
    <li>Die Reichweite der Plattform erhöhen: Wir würden uns freuen, wenn du die überall auf der Webseite befindlichen Buttons zum Teilen unserer Inhalte über deine Social Media-Kanäle nutzen würdest, um die Seite bekannter zu machen, denn die Wirksamkeit von KMU vs. Corona steigt aufgrund ihres dynamischen Aufbaus exponentiell mit deren Nutzung an</li>
    <li>Die Entwicklung der Plattform unterstützen: Solltest du über Erfahrung im Frontend-Development (insb. NodeJS, React) verfügen, so würden wir uns selbstverständlich auch über Beiträge zur Weiterentwicklung der Webseite freuen. Unser GitHub-Repo ist öffentlich und verfügbar unter <a style={{textDecoration: 'none'}} href="https://github.com/leloq/kmuvscorona" target="_blank">https://github.com/leloq/kmuvscorona</a> </li>
    <li>Ideen zur Weiterentwicklung der Plattform einbringen: Wir würden uns selbstverständlich jederzeit über Hilfe freuen. Nehmen Sie bitte Kontakt mit uns über <a href={"mailto:info@kmuvscorona.de"}>info@kmuvscorona</a> auf, um das beste Vorgehen zu besprechen.</li>

    </Typography> 


    </div>

);

ContentEx.propTypes = {};
ContentEx.defaultProps = {};

export default withStyles(styles)(ContentEx);
