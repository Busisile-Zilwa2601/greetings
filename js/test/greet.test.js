describe("the Greet function", function(){
  it("It should return the \'Hello Busisile\' and \' Hello Nolupho\'", function(){
    var greet = Greet();
    greet.myName('Busisile');
    greet.myName('Nolupho');
    greet.myName('nolupho');
    greet.myName('busisile');
    assert.deepEqual(greet.myGreetings('english', 'Busisile'), "Hello Busisile");
    assert.deepEqual(greet.myGreetings('english', 'Nolupho'), "Hello Nolupho");
    assert.deepEqual(greet.getcount(), 2);
  });
  it("It should return the \'Molo Busisile\' , \' Molo Nolupho\' and \' Hello Odwa\'", function(){
    var greet = Greet();
    greet.myName('Busisile');
    greet.myName('Nolupho');
    greet.myName('Odwa');
    greet.myName('Odwa');
    assert.deepEqual(greet.myGreetings('isixhosa', 'Busisile'), "Molo Busisile");
    assert.deepEqual(greet.myGreetings('isixhosa', 'Nolupho' ), "Molo Nolupho");
    assert.deepEqual(greet.myGreetings('english', 'Odwa' ), "Hello Odwa");
    assert.deepEqual(greet.getcount(), 3);
  });
  it("It should return the \'Hallo Busisile\' , \' Hello Odwa\',  \' Hallo Nolupho\' and \'David \' Please select a language.", function(){
    var greet = Greet();
    greet.myName('Busisile');
    greet.myName('Nolupho');
    greet.myName('Odwa');
    greet.myName('odwa');
    assert.deepEqual(greet.myGreetings('afrikaans', 'Busisile'), "Hallo Busisile");
    assert.deepEqual(greet.myGreetings('english', 'Odwa' ), "Hello Odwa");
    assert.deepEqual(greet.myGreetings('afrikaans', 'Nolupho' ), "Hallo Nolupho");
    assert.deepEqual(greet.myGreetings('', 'David'), "David please select a language");
    assert.deepEqual(greet.getcount(), 3);
  });
  it("If no name is entered, but a language is selected, after pressing \'Greet Me\' ,It should return a message on the language you selected. ", function(){
    var greet = Greet();
    greet.myName('');
    assert.deepEqual(greet.myGreetings('afrikaans', ''), "Voer asseblief jou naam in die tekskassie in, kies die taal van jou keuse en druk die knoppie Gree my.");
    assert.deepEqual(greet.myGreetings('english', '' ), "Please enter your name on the text box, select the language of your choice then press the \'Greet Me\'");
    assert.deepEqual(greet.myGreetings('isixhosa', '' ), "Nceda faka igama lakho kwibhokisi yombhalo, ukhethe ulwimi, uze ucinezele iqhosha lokubulisa. ");
    assert.deepEqual(greet.getcount(), 0);
  });
  it("If a \'Busisile\' is entered, but a language is not selected, after pressing \'Greet Me\' ,It should return \'Busisile\' please select a language. The count will remain zero", function(){
    var greet = Greet();
    assert.deepEqual(greet.myGreetings('', 'Busisile'), "Busisile please select a language");
    assert.deepEqual(greet.getcount(), 0);
  });
  it("If no name is entered, a language is not selected, after pressing \'Greet Me\' ,It should return \'Please enter your name and select a language.\' ", function(){
    var greet = Greet();
    greet.myName('');
    assert.deepEqual(greet.myGreetings('', ''), 'Please enter your name and select a language ');
    assert.deepEqual(greet.getcount(), 0);
  });
})
