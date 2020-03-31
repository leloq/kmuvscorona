import React, { useState } from 'react';
import { makeStyles, TextField, Typography, Button, Grid, Checkbox, FormControlLabel } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab'
import { useSelector, useDispatch } from 'react-redux';
import { navigate } from '@reach/router';
import { useSnackbar } from 'notistack';
import EditTargetGroupsSelect from './EditTargetGroupsSelect';

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

const NewSolutionForm = (props) => {
    const solution = useSelector(state => state.Solutions.data.find(solution => solution._id === props.solutionId));
    const classes = useStyles();
    const _id = solution._id;
    const [title, setTitle] = useState(solution.title);
    const [description, setDescription] = useState(solution.description);
    const [selectedTargetGroups, setSelectedTargetGroups] = useState(solution.specificForTargetGroups);
    const [upVotes, setUpVotes] = useState((typeof solution.upVotes !== 'undefined') ? solution.upVotes : 0);
    const [downVotes, setDownVotes] = useState((typeof solution.downVotes !== 'undefined') ? solution.downVotes : 0);
    const [preliminary, setPreliminary] = useState((typeof solution.preliminary !== 'undefined') ? solution.preliminary : false);
    const specificForTargetGroups = useSelector(state => state.TargetGroups.data);
    const problems = useSelector(state => state.Problems.data);
    const mappedProblem = problems.find(problem => problem.solutions.includes(_id));
    var mappedProblemId = "";
    if (typeof mappedProblem !== "undefined") mappedProblemId = mappedProblem._id;
    const [problemId, setProblemId] = useState(mappedProblemId);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const hasTargetGroups = specificForTargetGroups !== null && typeof specificForTargetGroups !== 'undefined' && specificForTargetGroups.length > 0;


    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handleCheckboxChange = (targetGroupSlug) => {
        if (selectedTargetGroups.includes(targetGroupSlug)) {
            const index = selectedTargetGroups.indexOf(targetGroupSlug);
            setSelectedTargetGroups([
                ...selectedTargetGroups.slice(0, index),
                ...selectedTargetGroups.slice(index + 1),
            ]);
        } else {
            setSelectedTargetGroups([
                ...selectedTargetGroups,
                targetGroupSlug,
            ]);
        }
    };

    const handleSave = (props) => {
        const editedSolution = {
            _id,
            title,
            description,
            specificForTargetGroups: selectedTargetGroups,
            upVotes,
            downVotes,
            preliminary,
			problemId,
        };
        dispatch({
            type: 'Solutions/updateSolution',
            payload: {
                editedSolution,
            },
        });
        navigateToSolutions();
        enqueueSnackbar('Lösung bearbeitet', {
            variant: 'success',
        });
        console.log(problemId);
    };

    const handleDropDownChange = (event, value) => {
        if (value !== null) {
            setProblemId(value._id);
        }
    };
    
    const handleChangePrelimStatus = (event, value) => {
        setPreliminary(value);
    };
    const handleUpVoteChange = (event, value) => {
        setUpVotes(event.target.value);
    };
    const handleDownVoteChange = (event, value) => {
        setDownVotes(event.target.value);
    };
    const navigateToSolutions = () => {
        navigate('/solutions');
    };

    return (
        <Grid container direction="row">
            <Grid xs={6} item>
                <Grid container direction="column" spacing={3}>
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
                    <Autocomplete
                        id="problems"
                        value={mappedProblem ? mappedProblem : null}
                        onChange={handleDropDownChange}
                        options={problems}
                        getOptionLabel={problem => problem.title}
                        style={{ width: 500 }}
                        renderInput={params => <TextField {...params}
                        label="Welches Problem wird dadurch gelöst?"
                        variant="outlined"
                        />}
                    />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                <Grid item>
                    <TextField
                        id="upvotes"
                        label="Upvotes"
                        onChange={handleUpVoteChange}
                        value={upVotes}
                        type="number"
                        InputLabelProps={{shrink: true,}}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="downvotes"
                        label="Downvotes"
                        onChange={handleDownVoteChange}
                        value={downVotes}
                        type="number"
                        InputLabelProps={{shrink: true,}}
                    />
                </Grid>
                </Grid>
                <Grid item>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={preliminary}
                            onChange={handleChangePrelimStatus}
                            name="preliminary"
                            primary
                        />}
                        label="Preliminary"
                    />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item>
                        <Button variant="outlined" onClick={navigateToSolutions} color="secondary">Abbrechen</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={handleSave} color="primary">Speichern</Button>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
            <Grid xs={6} item>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h6">Beschränkt auf Zielgruppen:</Typography>
                    </Grid>
                    {hasTargetGroups &&
                        <Grid item>
                            <EditTargetGroupsSelect
                                handleCheckboxChange={handleCheckboxChange}
                                selectedTargetGroups={selectedTargetGroups}
                                specificForTargetGroups={specificForTargetGroups}
                            />
                        </Grid>
                    }
                </Grid>
            </Grid>
        </Grid>
    );
};

export default NewSolutionForm;
