import React from 'react';
import { makeStyles, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { navigate } from '@reach/router';
import SolutionsTable from './SolutionsTable';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: 0,
        position: 'fixed',
        top: 'auto',
        bottom: theme.spacing(5),
        left: 'auto',
        right: theme.spacing(5),
    }
}));

const Solutions = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const navigateToNewSolutionForm = () => {
        navigate('/newSolution');
    };

    dispatch({
        type: 'Solutions/getSolutions',
    });
    dispatch({
        type: 'Problems/getProblems',
    });
    return (
        <>
            <SolutionsTable />
            <Fab onClick={navigateToNewSolutionForm} className={classes.fab} color="primary">
                <Add />
            </Fab>
        </>
    );
};

export default Solutions;