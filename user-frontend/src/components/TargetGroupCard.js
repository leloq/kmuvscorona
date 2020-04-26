import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {  withRouter } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default withRouter (function TargetGroupCard(props) {

  const classes = useStyles();

  const linkUrl = `/targetgroup/${props.slug}`
  const navigateToTargetGroup = () => {
    props.history.push(linkUrl)
  }

  const helpUrl = `/help`
  const navigateToHelpPage = () => {
    props.history.push(helpUrl)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={navigateToTargetGroup}>
        <CardMedia
          className={classes.media}
          image={props.url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.groupname} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Erfahren Sie mehr darüber, welche Möglichkeiten für diese Zielgruppe bestehen.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={navigateToHelpPage}>
          Helfen
        </Button>
        <Button size="small" color="primary" onClick={navigateToTargetGroup}>
          Lösungen
        </Button>
      </CardActions>
    </Card>

  );
})