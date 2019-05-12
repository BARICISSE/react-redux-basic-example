
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
  [7, 8, 9, '*'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  ['=', 0, '.', '÷']
]
const operators = [ '-', '+', '*', '÷', '%']
class TableForm extends Component {
  state = {item: ''}
  changeHandler = (item) => {
   
    if(item==='C') this.setState({item: ''})
    if (item === '←') this.setState({ item: this.state.item.substring(0, this.state.item.length - 1)})
    if(item==='+/-'){
      this.state.item.charAt(0) === '-' ? this.setState({item: this.state.item.substring(1, this.state.length)}) : 
      this.setState({item: '-' + this.state.item})
    }
    if (Number.isInteger(item)) {
      this.setState({ item: this.state.item + item })
    }
    if(operators.includes(item)) {
      if(this.state.item !=='')  {
      if( !operators.includes(this.state.item.charAt(this.state.item.length-1))) {
        this.setState({ item: this.state.item + item })
      }
      else {
    this.setState({ item: this.state.item.substring(0, this.state.item.length-1) + item})
        
      }
    }
  }

  }
  isValidExpression = (f) => {

  }
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
                    onClick={() => this.changeHandler(item)}
                    className={Number.isInteger(item) || item === '.' ? classes.fab : item === '=' || item === '+' || item === '-' || item === '+' || item === '*' || item === '÷' ? classes.fab3 : classes.fab2}>
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

