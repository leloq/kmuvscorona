import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

const ProblemsDeleteDialog = (props) => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleRemove = () => {
        dispatch({
            type: 'Problems/deleteProblem',
            payload: {
                problemId: props.problem._id,
            },
        });
        enqueueSnackbar('Lösungansatz gelöscht', {
            variant: 'success',
        });
        props.onClose();
    };

    if (props.problem === null || props.open === false) {
        return null;
    }

    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>{`Problem ${props.problem.title} löschen?`}</DialogTitle>
            <DialogActions>
                <Button onClick={props.onClose}>Abbrechen</Button>
                <Button color="primary" onClick={handleRemove}>Löschen</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProblemsDeleteDialog;
