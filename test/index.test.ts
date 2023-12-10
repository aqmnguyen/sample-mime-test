const { isOddNumber } = require('../src');

describe('isOddNumber method', () => {
  it('false', () => {
    expect(isOddNumber('0')).toEqual(false);
  });
  it('true', () => {
    expect(isOddNumber('1')).toEqual(true);
  });
});
