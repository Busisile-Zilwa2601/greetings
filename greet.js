function Greet(languageSelected){
  var temp = {};
  var nameEntry = function(name){
    if(temp[name] === undefined){
      temp[name] = 0;
    }
    if(temp[name] == 1 ){
      
    }
    else{
      temp[name] += 1;
    }
  }
  var theGreetings = function(name){
      if(languageSelected === 'english'){
        return 'Hello '+ name;
      }
      if(languageSelected === 'isixhosa'){
        return 'Molo '+ name;
      }
      if(languageSelected === 'afrikaans'){
        return 'Hallo '+ name;
      }
  }
  var sumObj = function(){
    var sum = 0;
    for(var key in temp){
      if(temp.hasOwnProperty(key)){
        sum += temp[key];
      }
    }
    return sum;
  }
  return{
    myName : nameEntry,
    myGreetings : theGreetings,
    mySum : sumObj
  }
}
