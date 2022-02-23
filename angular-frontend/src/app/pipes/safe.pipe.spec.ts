import { SafePipe } from './safe.pipe';

describe('SafePipe', () => {
  it('create an instance', () => {
    // @ts-ignore
    const pipe = new SafePipe();
    expect(pipe).toBeTruthy();
  });
});
