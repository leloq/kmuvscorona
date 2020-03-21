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

const SolutionsTable = () => {
    const solutions = useSelector(state => state.Solutions.data);
    const classes = useStyles();

    if (solutions === null || typeof solutions === 'undefined' || solutions.length === 0) {
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
                    </TableRow>
                </TableHead>
                <TableBody>
                    {solutions.map(solution => (
                        <TableRow key={solution._id}>
                            <TableCell>{solution.title}</TableCell>
                            <TableCell align="right">{solution.description}</TableCell>
                            <TableCell align="right">{moment(solutions.updatedAt).format('DD.MM.YYYY [um] HH:mm')}</TableCell>
                            <TableCell align="right">{moment(solution.createdAt).format('DD.MM.YYYY [um] HH:mm')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    )
};

export default SolutionsTable;
