import React from 'react';

// Material UI
import ChatIcon from '../logos/ChatIcon';
import BellIcon from '../logos/BellIcon';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// import modal
import PostModal from './PostModal';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '75px auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },

  avatar: {
    width: 200,
    height: 200,
    backgroundColor: 'red'
  },

  rowContainer: {
      
  },

  topRow: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },

  bottomRow: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      top: 0
  },

  name: {
    fontSize: 48,
    fontWeight: 500
  },

  chat: {
    paddingLeft: 600
  },

  bell: {
    paddingLeft: 10
  },

  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2)
  }
}));

const Chef = props => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root} justify="center">
        {console.log('Checking props', props)}
        <Grid item className={classes.gridItem} s>
          <div className={classes.avatar}>{props.chef.avatar_url}</div>
        </Grid>
        <div className={classes.rowContainer}>
          <Grid item className={classes.gridItem} s>
            <div className={classes.topRow}>
              <div className={classes.name}>
                {props.chef.first_name} {props.chef.last_name}
              </div>
              <div className={classes.chat}>
                <ChatIcon />
              </div>
              <div className={classes.bell}>
                <BellIcon />
              </div>
            </div>
          </Grid>
          <Grid item className={classes.gridItem} s>
            <div className={classes.bottomRow}>
              <div className={classes.username}>{props.chef.username}</div>
              <div className={classes.contact}>{props.chef.contact}</div>
              <div className={classes.location}>{props.chef.location}</div>
            </div>
          </Grid>
        </div>

        {/* if(localStorage.getItem('token')) {
                    return <PostModal />
                } else {
                    return <button className="follow-btn">Follow</button>
                } */}
      </Grid>
    </>
  );
};

export default Chef;
