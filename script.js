function action(e){
    //Removing existing active and showsect classes
    try {
        li_existing = document.getElementsByClassName("active")[0];
        li_existing.classList.remove("active");
    }
    try {
        sect_existing = document.getElementsByClassName("showsect")[0];
        sect_existing.classList.remove("showsect");
    }

    //Adding active class to the clicked element's li. [1]=li
    e.path[1].classList.add("active");

    //Adding showsect class to the clicked element's href
    sect_href = e.target.href;
    sect_id = sect_href.substring(sect_href.indexOf('#') + 1);
    sect_element = document.getElementById(sect_id);
    sect_element.classList.add("showsect");
}


var arr = document.querySelectorAll("#intro li a");
for (var a of arr){
    if (a == arr[arr.length - 1]){break;}
	a.addEventListener("click", action);
}