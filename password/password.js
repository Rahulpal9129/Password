let inputSclider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("Uppercase");
let numbers = document.getElementById("numbers");
let symbols= document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");


sliderValue.textContent = inputSclider.value;

inputSclider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSclider.value;
})

genbtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();

})
  let Lowercase = "abcdefghijklmnopqrstuvwxyz";
  let Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let Numbers = "0123456789";
  let Symbols = "!@#$%^&*";
function generatePassword(){
    let genPassword = "";
    let allChars = "";
    allChars += lowercase.checked ? Lowercase : "";
    allChars += uppercase.checked ? Uppercase : "";
    allChars += numbers.checked ? Numbers : "";
    allChars += symbols.checked ? Symbols : "";
    if(allChars==""  || allChars.length ==0){
        return genPassword;
    }

    let i=1;
    while(i<=inputSclider.value) {
   genPassword +=allChars.charAt(Math.floor( Math.random()*allChars.length));

   i++;

    }

    return genPassword;

}