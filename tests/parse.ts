import * as fs from 'fs';
import * as path from 'path';
import { parse } from '../src/index';

const loaded_baseline = load_baseline();

it('should throw error with invalid snapshot header', () => {
  expect(() => parse('')).toThrowErrorMatchingSnapshot();
});

it('should throw error with unexpected snapshot version', () => {
  expect(() => parse('// Jest Snapshot v0,')).toThrowErrorMatchingSnapshot();
});

it('should parse correctly with snapshot v1', () => {
  expect(parse(load_fixture('v1'))).toEqual(loaded_baseline);
});

function load_fixture(version: string) {
  return fs.readFileSync(
    path.resolve(__dirname, `../fixtures/${version}/test.js.snap`),
    'utf8',
  );
}

function load_baseline() {
  const data = require('../fixtures/data');
  const baseline: Record<string, string> = {};

  Object.keys(data).forEach(type => {
    const tests = data[type];
    Object.keys(tests).forEach(kind => {
      baseline[`${type} ${kind} 1`] = tests[kind];
    });
  });

  return baseline;
}
