//Menu bar toggle
let menu = "hidden";
var menuList =[];
menuList = document.querySelectorAll(".navItems > ul");
var menuChange= [];
var menuChange=document.getElementsByClassName("menuBar");
function navMenu(){

    if(menu == "hidden"){
        for(var h=0; h<menuList.length; h++){
            menuList[h].style.display = "flex";
        }
        for(var i=0; i<menuChange.length; i++){
            menuChange[i].classList.add("mode");
        }
        menu = "visible";
    }
    else if(menu == "visible"){
        for(var j=0; j<menuList.length; j++){
            menuList[j].style.display = "none";
        }
        for(var k=0; k<menuChange.length; k++){
            menuChange[k].classList.remove("mode");
        }
        menu = "hidden";
    }
}