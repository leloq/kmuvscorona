import React from 'react';
import { makeStyles, Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { useSelector } from 'react-redux';
import moment from 'moment';

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
                        <TableCell align="right">Geändert am</TableCell>
                        <TableCell align="right">Erstellt am</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {targetGroups.map(targetGroups => (
                        <TableRow key={targetGroups._id}>
                            <TableCell>{targetGroups.groupname}</TableCell>
                            <TableCell align="right">{moment(targetGroups.updatedAt).format('DD.MM.YYYY [um] HH:mm')}</TableCell>
                            <TableCell align="right">{moment(targetGroups.createdAt).format('DD.MM.YYYY [um] HH:mm')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    )
};

export default TargetGroupsTable;
