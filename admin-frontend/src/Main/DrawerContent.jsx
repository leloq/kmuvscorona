import React from 'react';
import { makeStyles, Typography, Divider, List } from '@material-ui/core';
import { Home, ReportProblem } from '@material-ui/icons';
import ListItemLink from './ListItemLink';

const useStyles = makeStyles(theme => ({
    toolbarTop: {
        height: theme.spacing(3),
        backgroundColor: theme.palette.grey[200],
    },
    toolbar: {
        ...theme.mixins.toolbar,
        paddingLeft: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
}));

const DrawerContent = (props) => {
    const { onClose } = props;
    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbarTop} />
            <div className={classes.toolbar}>
                <Typography variant="h6">ADMIN</Typography>
            </div>
            <Divider />
            <List>
                <ListItemLink
                    onClick={onClose}
                    to="/"
                    primary="Home"
                    icon={<Home />}
                />
                <ListItemLink
                    onClick={onClose}
                    to="/problems"
                    primary="Probleme"
                    icon={<ReportProblem />}
                />
            </List>
        </div>
    );
};

export default DrawerContent;
