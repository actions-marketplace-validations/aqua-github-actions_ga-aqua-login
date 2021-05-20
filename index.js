const core = require('@actions/core');
const github = require('@actions/github');

const Action = require('./action')

async function exec () {
  try {
    if (!process.env.AQUA_BASE_URL) throw new Error('Please specify AQUA_BASE_URL env')
    if (!process.env.AQUA_PASSWORD) throw new Error('Please specify AQUA_PASSWORD env')
    if (!process.env.AQUA_USERNAME) throw new Error('Please specify AQUA_USERNAME env')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

exec()
