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
    event.target.appendChild(document.getElementById(data).cloneNode(true));
}


function remove(event, value) {
    event.preventDefault();

    var chipValue = Number(event.dataTransfer.getData("number"));
    

    var data = event.dataTransfer.getData("text");
    event.target.removeChild(document.getElementById(data));
      
}
