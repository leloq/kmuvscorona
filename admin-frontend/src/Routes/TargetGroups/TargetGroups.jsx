import React from 'react';
import { makeStyles, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { navigate } from '@reach/router';
import TargetGroupsTable from './TargetGroupsTable';

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

const TargetGroups = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const navigateToNewTargetGroupForm = () => {
        navigate('/newTargetGroup');
    };

    dispatch({
        type: 'TargetGroups/getTargetGroups',
    });
    return (
        <>
            <TargetGroupsTable />
            <Fab onClick={navigateToNewTargetGroupForm} className={classes.fab} color="primary">
                <Add />
            </Fab>
        </>
    );
};

export default TargetGroups;