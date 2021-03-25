const chalk = require('chalk');
const fs = require('fs')

if (process.argv.length !== 3) {
  console.log(chalk.red('Usage: node tail.js file.txt'))
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
let nbline = txt.split('\n')

//console.log(nbline.length)

for (let i = nbline.length - 10; i < nbline.length; i++) {
  console.log(nbline[i])
}