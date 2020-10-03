function action(e){

    //Removing existing active and showsect classes
    a_existing = document.getElementsByClassName("active")[0];
    a_existing.classList.remove("active");
    sect_existing = document.getElementsByClassName("showsect")[0];
    sect_existing.classList.remove("showsect");

    //Adding showsect class to the clicked element's href
    sect_href = e.newURL || e.target.URL;
    hash_index = sect_href.indexOf('#');
    if (hash_index==-1) {
        sect_id = "about";
    }
    else {
        sect_id = sect_href.substring(hash_index + 1);
    }
    sect_element = document.getElementById(sect_id);
    sect_element.classList.add("showsect");

    //Adding active class to the clicked element's a.
    href_value = "#"+sect_id;
    a_element = document.querySelector("[href=" + CSS.escape(href_value) + "]");
    a_element.classList.add("active");

    history.replaceState(null, document.title, location.pathname + location.search);

    var x = document.querySelector("#intro ul");
    if(x.classList.contains("ham")) {
        x.classList.remove("ham");
    }
}

function activateNav(e) {
  var x = document.querySelector("#intro ul");
  if(x.classList.contains("ham")) {
    x.classList.remove("ham");
  }
  else {
    x.classList.add("ham");
  }
}

document.body.onload=action;
document.getElementsByClassName('icon')[0].addEventListener("click", activateNav);
window.addEventListener("hashchange", action);
