
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import { FormControl, List, Paper } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';





const styles = theme => ({
  fab: {
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    backgroundColor: 'black'
  },
  fab2: {
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    backgroundColor: '#464949'
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
    backgroundColor: '#1F2125'
  },
  input: {
    height: '4em',
    display: 'flex',
    justifyContent: 'flex - end',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '1.4em',
    backgroundColor: '#2E3034',
    color: '#ffffff',
    padding: '0.5em',
    outline: '1px solid #888888'
  }
});
const nums = [
  ['C', '+/-', '%', '←'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  ['=', 0, '.', '÷']
]
class TableForm extends Component {
  state = {item: ''}
  render() {
  const { classes } = this.props;
  return (
    <Paper className={classes.paper}>
      <div className={classes.input} >
        {this.state.item}
      </div >
      <div>

        {
          nums.map((element, index) =>
            <List className={classes.List} key={index}>
              {element.map((item, position) =>
                <FormControl key={item} >
                  <Fab color='primary' aria-label="Edit"
                    onClick={() => this.setState({ item: this.state.item + item })}
                    className={Number.isInteger(item) || item === '.' ? classes.fab : item === '=' || item === '+' || item === '-' || item === '+' || item === 'x' || item === '÷' ? classes.fab3 : classes.fab2}>
                    <Icon
                    
                    >{item}</Icon>
                  </Fab>
                </FormControl>
              )

              }

            </List>
          )}
      </div>
    </Paper>
  )};
}

TableForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableForm);

