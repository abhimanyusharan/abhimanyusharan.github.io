function action(e){

    //Removing existing active and showsect classes
    a_existing = document.getElementsByClassName("active")[0];
    a_existing.classList.remove("active");
    sect_existing = document.getElementsByClassName("showsect")[0];
    sect_existing.classList.remove("showsect");

    //Adding showsect class to the clicked element's href
    sect_href = e.newURL || e.target.URL;
    sect_id = sect_href.substring(sect_href.indexOf('#') + 1);
    sect_element = document.getElementById(sect_id);
    sect_element.classList.add("showsect");

    //Adding active class to the clicked element's a.
    href_value = "#"+sect_id;
    a_element = document.querySelector("[href=" + CSS.escape(href_value) + "]");
    a_element.classList.add("active");
}

document.body.onload=action;
window.addEventListener("hashchange", action);
