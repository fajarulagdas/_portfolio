// var navItem = [];
// navItem = document.querySelectorAll("#navWrapper .navbar ul .navItem");

// function navActive{
//     for(var i=0 ; i<navItem.length; i++){
//         navItem[i]
//     }
// }

console.log("455454")

window.addEventListener("scroll", function() {
    // storing elements
    var about = document.getElementById("aboutSection");
    var skill = document.getElementById("skillSection");
    var edu = document.getElementById("eduSection");
    var work = document.getElementById("workSection");


    if (window.scrollY > (about.offsetTop + about.offsetHeight) || window.scrollY < (about.offsetHeight)) {
        console.log("You've scrolled skill");
    }

    // after skill(edu section)
    else if (window.scrollY > (skill.offsetTop + skill.offsetHeight)) {
        console.log("You've scrolled edu");
    }
    // after edu(work section)
    else if (window.scrollY > (edu.offsetTop + edu.offsetHeight)) {
        console.log("You've scrolled work");
    }

  });
