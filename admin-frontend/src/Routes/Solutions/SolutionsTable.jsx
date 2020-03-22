import React, { useState } from 'react';
import { makeStyles, Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Edit, Delete } from '@material-ui/icons';
import moment from 'moment';
import { navigate } from '@reach/router';
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

    const openDeleteDialog = solutionId => () => {
        setDeleteDialog(true);
        console.log(solutionId);
        const solutionToDelete = solutions.find(solution => solution._id === solutionId);
        setSolutionToDelete(solutionToDelete);
    };
    const closeDeleteDialog = () => {
        setDeleteDialog(false);
    };

    const navigateToSingleSolution = (solutionId) => () => {
        navigate(`/solutions/${solutionId}`);
    };

    if (solutions === null || typeof solutions === 'undefined' || solutions.length === 0) {
        return null;
    }

    const navigateToEditSolutionForm = solutionId => () => {
        navigate('/editSolution/' + solutionId);
    }

    const getDescriptionPreview = solution => `${solution.description.substring(0, 150)}...`

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
                    {solutions.map(solution => (
                        <TableRow key={solution._id}>
                            <TableCell onClick={navigateToSingleSolution(solution._id)}>{solution.title}</TableCell>
                            <TableCell onClick={navigateToSingleSolution(solution._id)} align="right">{getDescriptionPreview(solution)}</TableCell>
                            <TableCell onClick={navigateToSingleSolution(solution._id)} align="right">{moment(solutions.updatedAt).format('DD.MM.YYYY [um] HH:mm')}</TableCell>
                            <TableCell onClick={navigateToSingleSolution(solution._id)} align="right">{moment(solution.createdAt).format('DD.MM.YYYY [um] HH:mm')}</TableCell>
                            <TableCell>
                                <IconButton onClick={navigateToEditSolutionForm(solution._id)}>
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
