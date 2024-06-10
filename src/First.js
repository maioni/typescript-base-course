"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 'Hello World!';
var b = 5;
var c = true;
var someArray = [];
someArray.push(a);
someArray.push(b);
someArray.push(c);
console.log(a);
console.log(b);
console.log(c);
console.log(someArray);
function generateEmail(input, force) {
    if (input.isVisitor && !force) {
        return undefined;
    }
    return `${input.firstName}.${input.lastName}@email.com`;
}
console.log(generateEmail({
    firstName: 'John',
    lastName: 'Doe',
    isVisitor: true
}, true));
function isPerson(potentialPerson) {
    if ('firstName' in potentialPerson &&
        'lastName' in potentialPerson)
        return true;
    else
        return false;
}
function printEmailIfPerson(potentialPerson) {
    if (isPerson(potentialPerson))
        console.log(generateEmail(potentialPerson));
    else
        console.log('Input is not a person');
}
printEmailIfPerson({
    firstName: 'John',
    lastNames: 'Doe'
});
