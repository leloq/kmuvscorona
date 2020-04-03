import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 60
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function SearchAppBar() {
  const classes = useStyles();

   const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };


  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ backgroundColor: 'rgba(63, 81, 181, 1)', boxShadow: 'none'}}>
        <Toolbar>
        <ClickAwayListener onClickAway={handleClickAway}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick ={handleClick}
          >

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>
              <Link to="/" style={{ textDecoration: 'none'}}>
                  Startseite
                </Link>
              </MenuItem>

              <MenuItem onClick={handleClose}>
              <Link to="/solutions" style={{ textDecoration: 'none'}}>
                  Lösungsansätze
                </Link>
              </MenuItem>

              <MenuItem onClick={handleClose}>
              <Link to="/NewSolution" style={{ textDecoration: 'none'}}>
                  Lösung einreichen
                </Link>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <Link to="/help" style={{ textDecoration: 'none'}}>
                    Helfen
                </Link></MenuItem>
                              
              <MenuItem onClick={handleClose}><Link to="/about" style={{ textDecoration: 'none'}}>
                  Über Uns
                </Link></MenuItem>

              <MenuItem onClick={handleClose}>
                <Link to="/contact" style={{ textDecoration: 'none'}}>
                    Kontakt
                </Link></MenuItem>



            </Menu>


            <MenuIcon />

          </IconButton>
          </ClickAwayListener>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" style={{ textDecoration: 'none', color:'white'}}>
                  KMU vs. Corona
                </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Suche..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}