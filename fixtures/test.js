const data = require('./data');

Object.keys(data).forEach(type => {
  describe(type, () => {
    const tests = data[type];
    Object.keys(tests).forEach(kind => {
      it(kind, () => {
        expect(tests[kind]).toMatchSnapshot();
      });
    });
  });
});
