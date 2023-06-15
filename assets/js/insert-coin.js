---
---
(function(){
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("insert-coin").addEventListener("click", () => {
      new Audio("{{ '/assets/audio/coin.ogg' | relative_url }}").play();
      const credits = document.getElementById("credit-counter");
      credits.textContent = (parseInt(credits.textContent) + 1).toString().padStart(2, '0');
    });
  });
})();