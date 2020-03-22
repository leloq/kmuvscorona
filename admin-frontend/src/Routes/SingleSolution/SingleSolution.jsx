import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEqual } from 'lodash';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

const useStyles = makeStyles(theme => ({
    markdownContainer: {
        lineHeight: '2 !important',
        padding: theme.spacing(2),
    },
    problemHeading: {
        fontWeight: 'normal',
    },
    problemLink: {
        textDecoration: 'underline',
        '&:hover': {
            cursor: 'pointer',
        },
    },
}));

const SingleSolution = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const solution = useSelector(
        state => state.Solutions.data.find(solution => solution._id === props.solutionId),
        isEqual,
    );
    const problem = useSelector(
        (state) => {
            if (solution === null || typeof solution === 'undefined') {
                return null;
            }
            return state.Problems.data.find(problem => problem.solutions.includes(solution._id))
        },
        isEqual
    );

    dispatch({
        type: 'Solutions/getSingleSolution',
        payload: {
            solutionId: props.solutionId,
        },
    });
    dispatch({
        type: 'Problems/getProblems',
    });

    const navigateToProblem = () => {
        props.navigate('/problems');
    }

    if (solution === null || typeof solution === 'undefined' || problem === null || typeof problem === 'undefined') {
        return null;
    }

    dispatch({
        type: 'UI/setAppBarTitle',
        payload: solution.title
    });

    return (
        <Grid spacing={3} container direction="column" justify="center" alignItems="center">
            <Grid item>
                <Typography className={classes.problemHeading} variant="h6">
                    Gelöstes Problem: <span onClick={navigateToProblem} className={classes.problemLink}>{problem.title}</span>
                </Typography>
            </Grid>
            <Grid item>
                <ReactMarkdown className={`${classes.markdownContainer} MuiPaper-elevation1 MuiPaper-root MuiTypography-root MuiTypography-body1`} source={solution.description} />
            </Grid>
        </Grid>
    );
};

export default SingleSolution;
