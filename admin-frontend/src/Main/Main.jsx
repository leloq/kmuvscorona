import React, { useState } from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Hidden, Drawer } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { Router } from '@reach/router';
import AppBarTitle from './AppBarTitle';
import DrawerContent from './DrawerContent';
import AppBarTitleUpdater from './AppBarTitleUpdater';
import Home from '../Routes/Home';
import Problems from '../Routes/Problems/Problems';
import NewProblem from '../Routes/NewProblem/NewProblem';
import EditProblem from '../Routes/EditProblem/EditProblem';
import TargetGroups from '../Routes/TargetGroups/TargetGroups';
import NewTargetGroup from '../Routes/NewTargetGroup/NewTargetGroup';
import EditTargetGroup from '../Routes/EditTargetGroup/EditTargetGroup';
import Solutions from '../Routes/Solutions/Solutions';
import SingleSolution from '../Routes/SingleSolution/SingleSolution';
import NewSolution from '../Routes/NewSolution/NewSolution';
import EditSolution from '../Routes/EditSolution/EditSolution';
import { Security, ImplicitCallback, SecureRoute } from '@okta/okta-react';
import {  Route } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBarTop: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        backgroundColor: theme.palette.primary.dark,
        height: theme.spacing(3),
        width: '100%',
        top: 0,
        left: 'auto',
        right: 0,
        position: 'fixed',
        zIndex: theme.zIndex.appBar,
    },
    appBarRoot: {
        top: theme.spacing(3),
        backgroundColor: theme.palette.primary.main,
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    grow: {
        flexGrow: 1,
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        paddingTop: theme.spacing(6),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));




const Main = () => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <div className={classes.root}>
            <div className={classes.appBarTop} />
            <AppBar
                position="fixed"
                classes={{root: classes.appBarRoot}}
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <Menu />
                    </IconButton>
                    <AppBarTitle />
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        open={drawerOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        <DrawerContent onClose={handleDrawerToggle} />
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <DrawerContent />
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
           
                <div className={classes.toolbar} />
                <Router primary={false}>
                
                    <AppBarTitleUpdater path="/">
                     
                    
                        <Home path="/" />
                        
                        <NewTargetGroup path="/newTargetGroup" />
                        <EditTargetGroup path="/editTargetGroup/:targetGroupSlug" />
                        <NewProblem path="/newProblem" />
                        <EditProblem path="/editProblem/:problemId"/>
                        <SingleSolution path="/solutions/:solutionId" />
                        <NewSolution path="/newSolution" />
                        <EditSolution path="/editSolution/:solutionId" />
                        <ImplicitCallback path="/implicit/callback" />
                        
                        
                    </AppBarTitleUpdater> 
        
                </Router>
                <Router>
                <AppBarTitleUpdater path="/">
                <SecureRoute path="/targetgroups" component={TargetGroups}/>
                <SecureRoute path='/problems' component={Problems} />
                <SecureRoute path="/solutions" component={Solutions} />

                </AppBarTitleUpdater> 
                </Router>

            </main>
        </div>
    );
};

export default Main;
