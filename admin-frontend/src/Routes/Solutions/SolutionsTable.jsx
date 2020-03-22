import React, { useState } from 'react';
import { makeStyles, Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Edit, Delete } from '@material-ui/icons';
import moment from 'moment';
import SolutionsDeleteDialog from './SolutionsDeleteDialog';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.grey[50],
        padding: theme.spacing(3),
        borderRadius: theme.spacing(0.5),
    },
}));

const SolutionsTable = () => {
    const [isDeleteDialogOpen, setDeleteDialog] = useState(false);
    const [solutionToDelete, setSolutionToDelete] = useState(null);
    const solutions = useSelector(state => state.Solutions.data);
    const classes = useStyles();
    const problems = useSelector(state => state.Problems.data);

    const getMappedProblem = (solutionId) => {
        var mappedProblem = problems.find(prob => prob.solutions.some(sol => sol === solutionId));
        return mappedProblem ? mappedProblem.title : null;
    };

    const openDeleteDialog = solutionId => () => {
        setDeleteDialog(true);
        console.log(solutionId);
        const solutionToDelete = solutions.find(solution => solution._id === solutionId);
        setSolutionToDelete(solutionToDelete);
    };
    const closeDeleteDialog = () => {
        setDeleteDialog(false);
    };

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
                        <TableCell align="right">Gelöstes Problem</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {solutions.map(solution => (
                        <TableRow key={solution._id}>
                            <TableCell>{solution.title}</TableCell>
                            <TableCell align="right">{solution.description}</TableCell>
                            <TableCell align="right">{moment(solutions.updatedAt).format('DD.MM.YYYY [um] HH:mm')}</TableCell>
                            <TableCell align="right">{moment(solution.createdAt).format('DD.MM.YYYY [um] HH:mm')}</TableCell>
                            <TableCell align="right">{getMappedProblem(solution._id)}</TableCell>
                            <TableCell>
                                <IconButton>
                                    <Edit />
                                </IconButton>
                            </TableCell>
                            <TableCell>
                                <IconButton onClick={openDeleteDialog(solution._id)}>
                                    <Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <SolutionsDeleteDialog
            open={isDeleteDialogOpen}
            onClose={closeDeleteDialog}
            solution={solutionToDelete}
        />
        </div>
    )
};

export default SolutionsTable;
