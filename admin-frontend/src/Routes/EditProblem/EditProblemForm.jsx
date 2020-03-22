import React, { useState } from 'react';
import { makeStyles, TextField, Typography, Button, Grid, Slider } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { navigate } from '@reach/router';
import { useSnackbar } from 'notistack';
import EditSolutionsSelect from './EditSolutionsSelect';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    textFieldsContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    textField: {
        width: '25ch',
        paddingBottom: theme.spacing(2),
    },
    textArea: {
        width: '50ch',
        paddingBottom: theme.spacing(2),
    },
    slider: {
        width: '50ch',
        paddingBottom: theme.spacing(2),
    },
}));

const EditProblemForm = () => {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [severity, setSeverity] = useState(3);
    const [selectedSolutions, setSelectedSolutions] = useState([]);
    const solutions = useSelector(state => state.Solutions.data);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const hasSolutions = solutions !== null && typeof solutions !== 'undefined' && solutions.length > 0;

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handleSeverityChange = (event, newValue) => {
        setSeverity(newValue);
    };
    const handleCheckboxChange = (solutionID) => {
        if (selectedSolutions.includes(solutionID)) {
            const index = selectedSolutions.indexOf(solutionID);
            setSelectedSolutions([
                ...selectedSolutions.slice(0, index),
                ...selectedSolutions.slice(index + 1),
            ]);
        } else {
            setSelectedSolutions([
                ...selectedSolutions,
                solutionID,
            ]);
        }
    };

    const handleSave = () => {
        const newProblem = {
            title,
            description,
            severity,
            solutions: selectedSolutions,
        };
        dispatch({
            type: 'Problems/saveNewProblem',
            payload: {
                newProblem,
            },
        });
        navigateToProblems();
        enqueueSnackbar('Neues Problem hinzugefügt', {
            variant: 'success',
        });
    };

    const navigateToProblems = () => {
        NavigationPreloadManager('/problems');
    }

    return (
        <Grid container direction="row">
            <Grid xs={6} item>
                <Grid container direction="column">
                    <Grid item>
                        <TextField
                            value={title}
                            onChange={handleTitleChange}
                            className={classes.textField}
                            label="Titel"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            value={description}
                            onChange={handleDescriptionChange}
                            className={classes.textArea}
                            label="Beschreibung"
                            variant="outlined"
                            multiline />
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom>Priorität: {severity}</Typography>
                    </Grid>
                    <Grid item>
                        <Slider
                            className={classes.slider}
                            value={severity}
                            onChange={handleSeverityChange}
                            step={1}
                            min={1}
                            max={10}
                            marks
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item>
                        <Button variant="outlined" onClick={navigateToProblems} color="secondary">Abbrechen</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={handleSave} color="primary">Speichern</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={6} item>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h6">Lösungen:</Typography>
                    </Grid>
                    {hasSolutions &&
                        <Grid item>
                            <EditSolutionsSelect
                                handleCheckboxChange={handleCheckboxChange}
                                selectedSolutions={selectedSolutions}
                                solutions={solutions}
                            />
                        </Grid>
                    }
                </Grid>
            </Grid>
        </Grid>
    );
};

export default EditProblemForm;
