"use strict";
(function() {
    const buttonEl = document.querySelector(".hamburger"); 

    buttonEl.addEventListener("click", (e) => { 
        
        const expanded = e.target.getAttribute('aria-expanded');
        console.log(expanded);
        if(expanded === "false") {
            e.target.setAttribute('aria-expanded','true');
        } else {
            e.target.setAttribute('aria-expanded','false');
        }
        const navigationEl = e.target.closest('.header-nav')
        navigationEl.classList.toggle('header-nav-open');
    });
   
})();