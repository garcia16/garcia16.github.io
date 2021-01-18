const Mates = document.getElementById("drag1");
const Lengua = document.getElementById("drag2");
const Historia = document.getElementById("drag3");
const Ingles = document.getElementById("drag4");
const Musica = document.getElementById("drag5");
const FyQ = document.getElementById("drag6");


function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.id = "newId";
    ev.target.appendChild(nodeCopy);
  }
