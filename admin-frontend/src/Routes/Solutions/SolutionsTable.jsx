import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles, Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Check, Error, VisibilityOff, Edit, Delete } from '@material-ui/icons';
import moment from 'moment';
import { navigate } from '@reach/router';
import SolutionsDeleteDialog from './SolutionsDeleteDialog';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import PropTypes from 'prop-types';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  const headCells = [
    { id: 'status', align: 'left', disablePadding: false, label: 'Status' },
    { id: 'title', align: 'left', disablePadding: false, label: 'Titel' },
    { id: 'description', align: 'right', disablePadding: false, label: 'Beschreibung' },
    { id: 'changedAt', alignR: 'right', disablePadding: true, label: 'Geändert Am' },
    { id: 'createdAt', align: 'right', disablePadding: true, label: 'Erstellt Am' },
  ];
  
  function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.alignRight ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    status: PropTypes.oneOf([0, 1, 2]).isRequired,
  };

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.grey[50],
        padding: theme.spacing(3),
        borderRadius: theme.spacing(0.5),
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
      },
}));
  

const SolutionsTable = () => {
    const [isDeleteDialogOpen, setDeleteDialog] = useState(false);
    const [solutionToDelete, setSolutionToDelete] = useState(null);
    const solutions = useSelector(state => state.Solutions.data);
    const classes = useStyles();
    const [order, setOrder] = React.useState('desc');
    const [orderBy, setOrderBy] = React.useState('status');
    const problems = useSelector(state => state.Problems.data);

    const StatusIndicator = {
        VALID: <Tooltip title="Gültige Lösung">
                    <Check />
                </Tooltip>,// non-preliminary and problem mapped correctly
        PRELIMINARY: <Tooltip title="Lösungsstatus preliminary">
                        <VisibilityOff />
                    </Tooltip>, // preliminary
        MISSINGPROBLEM: <Tooltip title="Kein Problem zugeordnet">
                            <Error />
                        </Tooltip>, // no problem mapped      
    }

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

    const navigateToEditSolutionForm = solutionId => () => {
        navigate('/editSolution/' + solutionId);
    }

    const setSolutionStatus = solution => {
        if (solution.preliminary) {
            solution.status = 1;
        }
        else {
            const mappedProblem = problems.find(problem => problem.solutions.includes(solution._id));
            if (mappedProblem === null || typeof mappedProblem === 'undefined') {
                solution.status = 2;
            }
            else {
                solution.status = 0;
            }
        }
    }

    const getStatusIndicator = solution => {
        switch(solution.status) {
            case 0:
                return StatusIndicator.VALID;
            case 1:
                return StatusIndicator.PRELIMINARY;
            case 2:
                return StatusIndicator.MISSINGPROBLEM;
        }
    }

    const getDescriptionPreview = solution => `${solution.description.substring(0, 150)}...`

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
      };

    if (solutions === null || typeof solutions === 'undefined' || solutions.length === 0) {
        return null;
    }
    
    solutions.forEach(setSolutionStatus);

    return (
        <div className={classes.root}>
        <TableContainer component={Paper}>
            <Table>
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
                <TableBody>
                {stableSort(solutions, getComparator(order, orderBy)).map(solution => (
                        <TableRow key={solution._id}>
                            <TableCell>{getStatusIndicator(solution)}</TableCell>
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
