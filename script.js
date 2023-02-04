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

function run_color_picker(e){
  // Colors list
  let colors_list = [
    ["#ff3333","#ffcccc"],  //red
    ["#ff6600", "#ffcc99"], //orange
    ["#0066ff", "#99ccff"], //blue
    ["#009900","#99e699"],  //green
    ["#ffcc00","#fff0b3"],  //yellow
    ["#00bfff","#b3ecff"],  //light blue
    ["#808080","#cccccc"],  //grey
  ];

  // Insert color dots
  let locations = document.getElementsByClassName("color-picker");
  for (let i = 0; i < locations.length; i++) {
    for(let j = 0; j < colors_list.length; j++){
      insert_color_picker(colors_list[j][0],locations[i]);
    }
  }

  // Adding event listeners to dots to change color  
  let dots = document.getElementsByClassName("picker");
  for (let i = 0; i < dots.length; i++) {
    color_index = i%colors_list.length;
    dots[i].addEventListener('click', change_color.bind(null,colors_list[color_index]));
  }

}

function insert_color_picker(color,location){
  // console.log("Inserting color: "+color);
  
    // Create dots and set attributes
    let ele = document.createElement("span");
    ele.className="dot picker";
    ele.style.backgroundColor = color;
    location.appendChild(ele); // Adds element to HTML file
  
}

function change_color(colors) {
  // console.log("Updating color to: "+colors[0]);
  document.body.style.setProperty('--my-color', colors[0]);
  let header_color = "linear-gradient(to top left, "+colors[0]+" 0%, "+colors[1]+" 100%)";
  document.body.style.setProperty('--header-color', header_color);
}


document.body.onload=action;
document.body.onload=run_color_picker;
document.getElementsByClassName('icon')[0].addEventListener("click", activateNav);
window.addEventListener("hashchange", action);


