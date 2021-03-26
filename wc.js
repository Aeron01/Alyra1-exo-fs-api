const chalk = require('chalk');
const fs = require('fs')

if (process.argv.length !== 3) {
  console.log(chalk.red('Usage: node wc.js file.txt'))
  process.exit(1)
}

if (!fs.existsSync(process.argv[2])) {
  console.log(chalk.red(`Error: ${process.argv[2]} does not exist`))
  process.exit(1)
}

const stats = fs.statSync(process.argv[2])
const txt = fs.readFileSync(process.argv[2], 'utf-8')
if (!stats.isFile()) {
  console.log(chalk.red(`Error: ${process.argv[2]} is not a file`))
  process.exit(1)
}

console.log(chalk.green('Caracter Number: '), (chalk.yellow(`${stats.size}`)))
console.log(chalk.green('Word Number: '), (chalk.yellow(`${txt.split(' ').length}`)))
console.log(chalk.green('Line Number: '), (chalk.yellow(`${txt.split('\n').length}`)))