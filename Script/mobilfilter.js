var filter = document.querySelectorAll(".siblingstructure");


for(var i=0; i<filter.length;i++){
    filterinfo = filter[i];
    filterparent = filterinfo.parentElement;
    filterinfo.addEventListener ("click",function(e){
    console.log("clicked");
    console.log(parent);
    parent = e.target.parentElement;
    var open = parent.querySelector(".filtercontainer")
    open.classList.toggle("closed")
    var arrows = parent.querySelector(".arrow")
    arrows.classList.toggle("closedarrow")
    
    })
    }