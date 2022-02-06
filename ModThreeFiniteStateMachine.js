class ModThreeFiniteStateMachine
{
  constructor(inputString = '')
  {
    this.availableStates = ['S0', 'S1', 'S2'];
    this.availableInputAlphabet = ['0', '1'];

    // initial state
    this.state = 'S0';

    this.inputString = inputString;
  }

  // Transition function to get next state based on input alphabet
  getNextState = (inputAlphabet) => {
    if (!this.availableInputAlphabet.includes(inputAlphabet)) {
      throw new Error('Invalid input alphabet.');
    }

    switch (this.state) {
      case 'S0':
        if (inputAlphabet === '1') {
          this.state = 'S1';
        }
        break;
      case 'S1':
        if (inputAlphabet === '0') {
          this.state = 'S2';
        } else {
          if (inputAlphabet === '1') {
            this.state = 'S0';
          }
        }
        break;
      case 'S2':
        if (inputAlphabet === '0') {
          this.state = 'S1';
        }
        break;
      default:
        throw new Error('Invalid state.');
    }
  }

  getResult = () => {
    if (!this.availableStates.includes(this.state)) {
      throw new Error('Invalid final state.');
    }

    switch (this.state) {
      case 'S0':
        return 0;
      case 'S1':
        return 1;
      case 'S2':
        return 2;
      default:
        break;
    }
  }

  calculate = () => {
    if (typeof this.inputString !== 'string') {
      throw new Error('Invalid input type.');
    }

    // Only do next state calculation if input string is not empty
    if (this.inputString !== '') {
      for (let inputAlphabet of this.inputString.split('')) {
        this.getNextState(inputAlphabet);
      }
    }
    return this.getResult();
  }
}

module.exports = ModThreeFiniteStateMachine;
