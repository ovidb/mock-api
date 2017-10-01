import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = theme => ({
  // eslint-disable-line no-unused-vars
  root: {
    marginTop: 0,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const LoginWithGoogle = () => (
  <Button href="/auth/google" color="contrast">
    Login with Google
  </Button>
);

const LogOut = () => (
  <Button href="/api/logout" color="contrast">
    Log Out
  </Button>
);

const LoginButton = ({ loginState }) => {
  switch (loginState) {
    case null:
      return null;
    case false:
      return <LoginWithGoogle />;
    default:
      return <LogOut />;
  }
};

class Header extends Component {
  render() {
    const { classes, auth } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="contrast"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
            <LoginButton loginState={auth} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(withStyles(styles)(Header));
