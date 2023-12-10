import { getMimeType, getMimeExtension } from '../src';

describe('getMimeType method', () => {
  it('works', () => {
    expect(getMimeType('text')).toEqual('text/plain');
  });
});

describe('getMimeExtension method', () => {
  it('works', () => {
    expect(getMimeExtension('text/plain')).toEqual('txt');
  });
});
