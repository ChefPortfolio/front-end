import React, { useEffect, useState } from 'react';

import axios from 'axios';

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

  const [chef, setChef] = useState({});
  console.log('Chef', chef);
  useEffect(() => {
    axios.get(`https://chefbook-stacy.herokuapp.com/api/chefs`)
      .then(res => {
        // console.log('Chef GET res', res.data[2])
        setChef(res.data[2]);
      })
      .catch(err => console.log('Error in chef GET res', err.response))
  }, [])

  return (
    <>
      <Grid container className={classes.root} justify="center">
        {console.log('Checking props', props)}
        <Grid item className={classes.gridItem} s>
          <div className={classes.avatar}><img src={chef.avatar_url} width="200" height="225" /></div>
        </Grid>
        <div className={classes.rowContainer}>
          <Grid item className={classes.gridItem} s>
            <div className={classes.topRow}>
              <div className={classes.name}>
                {chef.first_name} {chef.last_name}
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
              <div className={classes.username}>{chef.username}</div>
              <div className={classes.contact}>{chef.contact}</div>
              <div className={classes.location}>{chef.location}</div>
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
