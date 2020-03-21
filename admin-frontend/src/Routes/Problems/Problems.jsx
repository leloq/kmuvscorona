import React from 'react';
import { makeStyles, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { navigate } from '@reach/router';
import ProblemsTable from './ProblemsTable';

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

const Problems = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const navigateToNewProblemForm = () => {
        navigate('/newProblem');
    };

    dispatch({
        type: 'Problems/getProblems',
    });
    return (
        <>
            <ProblemsTable />
            <Fab onClick={navigateToNewProblemForm} className={classes.fab} color="primary">
                <Add />
            </Fab>
        </>
    );
};

export default Problems;