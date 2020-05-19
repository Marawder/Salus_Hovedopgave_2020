const burger = document.querySelector(".burger");
const active = document.querySelector(".menu")

// simple toogle af class`s sat i css //
burger.addEventListener("click", function(){
    burger.classList.toggle("open");
    active.classList.toggle("active");
});


const mobilefilter = document.querySelector(".mobilfilter");
const mobilactive = document.querySelector(".filtersection-mobil");
const mobilactivefont = document.querySelector(".whitestyle");

mobilefilter.addEventListener("click", function(){
    console.log("click")
    mobilactive.classList.toggle("aktiv");
    mobilefilter.classList.toggle("focus");
    mobilactivefont.classList.toggle("whitefont");

})


