const chalk = require('chalk')

module.exports = (percentage, message, ...args) => {
  const progress = chalk.yellow(
    `[${Math.round(percentage * 100 * 100) / 100}%]`
  )
  const msg = chalk.green(message)
  const fargs = chalk.white(args.join(' '))
  console.log(`${progress} ${msg} ${fargs}`)
}
