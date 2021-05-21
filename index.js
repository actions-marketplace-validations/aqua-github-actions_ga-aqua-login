const core = require('@actions/core');
const github = require('@actions/github');

const Action = require('./action')

async function exec () {
  try {
    if (!(process.env.AQUA_BASE_URL || core.getInput('aqua-base-url'))) throw new Error('Please specify aqua-base-url as input or AQUA_BASE_URL as env')
    if (!(process.env.AQUA_PASSWORD || core.getInput('aqua-password'))) throw new Error('Please specify aqua-password as input or AQUA_PASSWORD as env')
    if (!(process.env.AQUA_USERNAME || core.getInput('aqua-username'))) throw new Error('Please specify aqua-username as input or AQUA_USERNAME as env')

    const argv = {
        baseUrl: process.env.AQUA_BASE_URL || core.getInput('aqua-base-url'),
        username: process.env.AQUA_USERNAME || core.getInput('aqua-username'),
        password: process.env.AQUA_PASSWORD || core.getInput('aqua-password')
    }

    const result = await new Action({argv}).execute()
    if (result) {
        core.setOutput('token', result['access_token'])
        core.setSecret(result['access_token'])
        return
    }

    console.log('Failed to login.')
    process.exit(78)

  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

exec()
