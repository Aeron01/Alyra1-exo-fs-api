// Celui fait par Christophe
const fs = require('fs')
const { basename } = require('path')
const chalk = require('chalk')

const [, , ...cmdArgs] = process.argv;

const basNa = basename(process.argv[1], '.js');

if (cmdArgs.length === 0) {
  console.log(chalk.redBright('Usage: node wc2-cr.js [option] File'))
  process.exit(1)
}

let option = { '-l': false, '-w': false, '-c': false };
console.log(cmdArgs)
const parseOpt = (arr) => {
  let newArr = [];
  for (let arg of arr) {
    if (Object.keys(option).includes(arg)) {
      option[arg] = true;
    } else {
      newArr.push(arg);
    }
  }
  return newArr;
}
const woOpt = parseOpt(cmdArgs);

if (woOpt.length !== 1) {
  console.log(chalk.redBright('Usage: node wc2-cr.js [option] File'));
  process.exit(1);
}

if (!fs.existsSync(woOpt[0])) {
  console.log(chalk.redBright(`${basNa}: cannot access ${woOpt[0]}: No such file or directory`));
  process.exit(1);
}

const stats = fs.statSync(woOpt[0]);
if (stats.isDirectory()) {
  console.log(`${basNa}: ${woOpt[0]}: Is a directory`)
  process.exit(1);
}
else if (stats.isFile()) {
  const explicitOption = Object.values(option).filter(elme => elme);
  if (!explicitOption.length)
    Object.assign(option, { '-l': true, '-w': true, '-c': true });

  let out = ""

  const fileContent = fs.readFileSync(woOpt[0]).toString();
  const lines = fileContent.split('\n');
  if (option['-l'])
    out += `${lines.length}\t`;
  if (option['-w'])
    out += `${lines.map(line => line.split(' ').length).reduce((acc, curr) => acc + curr)}\t`;
  if (option['-l'])
    out += `${stats.size}\t`;
  console.log(`${out}${woOpt[0]}`)
} else {
  console.log(chalk.redBright('Error'));
  process.exit(1);
}

process.exit(0);