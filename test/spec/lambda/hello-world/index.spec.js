const helloWorld = require('../../../../lambda/helloworld/index');

describe('handler', () => {
  it('should return an "Hello World" object', done => {
    helloWorld.handler(null, null, (error, result) => {
      expect(result).toEqual({
        Hello: 'World 5',
        This: 'is production'
      });
      done();
    });
  });
});
