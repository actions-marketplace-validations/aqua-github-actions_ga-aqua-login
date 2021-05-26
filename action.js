const Aqua = require('./lib/common/Aqua');

module.exports = class {
  constructor({argv}) {
    this.Aqua = new Aqua({
      baseUrl: argv.baseUrl,
    });

    this.argv = argv;
  }

  async execute() {
    const token = await this.Aqua.login({
      username: this.argv.username,
      password: this.argv.password,
    });
    return token;
  }
};
