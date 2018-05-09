describe("the Greet function", function(){
  it("It should return the \'Hello Busisile\' and \' Hello Nolupho\'", function(){
    var greet = Greet('english');
    greet.myName('Busisile');
    greet.myName('Nolupho');
    greet.myName('Nolupho');
    greet.myName('Busisile');
    assert.deepEqual(greet.myGreetings('Busisile'), "Hello Busisile");
    assert.deepEqual(greet.myGreetings('Nolupho'), "Hello Nolupho");
    assert.deepEqual(greet.mySum(), 2);
    console.log(greet);
  });
  it("It should return the \'Molo Busisile\' and \' Molo Nolupho\'", function(){
    var greet = Greet('isixhosa');
    greet.myName('Busisile');
    greet.myName('Nolupho');
    assert.deepEqual(greet.myGreetings('Busisile'), "Molo Busisile");
    assert.deepEqual(greet.myGreetings('Nolupho'), "Molo Nolupho");
    assert.deepEqual(greet.mySum(), 2);
  });
})
