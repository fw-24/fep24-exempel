console.log("JS works!");

function hello() {
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

