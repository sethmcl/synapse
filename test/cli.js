var should = require('should'),
    cli    = require('../lib/cli');

describe('lib/cli', function() {

  // parseCommandLineArgs()
  describe('.parseCommandLineArgs', function() {

    it('should accept the --port flag', function() {
      var argv = ['node', 'synapse', '--port', '2020'],
          parsed = cli.parseCommandLineArgs(argv);

      parsed.should.have.property('port');
      parsed.port.should.equal(2020);
    });

    it('should parse the --port value', function() {
      var argv = ['node', 'synapse', '--port', '2020'],
          parsed = cli.parseCommandLineArgs(argv);

      parsed.port.should.equal(2020);
    });

    it('should accept the -p flag', function() {
      var argv = ['node', 'synapse', '--p', '1922'],
          parsed = cli.parseCommandLineArgs(argv);

      parsed.should.have.property('port');
    });

    it('should parse the -p value', function() {
      var argv = ['node', 'synapse', '--p', '1922'],
          parsed = cli.parseCommandLineArgs(argv);

      parsed.port.should.equal(1922);
    });
  });
});
