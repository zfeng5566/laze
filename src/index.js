#!/usr/bin/env node
const {Command, action} = require("commander");
const tinify = require("tinify");
tinify.key = "C99mkGTfmwymq4FWSKTV1nQxVSw3lF1N";
const program = new Command();
program.version("1.0.9");
program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

  // program.command("create [filePath]")
  // .description("执行 create 命令，方便在当前文件夹下创建文件")
  // action(function(filePath,options){
  //   console.log(filePath);
  // });

program.parse(process.argv);

const options = program.opts();

console.log(__dirname);
console.log(process.cwd());
console.log(222222222);
console.log(222222222);
console.log(222222222);

tinify.fromFile("./../img/success.png").toFile("./../img/optimized.png");
if (options.debug) console.log(options);
console.log('pizza details:');
if (options.small) console.log('- small pizza size');
if (options.pizzaType) console.log(`- ${options.pizzaType}`);