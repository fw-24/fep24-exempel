console.log("JS works!");

function testPrompt() {
    let user = prompt("Skriv ditt namn:");
    console.log(`User: ${user}`);
}

function hello() {

    alert("hello...") // koden pausas till jag klickat OK.

    document.write(`
        <div>
            Morjens ${myName}! Hur mår du i dag, 
            det är ${weather} väder.
        </div>
    `);
}


let myName = "Fredde";
let weather = "soligt";

// document.write("<div>Morjens " + myName + "! Hur mår du i dag, det är " + weather + " väder.</div>");

