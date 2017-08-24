# jest-snapshot-parser

[![npm](https://img.shields.io/npm/v/jest-snapshot-parser.svg)](https://www.npmjs.com/package/jest-snapshot-parser)
[![build](https://img.shields.io/travis/ikatyang/jest-snapshot-parser/master.svg)](https://travis-ci.org/ikatyang/jest-snapshot-parser/builds)
[![coverage](https://img.shields.io/codecov/c/github/ikatyang/jest-snapshot-parser/master.svg)](https://codecov.io/gh/ikatyang/jest-snapshot-parser)

parse jest snapshot content (*.snap file)

[Changelog](https://github.com/ikatyang/jest-snapshot-parser/blob/master/CHANGELOG.md)

## Install

```sh
# using npm
npm install --save jest-snapshot-parser

# using yarn
yarn add jest-snapshot-parser
```

## Usage

```ts
import { readFileSync } from 'fs';
import { parse } from 'jest-snapshot-parser';

const snap_content = readFileSync('path/to/your/snap/file', 'utf8');
parse(snap_content); //=> JSON from *.snap file
```

**NOTE**: Only support snapshots that their original values are primitive types.

## API

```ts
function parse(content: string): { [key: string]: undefined | null | boolean | number | string };
```

## Development

```sh
# lint
yarn run lint

# build
yarn run build

# test
yarn run test
```

## License

MIT © [Ika](https://github.com/ikatyang)
