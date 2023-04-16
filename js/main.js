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

const keys = document.querySelector('#calculate'); //doing this targets all buttons
keys.addEventListener('click', (event) => {
  const { target } = event;
  const { value } = target;
  if (!target.matches('button')) {
    return; //want to pass nothing; exit; not necessary
  } else {
    //putting nothing here ensure that when you click outside of a button, nothing happens
    //console.log(target) --> this is for testing stuff out
  }
});

const calculator = {
  displayText: '0',
  prevTotal: null,

  //METHOD
  parseInput(value) {
    //have any of the non-numeral buttons been clicked?
    switch (value) {
      case '=':
        //calculate the answer
        break;
      case 'Clear':
        //clear screen and all stored values
        break;
      case '.':
        if (this.displayText == 0) {
          //pass '0.' into add text method
          this.addText('0.')
        } else {
          //add value to text string
          this.addText(value)
        }
        break;
      default:
        //add value to text string
        this.addText(value)
        break;
    }
  },
  //METHOD
  addText(value) {
    if (this.displayText === '0') {
      this.displayText = ''
    } else if (this.prevTotal !== null) {
      //this takes 3+3=6 then +3=9, for example
      this.displayText = this.prevTotal;
      this.prevTotal = null;
    }
    if (isNaN(+(value)) && isNaN(+(this.displayText))) {
      /*user has entered an invalid sequence, don't proceed; check whether last character in display AND the entered value are not numbers*/
      if (isNaN(this.displayText.slice(-1))) {
        return; //ends function
      }
    }
    this.displayText += value;
    //output display text to screen
    this.outputText(this.displayText);
  },
  //METHOD
  outputText(text){
    document.querySelector('#display').value = text
  }
};


/*IGNORE THE CODE BELOW*/
// let total = 2;
// document.querySelector('#calculate').addEventListener('click', squaredTwo)

// function squaredTwo() {
//   total=total**2
//   document.querySelector('#display').innerText=total
// }