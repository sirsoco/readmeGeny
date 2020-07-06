var inquirer = require("inquirer");
const fs = require('fs');
const ansiEscapes = require(
  'ansi-escapes');

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
          message: "Name of repository?",
          name: "title"
        }
      ,
     // {
       // type: "choice",
        //message: "What is your user name?",
       // name: "username",
        //list: 
 // }
  
  ])
      // generate a .md file 
    .then( answers => {
    console.log('commit#1')
    fs.writeFile( 'ReadMe.md' ,   '#' + JSON.stringify(answers.title)  , (err) => {
      
// write title of file

// throw err 
      if (err) throw err ;
        console.log('The  "data to append" was appended to file!');
    });
    
    })}
//vfunction genReadme () {
//};

//.then( genReadMe(answers))