let userWorld = prompt("inserisci una parola e ti dirò se è polindroma");

let response=palindromeWord(userWorld);

console.log(response);


let userKeepsPlaying="k";

while( userKeepsPlaying=="k"){
    let userChoiceOddEven= prompt("scegli tra pari o dispari. se scegli PARI scrivi y se scegli dispari scrivi x");
    let userChoiceNumber= parseInt(prompt("scegli un numero da 1 a 5 compresi"));

    if ((userChoiceNumber<1)|| (userChoiceNumber>5)|| (isNaN(userChoiceNumber))){
        alert("non hai inserito un numero corretto");
    }
    else{
        let computerNumber= randomNumberMinMaxIncluded(1,5);
        console.log(computerNumber);

        sumNumbersOddEven(userChoiceNumber,computerNumber, userChoiceOddEven);
    }


    userKeepsPlaying=prompt("Se vuoi continuare a giocare premi k, se vuoi smettere scrivi qualsiasi altro carattere");
    
}


//-----------------FUNZIONI--------------------

function palindromeWord(word){
   
    let palindrome=true;
    let arrayWord= word.split("");
    console.log(arrayWord);

    for (let i=0; i<arrayWord.length/2; i++){
        if (arrayWord[i]!=arrayWord[(arrayWord.length-1)-i]){
            palindrome=false;
            break;
        } 
    }
    return palindrome;
}

//OPPURE
/*
function palindromeWord(word){

    let arrayWord= word.split("");
    console.log(arrayWord);

    let palindrome=false;

    for (let i=0; i<arrayWord.length; i++){
        if (arrayWord[i]==arrayWord[((arrayWord.length-1)-i)]){
            palindrome=true;
        } 
        else{
            palindrome=false;
        }
    }
    return palindrome;


}
*/

function randomNumberMinMaxIncluded(min, max){
    let randomNumber= Math.floor(Math.random()*(max-min+1))+min;
    return randomNumber;

}


function sumNumbersOddEven (num1, num2, userChoiceOddEven){
    let sum=num1+num2;

    if (sum % 2==0){
        if (userChoiceOddEven=="y"){
            console.log("hai vinto");
        }
        else{
            console.log("ha vinto il pc");
        }
    }
    else {
        if(userChoiceOddEven=="x"){
            console.log("hai vinto");
        }
        else{
            console.log("ha vinto il pc")
        }
    }
}