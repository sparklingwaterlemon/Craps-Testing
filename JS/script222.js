function drag(event, value) {
    event.dataTransfer.setData("number", value);
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();

    var chipValue = Number(event.dataTransfer.getData("number"));
    console.log(typeof chipValue);
    console.log(chipValue);

    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data).cloneNode(true));    
}


function clearboard(){
    console.log("clear");
    var board = document.getElementById("board");
    board.replaceChildren()
}
