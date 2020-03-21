import React from 'react';
import { makeStyles, Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { useSnackbar } from 'notistack';



const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.grey[50],
        padding: theme.spacing(3),
        borderRadius: theme.spacing(0.5),
    },
}));

const TargetGroupsTable = () => {
    const targetGroups = useSelector(state => state.TargetGroups.data);
    const classes = useStyles();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleRemove = (targetGroupId) => {
        dispatch({
            type: 'TargetGroups/deleteTargetGroup',
            payload: {
                targetGroupId,
            },
        });
        enqueueSnackbar('Zielgruppe gelöscht', {
            variant: 'success',
        });
    };


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
                    {targetGroups.map(targetGroups => (
                        <TableRow key={targetGroups._id}>
                            <TableCell>{targetGroups.groupname}</TableCell>
                            <TableCell align="right">{targetGroups.description}</TableCell>
                            <TableCell align="right">{moment(targetGroups.updatedAt).format('DD.MM.YYYY [um] HH:mm')}</TableCell>
                            <TableCell align="right">{moment(targetGroups.createdAt).format('DD.MM.YYYY [um] HH:mm')}</TableCell>
                            <TableCell><Edit /></TableCell>
                            <TableCell><Delete onClick={() => handleRemove(targetGroups._id)}/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    )
};

export default TargetGroupsTable;
