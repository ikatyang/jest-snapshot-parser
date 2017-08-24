import { version_regex, Parsed } from './constants';
import { parse_v1 } from './v1/parse';

export const parse = (content: string): Parsed => {
  const results = content.match(version_regex);

  if (results === null) {
    throw new Error(`Unexpected snapshot content, there is no snapshot header`);
  }

  const version = results[1];

  switch (version) {
    case 'v1':
      return parse_v1(content);
    default:
      throw new Error(`Unexpected snapshot version: ${version}`);
  }
};
