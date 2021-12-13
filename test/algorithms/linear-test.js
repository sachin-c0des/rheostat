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
  it('Shifted - Middle Range Check', () => {
    const min = 0;
    const max = 1024;
    const x = 25;
    const value = geometric.getValue(x, min, max);
    assert.equal(value, 64);
    const positionFromValue = geometric.getPosition(value, min, max);
    assert.equal(positionFromValue, x);
  });
});
