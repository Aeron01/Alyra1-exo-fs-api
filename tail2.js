//--Chargement des modules dont on a besoin
const chalk = require('chalk');
const fs = require('fs')
//Definission des paramettre par defaut
let nbLines = 10
let indexFile = 2
//Verification des argument entrer en ligne de commande
if (process.argv.length < 3 || process.argv.length > 5) {
  console.log(chalk.red('Usage: node tail.js [option: -n Number (default 10)] file.txt'))
  process.exit(1)
}
//Verification si l'option '-n' est présente ou non dans les arguments en ligne de commande
//et vérification si l'argument après l'option est bien un nombre
if (process.argv[2] === '-n') {
  if (isNaN(process.argv[3])) {
    console.log(chalk.redBright(`Error: ${process.argv[3]} is not a number.`))
    console.log(chalk.red('Usage: node tail.js [option: -n Number (default 10)] file.txt'))
    process.exit(1)
  }
  nbLines = Math.abs(Number(process.argv[3]))
  indexFile += 2
}

//Vérification si le fichier existe bien

if (!fs.existsSync(process.argv[indexFile])) {
  console.log(chalk.red(`Error: ${process.argv[indexFile]} does not exist`))
  process.exit(1)
}

//Vérification si le fichier n'est pas un dossier

const stats = fs.statSync(process.argv[indexFile])
if (!stats.isFile()) {
  console.log(chalk.red(`Error: ${process.argv[indexFile]} is not a file`))
  process.exit(1)
}

//Vérification si le fichier a bien un nombre supérieur au nombre de ligne souhaiter

const txt = fs.readFileSync(process.argv[indexFile], 'utf-8')
let tabtxt = txt.split('\n')
let numFileLine = tabtxt.length
if (numFileLine < nbLines) {
  console.log(chalk.yellowBright(`The file is under ${nbLines} line. The File ${process.argv[indexFile]} contains ${numFileLine} lines.`))
  nbLines = numFileLine
}

//Traitement de l'affichage de la demande

console.log(chalk.green(`Here are the last ${nbLines} lines of the file named ${process.argv[indexFile]}.`))
for (let i = numFileLine - nbLines; i < numFileLine; i++) {
  console.log(tabtxt[i])
}