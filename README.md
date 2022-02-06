# Module Three State Machine

A Finite State Machine (FSM) to calculate modulo three of a binary input string.

## Technology

Code is written in Javascript, with tests using Jest.

### To run tests

Please run `npm install` to install Jest, then run `npm run test` to run tests.

### Limitations and Expansion
Because Javascript is not strictly typed and does not support real object-oriented programming, implementation of the Finite Automation is limited. 

To expand upon the current ModThreeStateMachine with a strictly typed language, we can create an FiniteAutomationInterface to force state machines to have getResult, getNextState and calculate functions, as well as a parent class FiniteAutomation to have state and input as attributes, which the FSM class will inherit from.
