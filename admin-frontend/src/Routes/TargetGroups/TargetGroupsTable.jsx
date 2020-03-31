import React, { useState } from 'react';
import { makeStyles, Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, IconButton } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import { navigate } from '@reach/router';
import TargetGroupsDeleteDialog from './TargetGroupsDeleteDialog';



const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.grey[50],
        padding: theme.spacing(3),
        borderRadius: theme.spacing(0.5),
    },
}));

const TargetGroupsTable = () => {
    const [isDeleteDialogOpen, setDeleteDialog] = useState(false);
    const [targetGroupToDelete, setTargetGroupToDelete] = useState(null);
    const targetGroups = useSelector(state => state.TargetGroups.data);
    const classes = useStyles();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const openDeleteDialog = targetGroupSlug => () => {
        setDeleteDialog(true);
        const targetGroupToDelete = targetGroups.find(targetGroup => targetGroup.slug === targetGroupSlug);
        setTargetGroupToDelete(targetGroupToDelete);
    };
    const closeDeleteDialog = () => {
        setDeleteDialog(false);
    };

    const navigateToEditTargetGroupForm = tgroupSlug => () => {
        navigate('/editTargetGroup/' + tgroupSlug);
    }

    if (targetGroups === null || typeof targetGroups === 'undefined' || targetGroups.length === 0) {
        return null;
    }
    return (
        <div className={classes.root}>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Titel</TableCell>
                        <TableCell align="right">Beschreibung</TableCell>
                        <TableCell align="right">Geändert am</TableCell>
                        <TableCell align="right">Erstellt am</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {targetGroups.map(targetGroup => (
                        <TableRow key={targetGroup.slug}>
                            <TableCell>{targetGroup.groupname}</TableCell>
                            <TableCell align="right">{targetGroup.description}</TableCell>
                            <TableCell align="right">{moment(targetGroup.updatedAt).format('DD.MM.YYYY [um] HH:mm')}</TableCell>
                            <TableCell align="right">{moment(targetGroup.createdAt).format('DD.MM.YYYY [um] HH:mm')}</TableCell>
                            <TableCell>
                                <IconButton onClick={navigateToEditTargetGroupForm(targetGroup.slug)}>
                                    <Edit />
                                </IconButton>
                            </TableCell>
                            <TableCell>
                                <IconButton onClick={openDeleteDialog(targetGroup.slug)}>
                                    <Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <TargetGroupsDeleteDialog
            open={isDeleteDialogOpen}
            onClose={closeDeleteDialog}
            targetGroup={targetGroupToDelete}
        />
        </div>
    )
};

export default TargetGroupsTable;
