var login = document.querySelector(".login");
var modal = document.querySelector(".modal");

//Får click display til at vise sig, med at give den display=block; // 
login.addEventListener("click", function(){
console.log("clicked");
modal.style.display =  "block";
}); 

//Window er et pre-defineret event javascript forstår, som er hvis du klikker ændre steder end modalen, lukkes den // 
window.addEventListener("click", function(event) {
    if (event.target == modal){
        modal.style.display="none";
        }
});
