import { nxBuildableTscLib } from "@ts/nx-buildable-tsc-lib";

export function nxNonBuildableTsLib(): string {
  const buildableLibOutput = nxBuildableTscLib();
  return 'nx-non-buildable-ts-lib depends on: ' + buildableLibOutput;
}
