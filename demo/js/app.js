'use strict'

let score = 0;
let user_Name =prompt("whats your name ?");
function userName(name) {
    alert ("welcome " + user_Name + " :)");
}

userName(user_Name);


let qus1 =prompt("Do i like roses ? (yes/no , y/n) ");
//console.log("you answerd " + qus1);
function question1(answer1){
 if (qus1.toLowerCase() === 'yes' || qus1.toUpperCase() =='YES' || qus1.toUpperCase() =='Y' || qus1.toLowerCase() =='y'  ){
    alert("You are right, I love roses");
    score++;
} else if (qus1.toLowerCase() === 'no' || qus1.toUpperCase() =='NO' ||qus1.toLowerCase() === 'n' || qus1.toUpperCase() =='N' ) {
    alert("You are wrong ,why do you think that ?");
}
else
{
    alert("you didn't answer in yes or no ");
    qus1 =prompt("Do i like roses ? (yes/no , y/n) ");

}   
}
question1(qus1);

let qus2 =prompt("Do i like spend time at home ? (yes/no , y/n)");
//console.log("you answerd " + qus2);
function question2(answer2){
 if (qus2.toLowerCase() === 'yes' || qus2.toUpperCase() =='YES' || qus2.toUpperCase() =='Y' || qus2.toLowerCase() =='y'  ){
    alert("You are right ");
    score++;
} else if (qus2.toLowerCase() === 'no' || qus2.toUpperCase() =='NO' ||qus2.toLowerCase() === 'n' || qus2.toUpperCase() =='N' ) {
    alert("You are wrong ,why do you think that ?");
}
else
{
    alert("you didn't answer in yes or no ");
    qus2 =prompt("Do i like spend time at home ? (yes/no , y/n)");

}   
}
question2(qus2);


let qus3 =prompt("Do you think i like a cars ? (yes/no , y/n)");

//console.log("you answerd " + qus3);
function question3(answer3){
  if (qus3.toLowerCase() === 'yes' || qus3.toUpperCase() =='YES' || qus3.toUpperCase() =='Y' || qus3.toLowerCase() =='y'  ){
    alert("You are wrong ");
} else if (qus3.toLowerCase() === 'no' || qus3.toUpperCase() =='NO' ||qus3.toLowerCase() === 'n' || qus3.toUpperCase() =='N' ) {
    alert("You are right i dont love cares ");
    score++;
}
else
{
    alert("you didn't answer in yes or no ");
    qus3 =prompt("Do you think i like a cars ? (yes/no , y/n)");

}  
}
question3(qus3);


let qus4 =prompt("Do you think i love sleeping ? (yes/no , y/n)");
//console.log("you answerd " + qus4);
function question4(answer4){
 if (qus4.toLowerCase() === 'yes' || qus4.toUpperCase() =='YES' || qus4.toUpperCase() =='Y' || qus4.toLowerCase() =='y'  ){
    alert("You are right, i think that sleeping is the best thing in the world  ");
    score++;
} else if (qus4.toLowerCase() === 'no' || qus4.toUpperCase() =='NO' ||qus4.toLowerCase() === 'n' || qus4.toUpperCase() =='N' ) {
    alert("You are wrong ,why do you think that ?");
}
else
{
    alert("you didn't answer in yes or no ");
    qus4 =prompt("Do you think i love sleeping ? (yes/no , y/n)");

}   
}
question4(qus4);


let qus5 =prompt("Am i a serious person ? (yes/no , y/n)");
//console.log("you answerd " + qus5);
function question5(answer4){
  if (qus5.toLowerCase() === 'yes' || qus5.toUpperCase() =='YES' || qus5.toUpperCase() =='Y' || qus5.toLowerCase() =='y'  ){
    alert("wrong, iam just a queit person ");
} else if (qus5.toLowerCase() === 'no' || qus5.toUpperCase() =='NO' ||qus5.toLowerCase() === 'n' || qus5.toUpperCase() =='N' ) {
    alert("You are right");
    score++;
}
else
{
    alert("you didn't answer in yes or no ");
    qus5 =prompt("Am i a serious person ? (yes/no , y/n)");

}  
}
question5(qus5);

let guessNum;
var gussing = false ;
function question6(answer6) {
    
for (let i = 0; i < 4 ; i++)
 {
     guessNum =prompt(" guess my weight ");
    if (guessNum > 62)
     {
     alert("too high");
     }
     else if (guessNum < 62)
     {
     alert("too low");
     }
    else if (guessNum == 62)
    {
    alert("that's correct ,congratulation");
    score++;
    gussing = true ;
    break;
    }
    else 
    {
    alert("unvalid value");
    }

}
}
question6(guessNum);

if (gussing) 
{
    alert (" My weight is 62 ");    
} else {
    alert ("you falied :( , the correct answer is 62 ");
    
}   



var myfavcolor =['blue','white','red'];
let favcolor;
function question7 (answer7){
    for (let index = 0 ; index < 6 ; index++) 
    {
        favcolor =prompt("gusse at least one of my favourit colors :").toLowerCase();
        if (favcolor === myfavcolor[0]) {
            alert ("YES , blue one of my favourite colors ");
            score++;
            break;
            
        } else if (favcolor === myfavcolor[1]) {

            alert ("YES ,white one of my favourite colors ");
            score++;
            break;
            
        }else if (favcolor === myfavcolor[2]) {
            alert ("YES , red one of my favourite colors ");
            score++;
            break;

        } 

            if (index == 5 ) {
                alert( "Unfortunately, you failed you completed all yours attempts :( And  my favourite colors are :" + myfavcolor );
    
            }
        }
        
    }

    question7(favcolor);
 console.log ('your final score :' + score);
 alert("your final score :"  + score + "/7" );
 

    





