import React, { Component } from 'react'
import './Styles.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { HashLink as Link } from 'react-router-hash-link';
import CookieConsent from "react-cookie-consent";
import TargetGroupList from './TargetGroupList'


class Home extends Component {

  render() {



    return (
    	<div>
    	<div>
          <Container maxWidth="sm" class="hero">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              KMUs vs. Corona
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Wir sammeln Ideen, Hilfsmittel, Finanzierungsquellen und mehr, um Klein- und Mittelstandsunternehmen
              aus der Corona-Krise zu helfen. 
            </Typography>
            <div id="branchen">
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="outlined" color="primary">
                     <Link smooth to="#branchen" style={{ textDecoration: 'none'}}>
                  Branchen
                </Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    <Link to="/solutions" style={{ textDecoration: 'none'}}>
                  Lösungsansätze
                </Link>
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant="outlined" color="primary">
                    <Link to="/NewSolution" style={{ textDecoration: 'none'}}>
                  Lösungsvorschlag einreichen
                </Link>
                  </Button>
                </Grid>

              </Grid>
            </div>
          </Container>
        </div>
        <TargetGroupList />

        <div>
            <Grid container spacing={2} justify="center">
            <Grid item>
            <br />
            <Typography color="red" fontStyle="italic" align="center" color="textSecondary" paragraph>
              Nutzen Sie auch unser Umfrage-Tool <a style={{textDecoration: 'none'}}href="https://docs.google.com/forms/d/e/1FAIpQLSe9kDJfiUcfWB-1iZozRErlTmj5kb9eb5yer5h4YLPNbSKCSQ/viewform" target="_blank" rel="noopener noreferrer">CoroNavigator</a>: Aus den einzelnen Ergebnissen der Umfrage leiten wir konkrete Lösungsvorschläge für KMUs ab. Es würde uns freuen, wenn Sie das Team mit einer Teilnahme an der Umfrage unterstützen.
            </Typography>
            <br />
            </Grid>
            </Grid>
        </div>
        <div>
            <CookieConsent
              buttonText="Einverstanden">
              <Typography>
              Um Ihnen ein besseres Nutzererlebnis zu bieten, verwenden wir Cookies. Durch Nutzung unserer Dienste stimmen Sie unserer Verwendung von Cookies zu. &nbsp;</Typography>
              <Link to="/DataPrivacy" style={{ color: '#FFF' }}>
			          <Typography>Weitere Informationen</Typography>
			        </Link>
            </CookieConsent>
        </div>
    	</div>

    )
  }
}
export default Home