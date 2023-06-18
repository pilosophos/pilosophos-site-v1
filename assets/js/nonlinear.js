(function() {
  const nodes = document.querySelectorAll(".node");
  for (const node of nodes) {
    const nodeLinks = node.querySelectorAll(".node-link");
    for (const link of nodeLinks) {
      destinationId = link.href.split("#")[1];
      const linkDestination = document.getElementById(destinationId);
      // console.log(node.id, destinationId);
      new LeaderLine(node, linkDestination, {path: "arc"});
    }
  }
})();