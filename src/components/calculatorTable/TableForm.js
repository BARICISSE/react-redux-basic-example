
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


var calculate = function (s, stack) {
  //1. init values
  s = s.split(' ').join('');//replace space with empty
  ;//stack to store the block value
  let i = 0; //moving start index
  let sign = '+';//init as positive

  //2. loop through all element in string
  while (i < s.length) {

    let c = s[i];

    if (c === '(') { // find the closed block use it to recursivly calculate the value inside

      let left_block = 1;
      let index = i + 1;

      while (index < s.length && left_block > 0) { //until the block is close which means left_block reduce to zero
        if (s[index] === '(') left_block++;
        else if (s[index] === ')') left_block--;
        index++;
      }

      let innerValue = calculate(s.substring(i + 1, index - 1));//include all elements in the closed block recursively

      i = index;//place the i to the position after close block
      //get back from recursive result and add to current stack

      operation(innerValue, sign, stack);//DO the operation process

    } else if (c.match(/\d/)) { // if it is a number

      let index = i;
      let num = 0;

      while (index < s.length && s[index].match(/\d/)) // loop to the end to get the entire number
      { //parse all digit string to number
        num = num * 10 + parseInt(s[index++]);
      }

      i = index;

      operation(num, sign, stack); // do the operation process

    } else { //if not () or number it must be sign
      sign = c;
      i++;
    }
  }

  function operation(num, sign, stack) {//base on the operation

    if (sign == '+') {
      stack.push(num);//+ just add value to stack
    }
    else if (sign === '-') {
      stack.push(-num);//- add - value to stack
    }
    else if (sign === '*') {
      // since the * have piority pop previous number and do * then push back
      stack.push(stack.pop() * num);
    }
    else if (sign === '/') {
      // since the * have piority pop previous number and do * then push back
      stack.push(stack.pop() / num);
    }

  }

  let result = 0;
  while (stack.length !== 0) result += stack.pop();//add all value in stack together since it only +/-

  return Math.floor(result);
};


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
  ['=', 0, '.', '/']
]
const operators = [ '-', '+', '*', '/', '%']
class TableForm extends Component {
  state = {
    item: '',
    isActiveResult: false
}
  

  changeHandler = (item) => {
    if(!this.state.isActiveResult){
    if(item==='C') this.setState({item: ''})
    if (item === '←') this.setState({ item: this.state.item.substring(0, this.state.item.length - 1)})
  
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
      if (item === '=') {
        const stack = []
        let ans = calculate(this.state.item, stack)
        console.log(ans)
        this.setState({ 
          item: ans,
          isActiveResult: true, 
        })
      }

}
  else {
    this.setState({
      item: '',
      isActiveResult: false
    })
    
  }
    

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
                    className={Number.isInteger(item) || item === '.' ? classes.fab : item === '=' || item === '+' || item === '-' || item === '+' || item === '*' || item === '/' ? classes.fab3 : classes.fab2}>
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

