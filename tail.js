const chalk = require('chalk');
const fs = require('fs')

if (process.argv.length !== 3) {
  console.log(chalk.red('Usage: node tail.js file.txt -The file must contain at least 10 lines!'))
  process.exit(1)
}

if (!fs.existsSync(process.argv[2])) {
  console.log(chalk.red(`Error: ${process.argv[2]} does not exist`))
  process.exit(1)
}

const stats = fs.statSync(process.argv[2])

if (!stats.isFile()) {
  console.log(chalk.red(`Error: ${process.argv[2]} is not a file`))
  process.exit(1)
}

const txt = fs.readFileSync(process.argv[2], 'utf-8')
let nbline = txt.split('\n')

if (nbline.length < 10) {
  console.log(chalk.redBright(`Error: The file is under 10 line. ${process.argv[2]} contains ${nbline.length} lines.`))
  process.exit(1)
}
console.log(chalk.green(`Here are the last 10 lines of the file named ${process.argv[2]}.txt`))
for (let i = nbline.length - 10; i < nbline.length; i++) {
  console.log(nbline[i])
}