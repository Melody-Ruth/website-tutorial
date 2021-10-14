import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/material/styles';
import '../App.css';
import './NavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';

/*const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    myToolBar: {
      justifyContent: "space-between",
    },
  }));*/

const NavBar = ({}) => {
    //const classes = useStyles();
    return (
            <AppBar position="static" className="appbar">
            <Toolbar className="myToolBar">
                <Typography variant="h5" className="myName">
                Website Tutorial
                </Typography>
                <div className="navButtons">
                    <Button color="inherit" component={Link} to={'/website-tutorial/'}>Tutorial</Button>
                    <Button color="inherit" component={Link} to={'/website-tutorial/about'}>About</Button>
                    <Button color="inherit" component={Link} to={'/website-tutorial/links'}>Resources</Button>
                    <Button color="inherit" component={Link} to={'/website-tutorial/critique'}>Critique</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;