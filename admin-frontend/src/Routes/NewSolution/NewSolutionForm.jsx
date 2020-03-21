import React, { useState } from 'react';
import { makeStyles, TextField, Typography, Button, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { navigate } from '@reach/router';
import { useSnackbar } from 'notistack';
import TargetGroupsSelect from './TargetGroupsSelect';

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

const NewSolutionForm = () => {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedTargetGroups, setSelectedTargetGroups] = useState([]);
    const specificForTargetGroups = useSelector(state => state.TargetGroups.data);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const hasTargetGroups = specificForTargetGroups !== null && typeof specificForTargetGroups !== 'undefined' && specificForTargetGroups.length > 0;

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handleCheckboxChange = (targetGroupID) => {
        if (selectedTargetGroups.includes(targetGroupID)) {
            const index = selectedTargetGroups.indexOf(targetGroupID);
            setSelectedTargetGroups([
                ...selectedTargetGroups.slice(0, index),
                ...selectedTargetGroups.slice(index + 1),
            ]);
        } else {
            setSelectedTargetGroups([
                ...selectedTargetGroups,
                targetGroupID,
            ]);
        }
    };

    const handleSave = () => {
        const newSolution = {
            title,
            description,
            specificForTargetGroups: selectedTargetGroups,
        };
        dispatch({
            type: 'Solutions/saveNewSolution',
            payload: {
                newSolution,
            },
        });
        navigate('/solutions');
        enqueueSnackbar('Neue Lösung hinzugefügt', {
            variant: 'success',
        });
    };

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
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={handleSave} color="primary">Speichern</Button>
                </Grid>
            </Grid>
            <Grid xs={6} item>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h6">Beschränkt auf Zielgruppen:</Typography>
                    </Grid>
                    {hasTargetGroups &&
                        <Grid item>
                            <TargetGroupsSelect
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
