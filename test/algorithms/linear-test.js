import { assert } from 'chai';
import casual from 'casual';
import geometric from '../../src/algorithms/geometric';

describe('linear algorithm', () => {
  
  it('Version - 2 : of Inverse Function check', () => {
    const min = 10;
    const max = 1000;
    const value = 358;
    const positionFromValue = geometric.getPosition(value, min, max);
    assert.equal(value, geometric.getValue(positionFromValue, min, max));
  });
});
