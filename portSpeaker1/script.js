const btnCon = document.getElementById('control');


// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  const hotb = document.getElementsByTagName("button");


  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');

    btnCon.style.display = "block";

    for(i = 0; i < hotb.length; i++ ) {
      
     
      hotb[i].style.opacity = "1";
      hotb[i].style.display = "block";
    }

    

  } else {
    progressBar.classList.remove('hide');
    if (event.detail.totalProgress === 0) {
      event.target.querySelector('.center-pre-prompt').classList.add('hide');

      

      for(i = 0; i < hotb.length; i++ ) {
       
       
      
      hotb[i].style.opacity = "1";
      hotb[i].style.display = "none";

      }


    }
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);





function btnConVis() {

var btn = document.getElementsByClassName('Hotspot');



  for(i = 0; i < btn.length; i++ ) {

    var each = btn[i].getAttribute('value');
    var val = each;
    const con = document.getElementById('control');

    if (val == 1) {
     
     

      btn[i].style.display = "none";
      btn[i].value = 0;
      con.innerHTML = "SHOW HOTSPOTS"

    } else {

      btn[i].style.display = "block";

      btn[i].value = 1;
      con.innerHTML = "HIDE HOTSPOTS"

    }

  } 

}

btnCon.addEventListener("click", btnConVis);

/* 
var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
navigator.userAgent &&
navigator.userAgent.indexOf('CriOS') == -1 &&
navigator.userAgent.indexOf('FxiOS') == -1;
var el = document.createElement("p");
el.innerText = "Is it Safari: " + isSafari;
if (isSafari == True) {
var ttt = document.getElementById("test");
ttt.style.display = "inline";
}
var isSafari2 = window.safari !== undefined;
if (isSafari2) alert("Safari, yeah!"); */