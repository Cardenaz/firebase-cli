#! /usr/bin/env node

const yargs = require("yargs");

console.log("Lulo CLI"); 


const usage = "\nUsage: tran <lang_name> sentence to be translated";
const options = yargs  
      .usage(usage)  
      .option("l", {alias:"collection", describe: "List all collections.", type: "boolean", demandOption
: false })                                                                                                    
      .help(true)  
      .argv;