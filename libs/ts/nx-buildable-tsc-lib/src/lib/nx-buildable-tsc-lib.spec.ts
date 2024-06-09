import { nxBuildableTscLib } from './nx-buildable-tsc-lib';

describe('nxBuildableTscLib', () =>
{
  it('should work', () =>
  {
    expect(nxBuildableTscLib()).toEqual('nx-buildable-tsc-lib');
  });
});
