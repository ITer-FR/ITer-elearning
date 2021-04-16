import { greeter } from '../greeter';

describe('greeter', () => {
  it('greets some name', () => {
    expect(greeter('ITers')).toEqual({
      greetings: 'Hello ITers !',
    });
  });
});
