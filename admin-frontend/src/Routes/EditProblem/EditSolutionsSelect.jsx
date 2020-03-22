import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Checkbox } from '@material-ui/core';

const EditSolutionsSelect = (props) => {

    const handleCheckboxChange = (solutionID) => () => {
        props.handleCheckboxChange(solutionID);
    };

    return (
        <List>
            {props.solutions.map(solution => (
                <ListItem dense button key={solution._id} onClick={handleCheckboxChange(solution._id)}>
                    <ListItemIcon>
                        <Checkbox
                            checked={props.selectedSolutions.includes(solution._id)}
                            edge="start"
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText primary={solution.title} />
                </ListItem>
            ))}
        </List>
    );
};

export default EditSolutionsSelect;
