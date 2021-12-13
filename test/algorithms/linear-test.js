import { assert } from 'chai';
import casual from 'casual';
import geometric from '../../src/algorithms/geometric';

describe('geometric algorithm', () => {
  it('New Inverse Function check', () => {
    const min = casual.integer(0, 100);
    const max = casual.integer(900, 1000);
    const originalPosition = casual.integer(100, 900);
    const value = geometric.getValue(originalPosition, min, max);
    const positionFromValue = geometric.getPosition(value, min, max);
    assert.equal(Math.round(positionFromValue), originalPosition);
  });
  it('Version - 2 : of Inverse Function check', () => {
    const min = 10;
    const max = 1000;
    const value = 358;
    const positionFromValue = geometric.getPosition(value, min, max);
    assert.equal(value, geometric.getValue(positionFromValue, min, max));
  });
});
