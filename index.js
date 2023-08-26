//required modules
const fs = require('fs');
const inquirer = require('inquirer');
const genSVG = require('./lib/shapes');
//shape generator goes down below

function validLength(input){
    return (input.length != 3)? console.log('Keep your letters between 1 and 3 characters.'): true
}

function validInput(input){
    return (input='')?console.log('Please enter a valid character'): true
}

//series of questions we will ask the user for their logo
const questions = [
    {
        name: 'letters',
        type: 'input',
        message: 'Please enter three characters for your logo.',
        validate: validInput
    },
    {
        name: 'shape',
        type: 'list',
        message: 'Which shape would you like to choose for your logo?',
        choices: ['Square', 'Circle', 'Triangle']
    },
    {
        name:'font',
        type:'input',
        message: 'What color would you like your letters to be? If you\'re using hex colors please include #',
        validate: validInput
    },
    {
        name: 'color',
        type: 'input',
        message: 'What color would you like your shape to be? If you\'re using hex colors please include #',
        validate: validInput
    }
];

//Passing questions into inquirer for build
function pass(){
    inquirer.prompt(questions).then(data=>{
        buildSVG(`${data.shape}Logo.svg`,genSVG(data))
    })
}

//Building svg with write file if errors in build are false. if true, console logs the error
function buildSVG(file_name, data){
    fs.writeFile(`./${file_name}`,data,(err)=>{
        if (err){
            console.log(err)
        }else{
            console.log('Successfully created your logo!')
        }
    })
}

pass()