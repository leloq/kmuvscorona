import React from 'react';
import { makeStyles, Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { useSelector } from 'react-redux';
import moment from 'moment';
import ProblemsDeleteDialog from './ProblemsDeleteDialog';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.grey[50],
        padding: theme.spacing(3),
        borderRadius: theme.spacing(0.5),
    },
}));

const ProblemsTable = () => {
    const problems = useSelector(state => state.Problems.data);
    const classes = useStyles();

    if (problems === null || typeof problems === 'undefined' || problems.length === 0) {
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
                            <TableCell align="right">Priorität</TableCell>
                            <TableCell align="right">Geändert am</TableCell>
                            <TableCell align="right">Erstellt am</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {problems.map(problem => (
                            <TableRow key={problem._id}>
                                <TableCell>{problem.title}</TableCell>
                                <TableCell align="right">{problem.description}</TableCell>
                                <TableCell align="right">{problem.severity}</TableCell>
                                <TableCell align="right">{moment(problem.updatedAt).format('DD.MM.YYYY [um] HH:mm')}</TableCell>
                                <TableCell align="right">{moment(problem.createdAt).format('DD.MM.YYYY [um] HH:mm')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};

export default ProblemsTable;
