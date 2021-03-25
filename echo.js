const chalk = require('chalk');

if (process.argv.length !== 7) {
  console.log(chalk.redBright('Usage: node echo.js string1 string2 string3 string4 string5'))
  process.exit(1)
}

console.log(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6])