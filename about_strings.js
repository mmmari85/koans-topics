
module("About Strings (topics/about_strings.js)");

testc
test("concatenation", function() {
    var fruit = "apple";
    var dish = "pie";
    equal(true, fruit + " " + dish, 'what is the value of fruit + " " + dish?');
});

test("character Type", function() {
    var characterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
    equal("string", characterType, 'Javascript has no character type');
});

test("escape character", function() {
    var stringWithAnEscapedCharacter  = "\u0041pple";
    equal("Apple", stringWithAnEscapedCharacter, 'what  is the value of stringWithAnEscapedCharacter?');
});

test("string.length", function() {
    var fruit = "apple";
    equal(5, fruit.length, 'what is the value of fruit.length?');
});

test("slice", function() {
    var fruit = "apple pie";
    equal("apple", fruit.slice(0,5), 'what is the value of fruit.slice(0,5)?');
});
