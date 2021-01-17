import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';

import { logoutRequest } from '../../store/modules/auth/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = ({ logoutRequest }) => {
  const classes = useStyles();

  const { isSignedIn } = useSelector((state) => state.auth);
  const { user, loading: userLoading } = useSelector((state) => state.user);
  const username = userLoading ? 'visitante' : user && user.name;

  // Menu handlers
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHome = () => {
    handleClose();
    history.push('/home');
  };

  const handleHistory = () => {
    handleClose();
    history.push('/history');
  };

  const handleLogout = () => {
    handleClose();
    logoutRequest();
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='home'
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        {isSignedIn && (
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleHome}>Home</MenuItem>
            <MenuItem onClick={handleHistory}>Histórico</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        )}

        <Typography variant='h6' className={classes.title}>
          EstagiHora
        </Typography>
        {isSignedIn && (
          <Grid
            spacing={2}
            container
            direction='row'
            justify='flex-end'
            alignItems='center'
          >
            <Grid item>
              <span>Olá, {username}</span>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  logoutRequest: PropTypes.func.isRequired,
};

export default connect(null, { logoutRequest })(Navbar);
