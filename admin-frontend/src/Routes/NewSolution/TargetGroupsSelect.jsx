import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Checkbox } from '@material-ui/core';

const TargetGroupsSelect = (props) => {

    const handleCheckboxChange = (targetGroupSlug) => () => {
        props.handleCheckboxChange(targetGroupSlug);
    };

    return (
        <List>
            {props.specificForTargetGroups.map(targetGroup => (
                <ListItem dense button key={targetGroup.slug} onClick={handleCheckboxChange(targetGroup.slug)}>
                    <ListItemIcon>
                        <Checkbox
                            checked={props.selectedTargetGroups.includes(targetGroup.slug)}
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
