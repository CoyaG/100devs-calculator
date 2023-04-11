/* What does a calculator need to do?
1. Accept user inputs
2. Should accept decimal numbers
3. Store those inputs
4. Recognize inputs and perform calculations
5. Return a result 

Extras:
- Display all input as it is being entered
- Store previous total as start of next operation
- Functional clear button
- Prevent invalid inputs (operators next to each other, etc.) */

const keys = document.querySelector('.calc-buttons');//doing this targets all buttons
  keys.addEventListener('click', event => {
    const {target} = event;
    const {value} = target;
    if(!target.matches('button')){
      return; //want to pass nothing; exit; not necessary
    }else{
      //putting nothing here ensure that when you click outside of a button, nothing happens
      //console.log(target) --> this is for testing stuff out
    }
  })

const calculator = {
  displayText: '0',
  prevTotal: null,

  //method:
  parseInput(value){
    if(this.displayText === '0'){
      this.displayText = ''
    }
    
  }
}