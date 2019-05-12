
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import { FormControl, List, Paper} from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';


const nums = [
  ['C', '+/-', '%', '←'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  ['=', 0, '.', '÷']
]

const styles = theme => ({
  fab: {
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    backgroundColor: 'black'
  },
  fab2: {
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    backgroundColor: '#8B13DB'
  },
  fab3: {
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    backgroundColor: '#ee7607'
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  list: {
    margin: 0,
  },
  paper: {
    display: 'inline-block',
    position: 'relative',
    backgroundColor: 'white'
  }
});

{/* <Fab color="primary" aria-label="Add" className={classes.fab}>
  <AddIcon />
</Fab>
  <Fab color="secondary" aria-label="Edit" className={classes.fab}>
    <Icon>1</Icon>
  </Fab>
  <Fab variant="extended" aria-label="Delete" className={classes.fab}>
    <NavigationIcon className={classes.extendedIcon} />
    Extended
      </Fab>
  <Fab disabled aria-label="Delete" className={classes.fab}>
    <DeleteIcon />
  </Fab> */}
function TableForm(props) {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <div></div>
      <div>
        
        {
          nums.map((element, index) =>
            <List className={classes.List} key={index}>
              {element.map((item, position) =>
                <FormControl key={item} >
                  <Fab color='primary' aria-label="Edit" 
                    className={Number.isInteger(item) || item === '.' ? classes.fab : item === '=' ||item === '+' || item === '-' || item === '+' || item === 'x' || item === '÷' ? classes.fab3 : classes.fab2}>
                    <Icon>{item}</Icon>
                  </Fab>
                </FormControl>
              )

              }
              
            </List>
          )}
      </div>
    </Paper>
  );
}

TableForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableForm);

