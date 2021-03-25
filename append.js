const chalk = require('chalk');
const fs = require('fs')
let contFil = ''
if (process.argv.length > process.argv[process.argv.length - 1] || process.argv.length < 5) {
  console.log(chalk.red('Usage: node append.js file.ext file1.ext file2.ext file3.ext file4.ext file5.ext dst.txt'))
  process.exit(1)
}



for (let i = 2; i < process.argv.length - 1; i++) {
  if (!fs.existsSync(process.argv[i])) {
    console.log(chalk.red(`Error: ${process.argv[i]} does not exist`))
    process.exit(1)
  }

  const stats = fs.statSync(process.argv[i])
  if (!stats.isFile()) {
    console.log(chalk.red(`Error: ${process.argv[i]} is not a file`))
    process.exit(1)
  }

  let fileCont = fs.readFileSync(process.argv[i], 'utf-8')

  fs.appendFileSync(`${process.argv[process.argv.length - 1]}`, `${fileCont}\n`, 'utf-8')

}

console.log(chalk.greenBright('Copy complete !'))