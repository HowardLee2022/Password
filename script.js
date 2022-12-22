
var speChar = true;
var numChar = true;
var lowChar = true;
var upChar = true;
var paSelection = [];
var password="";
var numPass= 0;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function askNum(){
    var userchoice = prompt("choose a number between 10-500");
      {if (userchoice > 500){
        window.alert("Too big, Try again");
        askNum();
      }else if(userchoice<10){
        window.alert("Too Small, Try Again");
        askNum();
      }else {
        return numPass=userchoice;
        }
      }
  }

function typeChar(){
    if(!speChar && !numChar && !lowChar && !upChar){
      window.alert("Need to Choose one. Try Again");
      generatePassword();
    }
  }

function createPass(){
      for(i=0; i<=numPass; i++){
        x=Math.floor(Math.random() * paSelection.length)
        y=paSelection[x][Math.floor(Math.random() * paSelection[x].length)]
        password = password.concat(y);
      }
  }

function generatePassword(){
  password="";
  askNum();
  speChar = confirm("Do you want special character?");
  numChar = confirm("Do you want numbers?");
  lowChar = confirm("Do you want lower case letters?");
  upChar = confirm("Do you want Upper Case Letters?");
  
  typeChar();
  
  var NuminPass = ["0","1","2","3","4","5","6","7","8","9"];
  var lowCharinPass = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upCharinPass=  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specinPass = ["!","@","#","$","%","^","&","*","(",")","_","+"];



  if((!speChar&&numChar)&&(lowChar&&upChar)){

    paSelection = [lowCharinPass, upCharinPass, NuminPass];

  }else if((!speChar&&!numChar)&&(lowChar&&upChar)){

    paSelection = [lowCharinPass, upCharinPass,];

  }else if((!speChar&&!numChar)&&(!lowChar&&upChar)){

    paSelection = [upCharinPass];
  }else if ((!speChar&&numChar)&&(!lowChar&&upChar)){
    
    paSelection = [NuminPass,upCharinPass];

   }else if ((speChar&&!numChar)&&(lowChar&&upChar)){

     paSelection = [lowCharinPass, upCharinPass, specinPass];
  
  }else if ((speChar&&!numChar)&&(!lowChar&&upChar)){

    paSelection = [upCharinPass, specinPass];

  }else if ((speChar&&!numChar)&&(!lowChar&&!upChar)){

    paSelection = [specinPass];

  }else if ((speChar&&!numChar)&&(lowChar&&!upChar)){

    paSelection =[specinPass, lowCharinPass];

  }else if ((speChar&&numChar)&&(!lowChar&&upChar)){

    paSelection = [NuminPass, upCharinPass, specinPass];

  }else if ((speChar&&numChar)&&(!lowChar&&!upChar)){
    
    paSelection = [NuminPass, specinPass];

  }else if ((!speChar&&numChar)&&(!lowChar&&!upChar)){

    paSelection = [NuminPass];

  }else if ((!speChar&&numChar)&&(!lowChar&&upChar)){
    
    paSelection = [NuminPass, upCharinPass];

  }else if ((speChar&&numChar)&&(lowChar&&!upChar)){

    paSelection = [NuminPass,specinPass,lowCharinPass];

  }else if ((!speChar&&numChar)&&(lowChar&&!upChar)){

    paSelection = [NuminPass, lowCharinPass];

  }else if ((!speChar&&!numChar)&&(lowChar&&!upChar)){

    paSelection = [lowCharinPass];

  }else if ((speChar&&!numChar)&&(lowChar&&!upChar)){

    paSelection =[ lowCharinPass, specinPass];

  }else{
    paSelection= [NuminPass, specinPass, upCharinPass, lowCharinPass];
  }
  
  createPass();

  return password;
}






























//---------------------------------------------------------------------------------------------------------




//to make sure user chooses atleast one option

// askNum();


// //make user select option
// var speChar = confirm("Do you want special character?");
// var numChar = confirm("Do you want numbers?");
// var lowChar = confirm("Do you want lower case letters?");
// var upChar = confirm("Do you want Upper Case Letters?");

// typeChar();

// var NuminPass = ["0","1","2","3","4","5","6","7","8","9"];
// var lowCharinPass = ["a","b","c","d","e","f,","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var upCharinPass=  ["A","B","C","D","E","F,","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var specinPass = ["!","@","#","$","%","^","&","*","(",")","_","+"];

//   if((!speChar&&numChar)&&(lowChar&&upChar)){

//     var paSelection = [lowCharinPass, upCharinPass, NuminPass];

//   }else if((!speChar&&!numChar)&&(lowChar&&upChar)){

//     var paSelection = [lowCharinPass, upCharinPass,];

//   }else if((!speChar&&!numChar)&&(!lowChar&&upChar)){

//     var paSelection = [upCharinPass];

//   }else if ((speChar&&!numChar)&&(lowChar&&upChar)){

//     var paSelection = [lowCharinPass, upCharinPass, specinPass];
  
//   }else if ((speChar&&!numChar)&&(!lowChar&&upChar)){

//     var paSelection = [upCharinPass, specinPass];

//   }else if ((speChar&&!numChar)&&(!lowChar&&!upChar)){

//     var paSelection = [specinPass];

//   }else if ((speChar&&numChar)&&(!lowChar&&upChar)){

//     var paSelection = [NuminPass, upCharinPass, specinPass];

//   }else if ((speChar&&numChar)&&(!lowChar&&!upChar)){
    
//     var paSelection = [NuminPass, specinPass];

//   }else if ((!speChar&&numChar)&&(!lowChar&&!upChar)){

//     var paSelection = [NuminPass];

//   }else{
//     var paSelection= [NuminPass, specinPass, upCharinPass, lowCharinPass];
//   }


// password = 




// }
// createPass();



// console.log(password);
// console.log(paSelection);
// console.log(numPass);


// var array1 = [0,1,2,3,4,5,6,7,8,9];
// var array2 = ["a","b","c","d","e","f,","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var array3=  ["A","B","C","D","E","F,","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var array4 = ["!","@","#","$","%","^","&","*","(",")","_","+"];

// var array5=[array1,array2,array3];
// i=Math.floor(Math.random() * array5.length);
// y=array5[i][Math.floor(Math.random() * array5[i].length)];
// console.log(i);
// console.log(y);
// console.log(array5[1][2]);



