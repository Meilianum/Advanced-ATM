import  inquirer from "inquirer"

let  myBalance = 20000; // dollar
let  mypin    = 2233;

let pinAnswer = await inquirer.prompt(
  [
    {
        name:  "pin",
        message: "Enter your pin",
        type:    "number",
    },
]
)
  if(pinAnswer === "mypin"){
console.log('correct pin code !!!')
  }

 let operationAns = await inquirer.prompt(
    [
  { name: "operation",
    message: 'please selcet the option',
  type:    "list",
      choices: ["withdraw", "checkbalance", "insufficantbalance"]
   }
]
 );
 console.log(operationAns. operation);






  if(operationAns.operation === "withdraw") {   
  
    let amountAns = await inquirer.prompt(
 [
 {
    name:  "amount",
   message: "Enter your amount",
     type:  "number"
  }
]
);
  

  myBalance -= amountAns.amount
  console.log("your remaning balance is :" +myBalance)


  }else if(operationAns.operation){
 console.log('your balance is' + myBalance)
  };
    
  
 


  


  

    
    
    