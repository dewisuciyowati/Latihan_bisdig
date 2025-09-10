// Contoh alert
    alert("Hi there");

    // Contoh confirm
    var isOkay = confirm("I'm gonna do something, okay?");
    if (isOkay) {
        alert("You clicked OK");
    } else {
        alert("You clicked Cancel");
    }

    // Contoh prompt
    var userInput = prompt("What should I do?");
    if (userInput !== null) {
        alert("You typed: " + userInput);
    } else {
        alert("You canceled the prompt");
