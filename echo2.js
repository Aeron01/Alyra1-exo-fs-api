const chalk = require('chalk');

if (process.argv.length < 3 || process.argv.length > 7) {
  console.log(chalk.redBright('Usage: node echo.js string1 string2 string3 string4 string5'))
  process.exit(1)
}
let res = ''
for (let i = 3; i < process.argv.length; i++) {
  res += process.argv[i] + ' '
}
console.log(res)