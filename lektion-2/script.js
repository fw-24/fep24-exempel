console.log("JS works!");

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

