const chalk = require('chalk');
const fs = require('fs')

if (/*process.argv.length > process.argv[process.argv.length - 1] || */process.argv.length < 3) {
  console.log(chalk.red('Usage: node cat.js file.ext'))
  process.exit(1)
}

for (let i = 2; i < process.argv.length; i++) {
  if (!fs.existsSync(process.argv[i])) {
    console.log(chalk.yellow(`Error: ${process.argv[i]} does not exist`))
    continue
  }

  const stats = fs.statSync(process.argv[i])
  if (!stats.isFile()) {
    console.log(chalk.yellow(`Error: ${process.argv[i]} is not a file`))
    continue
  }

  let file = fs.readFileSync(process.argv[i], 'utf-8')
  file += `\n`
  console.log(file)
}