import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import Markdown from 'react-markdown';
import Voting from './Voting'


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 12,
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
  voting: {
    marginLeft: 15
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
          <Typography variant="h6"> {props.solution.title} </Typography>
          <Typography variant="h6">  </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography><Markdown escapeHtml={false} source={props.solution.description} /></Typography>
        </ExpansionPanelDetails>

        <div className={classes.voting}><Voting solution={props.solution}/></div>
        
      </ExpansionPanel>
    </div>
  );
})