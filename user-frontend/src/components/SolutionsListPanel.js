import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { Link, withRouter } from 'react-router-dom';
import Markdown from 'react-markdown';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 0,
    marginLeft: 15,
    marginRight: 15,
    width: '97%',
    border: '2px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  heading: {
    fontFamily: 'Open Sans',
    fontSize: theme.typography.pxToRem(23),
    fontWeight: 'bold',

  },
  paragraph: {
    fontSize: theme.typography.pxToRem(17),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(18),
    color: theme.palette.text.secondary,
  },
}));

export default withRouter (function SolutionsListPanel(props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1ah-content"
          id="panel1ah-header">

          <Typography className={classes.heading}> {props.title} </Typography>
          <Typography className={classes.secondaryHeading}>  </Typography>

        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Markdown escapeHtml={false} source={props.description} />
        </ExpansionPanelDetails>

      </ExpansionPanel>
    </div>
  );
})