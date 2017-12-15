import { Parsed, ParsedValue } from '../constants';

export const parse_v1 = (content: string) => {
  const data = get_data(content);
  return Object.keys(data).reduce<Parsed>(
    (parsed, key) => ({ ...parsed, [key]: parse(data[key]) }),
    {},
  );
};

function parse(value: string): ParsedValue {
  const reverted_value = revert_extra_line_breaks(value).replace(/\n/g, '\\n');
  try {
    return reverted_value === 'undefined'
      ? undefined
      : JSON.parse(reverted_value);
  } catch (error) {
    // istanbul ignore next
    throw new Error(
      `Unexpected error while parsing:\n\n>>> start >>>\n${reverted_value}\n<<< end <<<\n\n${
        error.message
      }`,
    );
  }
}

// https://github.com/facebook/jest/blob/v20.0.4/packages/jest-snapshot/src/utils.js#L128
function revert_extra_line_breaks(str: string) {
  return str.includes('\n') ? str.slice(1, -1) : str;
}

// https://github.com/facebook/jest/blob/v20.0.4/packages/jest-snapshot/src/utils.js#L98
function get_data(content: string): Record<string, string> {
  const data = Object.create(null);
  const populate = new Function('exports', content);
  populate(data);
  return data;
}
