import React, { useState } from 'react';
import { makeStyles, Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Edit, Delete } from '@material-ui/icons';
import { navigate } from '@reach/router';
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
    const [isDeleteDialogOpen, setDeleteDialog] = useState(false);
    const [problemToDelete, setProblemToDelete] = useState(null);
    const problems = useSelector(state => state.Problems.data);
    const classes = useStyles();

    const navigateToEditProblemForm = problemId => () => {
        navigate('/editProblem/' + problemId);
    }
    const openDeleteDialog = problemId => () => {
        setDeleteDialog(true);
        console.log(problemId);
        const problemToDelete = problems.find(problem => problem._id === problemId);
        setProblemToDelete(problemToDelete);
    };
    const closeDeleteDialog = () => {
        setDeleteDialog(false);
    };

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
                                <TableCell>
                                    <IconButton onClick={navigateToEditProblemForm(problem._id)}>
                                        <Edit />
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <IconButton onClick={openDeleteDialog(problem._id)}>
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <ProblemsDeleteDialog
                open={isDeleteDialogOpen}
                onClose={closeDeleteDialog}
                problem={problemToDelete}
        />
        </div>
    )
};

export default ProblemsTable;
