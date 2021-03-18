const {Command} = require("commander");
const program = new Command();
program.version("1.0.0");

program
  .option('-d, --debug', '马群是什么？')
  .option('-s, --small', '老骗子！！！！！！')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

const options = program.opts();
if (options.debug) console.log(options);
console.log('pizza details:');
if (options.small) console.log('- small pizza size');
if (options.pizzaType) console.log(`- ${options.pizzaType}`);