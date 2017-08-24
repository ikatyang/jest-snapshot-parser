module.exports = {
  undefined: {
    undefined: undefined,
  },
  null: {
    null: null,
  },
  boolean: {
    true: true,
    false: false,
  },
  number: {
    simple: 123,
  },
  string: {
    'single-line simple': 'simple',
    'single-line double-quote': '"double-quote"',
    'single-line backtick': '`backtick`',
    'single-line backslash': '\\backslash\\',
    'single-line template-token': '${template-token${',
    'multi-line simple': 'first\nsecond\nthird',
    'multi-line double-quote': '"first"\n"second"\n"third"',
    'multi-line backtick': '`first`\n`second`\n`third`',
    'multi-line backslash': '\\first\\\n\\second\\\n\\third\\',
    'multi-line template-token': '${first${\n${second${\n${third${',
  },
};
