const chalk = require('chalk');
const fs = require('fs')

if (/*process.argv.length > process.argv[process.argv.length - 1] || */process.argv.length < 3) {
  console.log(chalk.red('Usage: node cat.js file.ext'))
  process.exit(1)
}
if (!stats.isFile()) {
  console.log(chalk.red(`Error: ${process.argv[i]} is not a file`))
  process.exit(1)
}
for (let i = 2; i < process.argv.length; i++) {
  if (!fs.existsSync(process.argv[i])) {
    console.log(chalk.red(`Error: ${process.argv[i]} does not exist`))
    process.exit(1)
  }

  const stats = fs.statSync(process.argv[i])

  let file = fs.readFileSync(process.argv[i], 'utf-8')
  file += `\n`
  console.log(file)
}