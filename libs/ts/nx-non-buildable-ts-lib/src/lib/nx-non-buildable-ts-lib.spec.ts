import { nxNonBuildableTsLib } from './nx-non-buildable-ts-lib';

describe('nxNonBuildableTsLib', () => {
  it('should work', () => {
    expect(nxNonBuildableTsLib()).toEqual('nx-non-buildable-ts-lib depends on: nx-buildable-tsc-lib');
  });
});
