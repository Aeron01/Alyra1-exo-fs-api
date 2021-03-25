const chalk = require('chalk');
const fs = require('fs')

if (process.argv.length !== 4) {
  console.log(chalk.red('Usage: node cp.js src.txt dst.txt'))
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

let fileCont = fs.readFileSync(process.argv[2], 'utf-8')

fs.closeSync(fs.openSync(`${process.argv[3]}`, 'w'))
fs.writeFileSync(`${process.argv[3]}`, `${fileCont}`)
console.log(chalk.greenBright('Copy complete !'))