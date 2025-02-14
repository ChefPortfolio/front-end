//* Alexis */

//Imports 
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import OrangeEmblem from '../logos/OrangeEmblem.js';

//* Material-UI */
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#D96704',
    '&:hover': {
      backgroundColor: '#141c26'
    }
  }
}));
//* */

const RecipePage = () => {
    const [newPost, setNewPost] = useState({title: '', description: '', instructions: '', meal_type: ''});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // * Get request for getting posts data goes HERE */
        axiosWithAuth().get(`https://lambdacooks.herokuapp.com/api/recipes/`)
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => {
                console.log('Error in GET post api', err.response);
            })
    }, [])

  //* Material-UI */
  const inputLabel = React.useRef(0);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  //*  */

  const handleChanges = e => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const addPost = e => {
    e.preventDefault();
    //* POST request for adding a post goes HERE */
    axiosWithAuth()
      .post(`https://lambdacooks.herokuapp.com/api/recipes`, newPost)
      .then(res => {
        console.log('POST request for addPost', res);
        setNewPost(res.data);

      })
      .catch(err => {
        console.log('Error in POST request for addPost', err.response);
      });
    setNewPost('');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div>
          <OrangeEmblem />
        </div>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="title"
                variant="outlined"
                fullWidth
                id="title"
                label="Recipe Name"
                autoFocus
                InputProps={{
                  classes: {
                    outlined: classes.outlined,
                    focused: classes.focused
                  }
                }}
                value={posts.title}
                required
                onChange={handleChanges}
              />
            </Grid>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                name="meal_type"
                label="Meal Type"
                id="meal_type"
                value={posts.meal_type}
                onChange={handleChanges}
                labelWidth={labelWidth}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Breakfast">Breakfast</MenuItem>
                <MenuItem value="Lunch">Lunch</MenuItem>
                <MenuItem value="Dinner">Dinner</MenuItem>
              </Select>
            </FormControl>
            <Grid item xs={12} sm={6}>
              <TextField
                name="description"
                variant="outlined"
                fullWidth
                id="description"
                label="Short Description"
                value={posts.description}
                required
                onChange={handleChanges}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="instructions"
                variant="outlined"
                fullWidth
                id="instructions"
                label="Recipe Prepare Instructions"
                value={posts.instructions}
                required
                onChange={handleChanges}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                  name="pic_url"
                  variant="outlined"
                  fullWidth
                  id="pic_url"
                  label="Photo"
                  autoFocus
                  InputProps={{
                  classes: {
                      outlined: classes.outlined,
                      focused: classes.focused
                  }
                  }}
                  value={posts.pic_url}
                  required
                  onChange={handleChanges}
              />
              </Grid>
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onChange={handleChanges}
            onClick={addPost}
          >
            Add Recipe
          </Button>
        </form>
      </div>
      
    </Container>
  );
};

export default RecipePage;