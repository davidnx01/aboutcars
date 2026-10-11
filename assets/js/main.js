/* AboutCars — menu a demo formulár */
(function(){
  "use strict";
  var d=document, b=d.documentElement, btn=d.querySelector(".burger");
  if(btn){
    btn.addEventListener("click",function(){var o=b.classList.toggle("menu-open");btn.setAttribute("aria-expanded",o)});
    [].forEach.call(d.querySelectorAll(".nav a"),function(a){a.addEventListener("click",function(){b.classList.remove("menu-open");btn.setAttribute("aria-expanded","false")})});
  }
  var send=d.querySelector("[data-demo-send]");
  if(send){send.addEventListener("click",function(){
    d.querySelector(".form__note").textContent="Toto je neoficiálny návrh — správa sa neodosiela. Zavolajte prosím na +421 948 262 951.";
  })}
})();
