describe("the Greet function", function(){
  it("It should return the \'Hello Busisile\' and \' Hello Nolupho\'", function(){
    var greet = Greet();
    greet.myName('Busisile');
    greet.myName('Nolupho');
    greet.myName('Nolupho');
    greet.myName('Busisile');
    assert.deepEqual(greet.myGreetings('english', 'Busisile'), "Hello Busisile");
    assert.deepEqual(greet.myGreetings('english', 'Nolupho'), "Hello Nolupho");
    assert.deepEqual(greet.mySum(), 2);
    console.log(greet);
  });
  it("It should return the \'Molo Busisile\' and \' Molo Nolupho\'", function(){
    var greet = Greet();
    greet.myName('Busisile');
    greet.myName('Nolupho');
    greet.myName('Odwa');
    greet.myName('Odwa');
    assert.deepEqual(greet.myGreetings('isixhosa', 'Busisile'), "Molo Busisile");
    assert.deepEqual(greet.myGreetings('isixhosa', 'Nolupho' ), "Molo Nolupho");
    assert.deepEqual(greet.mySum(), 3);
  });
  it("It should return the \'Hallo Busisile\' and \' Hallo Nolupho\'", function(){
    var greet = Greet();
    greet.myName('Busisile');
    greet.myName('Nolupho');
    greet.myName('Odwa');
    greet.myName('odwa');
    greet.myName('David');
    assert.deepEqual(greet.myGreetings('afrikaans', 'Busisile'), "Hallo Busisile");
    assert.deepEqual(greet.myGreetings('afrikaans', 'Nolupho' ), "Hallo Nolupho");
    assert.deepEqual(greet.mySum(), 4);
  });
  it("If no name is entered, but a language is selected, after pressing \'Greet Me\' ,It should return a message on the language you selected. ", function(){
    var greet = Greet();
    greet.myName('');
    assert.deepEqual(greet.myGreetings('afrikaans', ''), "Voer asseblief jou naam in die tekskassie in, kies die taal van jou keuse en druk die knoppie Gree my.");
    assert.deepEqual(greet.myGreetings('english', '' ), "Please enter your name on the text box, select the language of your choice then press the \'Greet Me\'");
    assert.deepEqual(greet.myGreetings('isixhosa', '' ), "Nceda faka igama lakho kwibhokisi yombhalo, ukhethe ulwimi, uze ucinezele iqhosha lokubulisa. ");
    assert.deepEqual(greet.mySum(), 0);
  });
})
