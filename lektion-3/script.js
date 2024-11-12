function addFive() {
    const tal = document.querySelector("#tal").value;
    document.querySelector("#tal").value = Number(tal) + 5;
}

function greeting() {
    //const name = document.getElementById("namn").value;
    const name = document.querySelector("#namn").value;
    let greetingText = `Hello <b>${name}</b>! Ha en bra dag!`;

    if (name == "Fredde" || name == "fredde") {
        greetingText = `Hello <b>${name}</b>! Hej igen.`
    } else if (name == "Jonny") {
        greetingText = `Hello <b>${name}</b>! Kodat Unity på sistone?`
    }
    // document.querySelector("#greeting-output").innerText = greetingText;
    // innerHTML tolkar HTML-kod i texten:
    document.querySelector("#greeting-output").innerHTML = greetingText;

}
