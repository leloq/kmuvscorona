import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Checkbox } from '@material-ui/core';

const TargetGroupsSelect = (props) => {

    const handleCheckboxChange = (targetGroupName) => () => {
        props.handleCheckboxChange(targetGroupName);
    };

    return (
        <List>
            {props.specificForTargetGroups.map(targetGroup => (
                <ListItem dense button key={targetGroup.groupname} onClick={handleCheckboxChange(targetGroup.groupname)}>
                    <ListItemIcon>
                        <Checkbox
                            checked={props.selectedTargetGroups.includes(targetGroup.groupname)}
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
