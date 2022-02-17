import { expect, describe, it } from 'vitest';
import { toCapitalize } from '../utilities';
describe('Utilities functions', () => {
  it('returns a string capitilized', () => {
    const str = 'tEST';
    expect(
      toCapitalize(str).charAt(0) === 'T' &&
        toCapitalize(str).slice(1) === 'est'
    ).toBe(true);
  });
});
