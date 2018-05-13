var theName = document.querySelector('.theName');
var theNumber = document.querySelector('.bigNumber');
var changeThis = document.querySelector('.changeThis');
var greet = Greet();
var num = 0;
var objNames = {};
if(localStorage['names']){
  num = Number(localStorage.getItem('allNames'));
  document.querySelector('.bigNumber').innerHTML = num;
  objNames = JSON.parse(localStorage.getItem('names'));
}
function greetMeBtn(){
  var theNameValue = theName.value;
  checkRadioBtn = document.querySelector('input[class = "languageSelected"]:checked');
  if(checkRadioBtn){
    checkRadioValue = checkRadioBtn.value;
    greet.myName(theNameValue);
    //copy what is in ObjNames and objtemp and store in objNames
    objNames = Object.assign(objNames, greet.objtemp);
    //check if theres localStorage with key names
    if(localStorage['names']){//true
      num = greet.mySum(objNames);
    }
    else{ //this will be true the first time we greet, no localStorage at this point
      num = greet.getcount();
    }
    changeThis.innerHTML = greet.myGreetings(checkRadioValue, theNameValue);
  }
  else{
    if(!checkRadioBtn){
      changeThis.innerHTML = greet.myGreetings('', theNameValue);
    }
  }
  if(!theName.value || theName != theName.defaultValue){
    theName.value = theName.defaultValue;
  }
  localStorage['names'] = JSON.stringify(objNames);
  objNames = JSON.parse(localStorage['names']);
  theNumber.innerHTML = num;
  localStorage.setItem('allNames' , num);
}
var theButtonGreet = document.getElementById('me');
theButtonGreet.addEventListener('click', greetMeBtn);
function resetStorage(){
  if(localStorage['names']){
    localStorage.clear();
    objNames = new Object();
    num = 0;
    changeThis.innerHTML ="";
  }
  theNumber.innerHTML = num;
}
var resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', resetStorage);
function reLoad(){
  location.reload();
}
resetBtn.addEventListener('click', reLoad);
