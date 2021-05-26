const Aqua = require('./lib/common/Aqua')

module.exports = class {
    constructor({argv}) {
        this.Aqua = new Aqua({
            baseUrl: argv.baseUrl,
            username: argv.username,
            password: argv.password
        })

        this.argv = argv
    }

    async execute () {
        const token = await this.Aqua.login()
        return token
    }
}