function testArg(arg) {
    const text = `Funktionsargument: ${arg}`;
    document.querySelector('#out').innerHTML = text;
    return text;
}

function multiply(tal1, tal2) {
    const result = tal1 * tal2;
    return result;
}

function outputMultiply() {
    document.querySelector('#out').innerHTML = multiply(7, 7);
    document.querySelector('#out2').innerHTML = multiply(Math.random(), 10);    
}

outputMultiply();

for (let i = 10; i > 0; i--) {
    console.log(`for: ${i}`);
}


let i = 0;
while (i < 10) {
    console.log(`while: ${i}`);
    i++;
}

console.log("färdigt loopat!")

//               0      1        2
const colors = [ "red", "green", "blue"];
console.log(colors[2])
for (let i = 0; i < colors.length; i++) {
    console.log(`color: ${colors[i]}`)

    const listElements = document.querySelector('#lista').children;
    listElements[i].style = `color: ${colors[i]};`;
}
// for of-loop ger varje element
const days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
for (const day of days) {
    console.log(day);
    document.querySelector('#days').innerHTML += `<li>${day}</li>`
}
// for in-loop ger index-nummer
for (const i in colors) {
    console.log(`${i}: ${colors[i]}`);
    document.querySelector('#lista')
        .children[i].innerHTML += ` (${colors[i]})`;
}

const person = {
    name: "Linus",
    age: 50,
    inventions: ["Linux", "Git"]
}
console.log(person.name, person.age, person.inventions)
console.log(person.inventions[1])











