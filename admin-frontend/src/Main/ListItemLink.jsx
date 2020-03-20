import React, { forwardRef, useMemo } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link, Match } from '@reach/router';

const ListItemLink = (props) => {
    const { icon, primary, to, onClick } = props;

    const renderLink = useMemo(
        () => forwardRef((itemProps, ref) => <Link to={to} ref={ref} {...itemProps} />),
        [to],
    );

    return (
        <li>
            <Match path={to}>
                {matchProps => (
                <ListItem onClick={onClick} selected={matchProps.match !== null} button component={renderLink}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={primary} />
                </ListItem>
                )}
            </Match>
        </li>
    );
};

export default ListItemLink;
