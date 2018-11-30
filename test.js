//positions the bee in a new place at load
init();

  function init() {
    document.getElementById('bee').style.transition = "all 1s"; 
    document.getElementById('bee').style.top = Math.floor(Math.random() * 100) + "%";
    document.getElementById('bee').style.left = Math.floor(Math.random() * 100) + "%";
  }

  function roseMouseIn() {
    document.getElementById('rose').style.transition = "all .05s"; 
    document.getElementById('rose').style.transform = "rotate(2deg)";
  }

  function roseMouseOut() {
    document.getElementById('rose').style.transition = "all .1s"; 
    document.getElementById('rose').style.transform = "rotate(-2deg)";
  }

//calling my functions
document.getElementById('bee').onmouseover =  init;
document.getElementById("rose").onmouseover = roseMouseIn;
document.getElementById("rose").onmouseleave = roseMouseOut;