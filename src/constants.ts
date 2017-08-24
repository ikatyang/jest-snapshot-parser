// https://github.com/facebook/jest/blob/v20.0.4/packages/jest-snapshot/src/utils.js#L23
export const version_regex = /^\/\/ Jest Snapshot (v.+),/;

export type ParsedValue = undefined | null | boolean | number | string;

export interface Parsed {
  [key: string]: ParsedValue;
}
