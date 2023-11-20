/*
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


*/

//---------SNACKS--------------


let userChoiceNumber= parseInt(prompt("scegli un numero intero"));
console.log(cubeOfANumber(userChoiceNumber));


let arraySnack12=[];
for (let i=0; i<10; i++){
    arraySnack12[i]=parseInt(prompt("scegli un numero intero: "))
}
console.log(arraySnack12);
console.log(sommaNumeri(arraySnack12));

console.log(mediaAritmetica(arraySnack12));


let userNumber4Figures=prompt("Scegli un numero a 4 cifre");
console.log(userNumber4Figures);

prompt("la somma è: "+ sumOfFiguresInNumber(userNumber4Figures));



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


//--------BONUS SNACKS-----------

function cubeOfANumber(number){
    let array=[];
    
    for (let i=0; i<=number+1; i++){
        array[i]=i*i*i;
    }
    return array;
}

function sommaNumeri(array){
    let somma=0;
    for (let i =0; i<array.length; i++){
        somma += array[i];
    }
    return somma;
}

function mediaAritmetica(array){
    let somma= sommaNumeri(array);
    let divisore= array.length;
    let result= somma/divisore;
    return result;
}

function sumOfFiguresInNumber(stringNumber){
    let array= stringNumber.split("");
    let sum=0;
    for (i=0; i<array.length; i++){
        sum +=parseInt(array[i]);
    }

    return sum;
}