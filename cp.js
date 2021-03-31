const chalk = require('chalk');
const fs = require('fs')
const readlineSync = require('readline-sync')

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

let chekfileE = fs.existsSync(process.argv[3])
if (chekfileE === true) {
  if (readlineSync.keyInYN(`The file ${process.argv[3]} exist. Overwrite it ? `)) {

  } else {
    console.log(chalk.cyanBright('Program interupted by user.'))
    process.exit(1)
  }
}
fs.writeFileSync(`${process.argv[3]}`, `${fileCont}`)
console.log(chalk.blueBright(`${process.argv[2]} ==> ${process.argv[3]}`))
console.log(chalk.greenBright('Copy complete !'))