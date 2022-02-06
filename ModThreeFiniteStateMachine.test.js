const ModThreeFiniteStateMachine = require('./ModThreeFiniteStateMachine');

describe('Test module three machine correctness', () => {
  test('mod 13 should return 1', () => {
    const fsm = new ModThreeFiniteStateMachine('1101');

    const result = fsm.calculate();

    expect(result).toBe(1);
  });

  test('mod 14 should return 2', () => {
    const fsm = new ModThreeFiniteStateMachine('1110');

    const result = fsm.calculate();

    expect(result).toBe(2);
  });

  test('mod 15 should return 0', () => {
    const fsm = new ModThreeFiniteStateMachine('1111');

    const result = fsm.calculate();

    expect(result).toBe(0);
  });
});

describe('edge cases', () => {
  test('empty input alphabet throw invalid input error', () => {
    const fsm = new ModThreeFiniteStateMachine();

    expect(() => fsm.getNextState('')).toThrowError(/invalid input/i);
  });

  test('empty input string should return initial state/output', () => {
    const fsm = new ModThreeFiniteStateMachine('');
    const result = fsm.calculate();

    expect(result).toBe(0);
  });

  test('input should only be string type', () => {
    const fsm = new ModThreeFiniteStateMachine(100);

    expect(() => fsm.calculate()).toThrowError(/invalid.*type/i);
  });

});

