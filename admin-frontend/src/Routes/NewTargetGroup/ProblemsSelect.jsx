import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Checkbox } from '@material-ui/core';

const ProblemsSelect = (props) => {

    const handleCheckboxChange = (problemID) => () => {
        props.handleCheckboxChange(problemID);
    };

    return (
        <List>
            {props.problems.map(problem => (
                <ListItem dense button key={problem._id} onClick={handleCheckboxChange(problem._id)}>
                    <ListItemIcon>
                        <Checkbox
                            checked={props.selectedProblems.includes(problem._id)}
                            edge="start"
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText primary={problem.title} />
                </ListItem>
            ))}
        </List>
    );
};

export default ProblemsSelect;
