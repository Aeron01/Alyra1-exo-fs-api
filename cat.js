const chalk = require('chalk');
const fs = require('fs')

if (process.argv.length > 7 || process.argv.length < 3) {
  console.log(chalk.red('Usage: node cat.js file.ext file1.ext file2.ext file3.ext file.ext4'))
  process.exit(1)
}

for (let i = 2; i < process.argv.length; i++) {
  if (!fs.existsSync(process.argv[i])) {
    console.log(chalk.red(`Error: ${process.argv[i]} does not exist`))
    process.exit(1)
  }

  const stats = fs.statSync(process.argv[i])
  if (!stats.isFile()) {
    console.log(chalk.red(`Error: ${process.argv[i]} is not a file`))
    process.exit(1)
  }

  let file = fs.readFileSync(process.argv[i], 'utf-8')

  console.log(file)
}