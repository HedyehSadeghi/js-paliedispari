let userWorld = prompt("inserisci una parola e ti dirò se è polindroma");




let response=palindromeWord(userWorld);

console.log(response);


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



let userChoiceOddEven= prompt("scegli tra pari o dispari. se scegli PARI scrivi y se scegli dispari scrivi x");
let userChoiceNumber= parseInt(prompt("scegli un numero da 1 a 5 compresi"));

if ((userChoiceNumber<1)|| (userChoiceNumber>5)){
    alert("non hai inserito un numero corretto");
}
else{



    let computerNumber= Math.floor(Math.random()*(4))+1;
    console.log(computerNumber);

    sumNumbers(userChoiceNumber,computerNumber);

    function sumNumbers (num1, num2){
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

}

