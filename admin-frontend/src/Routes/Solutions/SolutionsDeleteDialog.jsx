import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

const SolutionsDeleteDialog = (props) => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleRemove = () => {
        dispatch({
            type: 'Solutions/deleteSolution',
            payload: {
                solutionId: props.solution._id,
            },
        });
        enqueueSnackbar('Lösungansatz gelöscht', {
            variant: 'success',
        });
        props.onClose();
    };

    if (props.solution === null || props.open === false) {
        return null;
    }

    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>{`Loesungsansatz ${props.solution.title} loeschen?`}</DialogTitle>
            <DialogActions>
                <Button onClick={props.onClose}>Abbrechen</Button>
                <Button color="primary" onClick={handleRemove}>Löschen</Button>
            </DialogActions>
        </Dialog>
    );
};

export default SolutionsDeleteDialog;
