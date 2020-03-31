import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

const TargetGroupsDeleteDialog = (props) => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleRemove = () => {
        dispatch({
            type: 'TargetGroups/deleteTargetGroup',
            payload: {
                targetGroupSlug: props.targetGroup.slug,
            },
        });
        enqueueSnackbar('Zielgruppe gelöscht', {
            variant: 'success',
        });
        props.onClose();
    };

    if (props.targetGroup === null || props.open === false) {
        return null;
    }

    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>{`Zielgruppe ${props.targetGroup.groupname} löschen?`}</DialogTitle>
            <DialogActions>
                <Button onClick={props.onClose}>Abbrechen</Button>
                <Button color="primary" onClick={handleRemove}>Löschen</Button>
            </DialogActions>
        </Dialog>
    );
};

export default TargetGroupsDeleteDialog;
