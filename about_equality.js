
module("About Equality (topics/about_equality.js)");

test("numeric equality", function() {
    equal(3 + 4,  7, "");
});

test("string equality", function() {
    equal("3" + "7", "37", "concatenate the strings");
});

test("equality without type coercion", function() {
    ok(3 === 3, 'what is exactly equal to 3?');
});

test("equality with type coercion", function() {
    ok(3 == "3", 'what string is equal to 3, with type coercion?');
});

test("string literals", function() {
    equal("frankestein", "frankenstein", "quote types are interchangable, but must match.");
    equal('frankestein', 'frankenstein', "quote types can use both single and double quotes.");
});
