var inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile) ;

//promptUser()
// prompts user for what's to be included in read me 
//function promptUser ()
promptUser()
function promptUser() {
    inquirer.prompt([
        {
          type: "input",
          message: "What is your user name?",
          name: "username"
        }
      ])
    .then( answers =>
// generate a .md file 

   console.log('commit#1')
      )  }
    // fs.writeFIle( 'log.txt' , answers )
//vfunction genReadme () {
//};

//.then( genReadMe(answers))