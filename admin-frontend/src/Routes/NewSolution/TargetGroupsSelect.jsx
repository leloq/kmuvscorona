import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Checkbox } from '@material-ui/core';

const TargetGroupsSelect = (props) => {

    const handleCheckboxChange = (targetGroupID) => () => {
        props.handleCheckboxChange(targetGroupID);
    };

    return (
        <List>
            {props.specificForTargetGroups.map(targetGroup => (
                <ListItem dense button key={targetGroup._id} onClick={handleCheckboxChange(targetGroup._id)}>
                    <ListItemIcon>
                        <Checkbox
                            checked={props.selectedTargetGroups.includes(targetGroup._id)}
                            edge="start"
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText primary={targetGroup.groupname} />
                </ListItem>
            ))}
        </List>
    );
};

export default TargetGroupsSelect;
