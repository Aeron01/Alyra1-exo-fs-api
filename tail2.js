const chalk = require('chalk');
const fs = require('fs')

if (process.argv.length < 3 || process.argv.length === 4 || process.argv.length > 5) {
  console.log(chalk.red('Usage: node tail.js [option: -n Number (default 10)] file.txt -The file must contain at least 10 lines!'))
  process.exit(1)
}
let line = process.argv[2]
if (process.argv[4] === undefined) {
  process.argv[4] = line
}
console.log(line)
if (!fs.existsSync(process.argv[4])) {
  console.log(chalk.red(`Error: ${process.argv[4]} does not exist`))
  process.exit(1)
}
if (isNaN(process.argv[3])) {
  (console.log(chalk.redBright(`Error: ${process.argv[3]} is not a number.`)))
  process.exit(1)
}

const stats = fs.statSync(process.argv[4])

if (!stats.isFile()) {
  console.log(chalk.red(`Error: ${process.argv[4]} is not a file`))
  process.exit(1)
}
let nbDspLine = process.argv[3]
if (process.argv[2] !== '-n') {
  nbDspLine = 10
}

const txt = fs.readFileSync(process.argv[4], 'utf-8')
let nbline = txt.split('\n')

if (nbline.length < nbDspLine) {
  console.log(chalk.redBright(`Error: The file is under 10 line. ${process.argv[4]} contains ${nbline.length} lines.`))
  process.exit(1)
}

console.log(chalk.green(`Here are the last ${nbDspLine} lines of the file named ${process.argv[4]}.`))
for (let i = nbline.length - nbDspLine; i < nbline.length; i++) {
  console.log(nbline[i])
}