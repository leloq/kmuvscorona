import React, { Component } from 'react'
import './Styles.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { HashLink as Link } from 'react-router-hash-link';
import CookieConsent from "react-cookie-consent";
import TargetGroupList from './TargetGroupList';
import FeaturedGrid from './FeaturedGrid';


class Home extends Component {

  render() {

    return (
    	<div>
    	<div>
          <Container maxWidth="sm" class="hero">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              KMU vs. Corona
            </Typography>
            <Typography variant="h4" align="center" color="textSecondary" paragraph>
              Wir sammeln Ideen, Hilfsmittel, Finanzierungsquellen und mehr, um Klein- und Mittelstandsunternehmen
              aus der Corona-Krise zu helfen. 

            </Typography>
            
            
          </Container>
        </div>
        <Container maxWidth="sm" class="subhero">

        <Grid container variant="h6" spacing={2} justify="center" class="subheading">
            <Typography variant="h5" paragraph color="textSecondary" align="center">
              Bekannt aus
            </Typography>

        </Grid>

        <Grid container spacing={2} justify="center">

          <FeaturedGrid />
        </Grid>
        </Container>



        <TargetGroupList />

        <div>       
            <CookieConsent
                location="bottom"
                buttonText="OK"
                cookieName="cookieConsent"
                style={{ background: "#999999" }}
                buttonStyle={{ background: "#2F36A9", color: "#FFFFFF", fontSize: "13px" }}
                expires={150}>
                <Typography>
                Um Ihnen ein besseres Nutzererlebnis zu bieten, verwenden wir Cookies. Durch Nutzung unserer Dienste stimmen Sie unserer Verwendung von Cookies zu. &nbsp;</Typography>
                <Link to="/DataPrivacy" style={{ color: '#FFFFFF' }}>
			          <Typography>Weitere Informationen</Typography>
			          </Link>
            </CookieConsent>
        </div>
    	</div>

    )
  }
}
export default Home