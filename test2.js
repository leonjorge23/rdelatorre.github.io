//positions the bee in a new place at load
(function(){
  /* code */ 
  
  //variables
  var bee = document.getElementById('bee');
  var rose = document.getElementById('rose')
  
  if(bee && rose {
       init();
   }

  function init() {
    bee.style.transition = "all 1s"; 
    bee.style.top = Math.floor(Math.random() * 100) + "%";
    bee.style.left = Math.floor(Math.random() * 100) + "%";
  }

  function roseMouseIn() {
    rose.style.transition = "all .05s"; 
    rose.style.transform = "rotate(2deg)";
  }

  function roseMouseOut() {
    rose.style.transition = "all .1s"; 
    rose.style.transform = "rotate(-2deg)";
  }

  //calling my functions
  bee.onmouseover =  init;
  rose.onmouseover = roseMouseIn;
  rose.onmouseleave = roseMouseOut;

}());

