var theName = document.querySelector('.theName');
var theNumber = document.querySelector('.bigNumber');
var changeThis = document.querySelector('.changeThis');
var greet = Greet();
function greetMeBtn(){
  var theNameValue = theName.value;
  checkRadioBtn = document.querySelector('input[class = "languageSelected"]:checked');
  if(checkRadioBtn){
    checkRadioValue = checkRadioBtn.value;

    greet.myName(theNameValue);
    if(checkRadioValue === 'isixhosa'){
        changeThis.innerHTML = greet.myGreetings(checkRadioValue, theNameValue);
    }
    else if(checkRadioValue === 'english'){
        changeThis.innerHTML = greet.myGreetings(checkRadioValue, theNameValue);
    }
    else if(checkRadioValue === 'afrikaans'){
        changeThis.innerHTML = greet.myGreetings(checkRadioValue, theNameValue);
    }
    theNumber.innerHTML = greet.mySum();
  }
  if(!theName.value || theName != theName.defaultValue){
    theName.value = theName.defaultValue;
  }
}
var theButtonGreet = document.getElementById('me');
theButtonGreet.addEventListener('click', greetMeBtn);
