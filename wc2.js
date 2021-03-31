const chalk = require('chalk');
const fs = require('fs')

if (process.argv.length < 3) {
  console.log(chalk.red('Usage: node wc.js file.txt'))
  process.exit(1)
}

if (!fs.existsSync(process.argv[process.argv.length - 1])) {
  console.log(chalk.red(`Error: ${process.argv[process.argv[process.argv.length - 1]]} does not exist`))
  process.exit(1)
}

const stats = fs.statSync(process.argv[process.argv.length - 1])
const txt = fs.readFileSync(process.argv[process.argv.length - 1], 'utf-8')
if (!stats.isFile()) {
  console.log(chalk.red(`Error: ${process.argv[process.argv.length - 1]} is not a file`))
  process.exit(1)
}

switch (process.argv[process.argv.length - 2]) {
  case '-l':
    return console.log(chalk.green('Caracter Number: '), (chalk.yellow(`${stats.size}`)))
    break
  case '-w':
    return console.log(chalk.green('Word Number: '), (chalk.yellow(`${txt.split(' ').length}`)))
    break
  case '-c':
    return console.log(chalk.green('Line Number: '), (chalk.yellow(`${txt.split('\n').length}`)))
    break
  default:
    console.log(chalk.green('Caracter Number: '), (chalk.yellow(`${stats.size}`)))
    console.log(chalk.green('Word Number: '), (chalk.yellow(`${txt.split(' ').length}`)))
    console.log(chalk.green('Line Number: '), (chalk.yellow(`${txt.split('\n').length}`)))
}

