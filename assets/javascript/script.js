console.log();


var btn = document.querySelector("#submit-button");
var numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var lowerList = lowerLetters.split("");
var upperList = lowerLetters.toUpperCase().split("");
console.log(lowerList, upperList);
var specialChar = "!@#$%^&*".split("");
console.log(specialChar);
console.log(numList);


// 

function clickSubmit() {
    var isUsingUpperCaseLetters = document.querySelector("#one").checked;
    var isUsingLowerCaseLetters = document.querySelector("#two").checked;
    var isUsingNumbers = document.querySelector("#three").checked;
    var isUsingSpecialCharacters = document.querySelector("#four").checked;
    var passwordLength = document.querySelector("#quantity").value;
    console.log(passwordLength);
    var posChar = []

    if (isUsingUpperCaseLetters) {
        console.log(upperList)
        posChar = posChar.concat(upperList);
        console.log(posChar)
    };

    
    if (isUsingLowerCaseLetters) {
        posChar = posChar.concat(lowerList);
    };
    
    if(isUsingNumbers){
        posChar = posChar.concat(numList);
    };


    if (isUsingSpecialCharacters) {
        posChar = posChar.concat(specialChar);
    };
    console.log(posChar)
    var password = []
    console.log(posChar)
    for (var index = 0; index <= passwordLength-1; index++) {
        var randomIndex = Math.floor(Math.random() * posChar.length);
        var randomChar = posChar[randomIndex];
        password.push(randomChar);
    }
    var passText = document.querySelector("#password-text-area")
    passText.value = password.join("");
    console.log(password.join(""))
// 
}


btn.addEventListener("click", clickSubmit)
