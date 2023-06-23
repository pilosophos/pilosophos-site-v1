(function() {
  const connections = [];
  const nodes = document.querySelectorAll(".node");
  for (const node of nodes) {
    dragElement(node);
    node.style.top = localStorage.getItem(node.id+"top") ?? "0";
    node.style.left = localStorage.getItem(node.id+"left") ?? "0";

    const nodeLinks = node.querySelectorAll(".node-link");
    for (const link of nodeLinks) {
      destinationId = link.href.split("#")[1];
      const linkDestination = document.getElementById(destinationId);
      // console.log(node.id, destinationId);
      connections.push(new LeaderLine(node, linkDestination, {path: "fluid"}));
    }
  }

  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

      localStorage.setItem(elmnt.id+"top", elmnt.style.top);
      localStorage.setItem(elmnt.id+"left", elmnt.style.left);

      for (const connection of connections) {
        connection.position();
      }
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
})();