import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {spacing: 8}
}));

export default function FeaturedGrid() {
  const classes = useStyles();

  return (
      <div>
          <Grid container >
            <Grid item xs={12} sm={4}>
            <Box mr={5}>
            <a href="https://www.tum.de/nc/die-tum/aktuelles/pressemitteilungen/details/35954/" target="__blank">
            <img noWrap src="https://www.tum.de/typo3conf/ext/in2template/Resources/Public/Images/tum-logo.png" height="60" />
            </a>
            </Box>
            </Grid>
              <Grid item xs={12} sm={4}>
              <Box>
              <a href="https://wirvsvirushackathon.org" target="__blank">
               <img src="https://wirvsvirushackathon.org/wp-content/uploads/2020/03/12-scaled.jpg"  height="60"/>
            </a>
            </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Box ml={22}>
            <a href="https://station-frankfurt.de/2020/03/25/die-szene-beweist-innovationsgeist-in-frankfurtrheinmain/" target="__blank">
               <img src="https://station-frankfurt.de/wp-content/uploads/2019/08/Station_OpenGraph.jpg" height="60"/>
            </a>
            </Box>
            </Grid>
          </Grid>      
      </div>
    )
  
}
