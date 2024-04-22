#! /usr/bin/env node

import inquirer from "inquirer";
let answer=await inquirer.prompt([
    {message:"Enter first number",type:"number",name:"firstnumber"},
    {message:"Enter second number",type:"number",name:"secondnumber"},
    {message:"Select one the following operaters ",
        type:"list",
        name:"operaters",
        choices:["Addition","Subtraction","Multiplication","Division"]
    }
]);

if(answer.operaters==="Addition"){
console.log(answer.firstnumber+answer.secondnumber);
}
else if(answer.operaters==="Subtraction"){
    console.log(answer.firstnumber-answer.secondnumber);
}
else if(answer.operaters==="Multiplication"){
    console.log(answer.firstnumber*answer.secondnumber);
}
else if(answer.operaters==="Division"){
    console.log(answer.firstnumber/answer.secondnumber);
}