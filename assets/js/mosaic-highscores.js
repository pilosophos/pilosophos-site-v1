(function(){
  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    const template = document.getElementById("mosiac-highscore-li");

    const ol = document.getElementById("mosaic-highscores-list");
    ol.innerHTML = "Loading scores...";
    
    const res = await fetch(ol.dataset.json, {cache: "no-cache"});
    const json = await res.json();
    const highscores = json.highscores;

    ol.innerHTML = "";
    
    for (const scoreData of highscores) {
      const templateContent = document.importNode(template.content, true);
      const li = templateContent.querySelector("li");
      
      const name = li.querySelector(".mosaic-highscore-name");
      name.textContent = scoreData["Name"]
      
      const score = li.querySelector(".mosaic-highscore-score");
      score.textContent = scoreData["Score"]

      ol.append(templateContent);
    }
  }
})();