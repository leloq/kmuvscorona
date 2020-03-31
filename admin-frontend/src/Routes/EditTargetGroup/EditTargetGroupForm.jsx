import React, { useState } from 'react';
import { makeStyles, TextField, Typography, Button, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { navigate } from '@reach/router';
import { useSnackbar } from 'notistack';
import ProblemsSelect from './EditProblemsSelect';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            margin: theme.spacing(3),
          },
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
}));

const EditTargetGroupForm = (props) => {

    const targetGroup = useSelector(state => state.TargetGroups.data.find(targetGroup => targetGroup.slug === props.targetGroupSlug));
    const classes = useStyles();
    const _id = targetGroup._id;
    const [groupname, setGroupname] = useState(targetGroup.groupname);
    const [slug, setSlug] = useState(targetGroup.slug);
    const [description, setDescription] = useState(targetGroup.description);
    const [selectedProblems, setSelectedProblems] = useState(targetGroup.problems ? targetGroup.problems : '');
    const [imageUrl, setImageUrl] = useState(targetGroup.imageUrl);
    const problems = useSelector(state => state.Problems.data);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const hasProblems = problems !== null && typeof problems !== 'undefined' && problems.length > 0;

    const handleGroupnameChange = (event) => {
        setGroupname(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handleImageUrlChange = (event) => {
        setImageUrl(event.target.value);
    };
    const handleCheckboxChange = (problemID) => {
        if (selectedProblems.includes(problemID)) {
            const index = selectedProblems.indexOf(problemID);
            setSelectedProblems([
                ...selectedProblems.slice(0, index),
                ...selectedProblems.slice(index + 1),
            ]);
        } else {
            setSelectedProblems([
                ...selectedProblems,
                problemID,
            ]);
        }
    };

    const handleSave = (props) => {
        const editedTargetGroup = {
            _id,
            groupname,
            description,
            problems: selectedProblems,
            imageUrl,
            slug,
        };
        dispatch({
            type: 'TargetGroups/updateTargetGroup',
            payload: {
                editedTargetGroup,
            },
        });
        navigateToTargetGroups();
        enqueueSnackbar('Zielgruppe bearbeitet', {
            variant: 'success',
        });
    };
    const navigateToTargetGroups = () => {
        navigate('/targetgroups');
    }


    return (
        <Grid container direction="row">
            <Grid xs={6} item>
                <Grid container direction="column">
                    <Grid item>
                        <TextField
                            value={groupname}
                            onChange={handleGroupnameChange}
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
                        <TextField
                            value={imageUrl}
                            onChange={handleImageUrlChange}
                            className={classes.textArea}
                            label="Bild-URL"
                            variant="outlined"
                            multiline />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item>
                        <Button variant="outlined" onClick={navigateToTargetGroups} color="secondary">Abbrechen</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={handleSave} color="primary">Speichern</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={6} item>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h6">Probleme:</Typography>
                    </Grid>
                    {hasProblems &&
                        <Grid item>
                            <ProblemsSelect
                                handleCheckboxChange={handleCheckboxChange}
                                selectedProblems={selectedProblems}
                                problems={problems}
                            />
                        </Grid>
                    }
                </Grid>
            </Grid>
        </Grid>
    );
};

export default EditTargetGroupForm;
