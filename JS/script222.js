
function drag(event, value) {
    event.dataTransfer.setData("number", value);
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();

    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));

    var chipValue = Number(event.dataTransfer.getData("number"));
    console.log(chipValue);
}