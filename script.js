function fullScreen() {
  let elem = document.documentElement;

  if (!document.fullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  } 
  
  let button = document.getElementById('full-screen');
  button.style.display = 'none';
  
  let container = document.getElementById('container');
  container.style.display = 'block';
} 

document.addEventListener('fullscreenchange', function() {
  if (!document.fullscreenElement) {
    let container = document.getElementById('container');
    container.style.display = 'none';
    
    let button = document.getElementById('full-screen');
    button.style.display = 'block';

    let nobutton = document.getElementById("no");
    nobutton.style.left = "780px"; 
    nobutton.style.top = "526px";
  }
});

//function yes() {

//}

function no() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const button = document.getElementById("no")
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  const x = Math.random() * (windowWidth - buttonWidth);
  const y = Math.random() * (windowHeight - buttonHeight);

  button.style.left = x + "px"; 
  button.style.top = y + "px"; 
}