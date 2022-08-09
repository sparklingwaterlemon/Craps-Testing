function drag(event, value) {
    console.log("dragging...");
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
    // event.target.appendChild(document.getElementById(data));
    event.target.appendChild(document.getElementById(data).cloneNode(true));
    console.log(data);
    console.log(event.target);

}


function remove(event, value) {
    event.preventDefault();

    var chipValue = Number(event.dataTransfer.getData("number"));
    

    var data = event.dataTransfer.getData("text");
    console.log(data);
    
    var betChip = document.getElementById("data");
    console.log(betChip);
    board.removeChild(betChip);
    
}
