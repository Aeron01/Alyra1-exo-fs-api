const chalk = require('chalk');
const fs = require('fs')
let nbLines = 10
let indexFile = 2

if (process.argv.length < 3 || process.argv.length > 5) {
  console.log(chalk.red('Usage: node tail.js [option: -n Number (default 10)] file.txt -The file must contain at least 10 lines!'))
  process.exit(1)
}

if (process.argv[2] === '-n') {
  if (isNaN(process.argv[3])) {
    console.log(chalk.redBright(`Error: ${process.argv[3]} is not a number.`))
    console.log(chalk.red('Usage: node tail.js [option: -n Number (default 10)] file.txt -The file must contain at least 10 lines!'))
    process.exit(1)
  }
  nbLines = Number(process.argv[3])
  indexFile += 2
}
console.log(indexFile)
console.log(nbLines)
if (!fs.existsSync(process.argv[indexFile])) {
  console.log(chalk.red(`Error: ${process.argv[indexFile]} does not exist`))
  process.exit(1)
}

const stats = fs.statSync(process.argv[indexFile])

if (!stats.isFile()) {
  console.log(chalk.red(`Error: ${process.argv[indexFile]} is not a file`))
  process.exit(1)
}

const txt = fs.readFileSync(process.argv[indexFile], 'utf-8')
let nbFileLine = txt.split('\n')

if (nbFileLine.length < nbLines) {
  console.log(chalk.redBright(`Error: The file is under ${nbLines} line. The File ${process.argv[indexFile]} contains ${nbFileLine.length} lines.`))
  process.exit(1)
}

console.log(chalk.green(`Here are the last ${nbLines} lines of the file named ${process.argv[indexFile]}.`))
for (let i = nbFileLine.length - nbLines; i < nbFileLine.length; i++) {
  console.log(nbFileLine[i])
}