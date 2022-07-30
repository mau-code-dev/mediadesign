




var json = [
       '0.json',  
      'mg-phone.json',
      'mg-turntable.json',
      'mg-sanitizer.json',

      '3d-portSpeaker.json',
      '3d-bottle.json',
      '3d-luft.json',
      '3d-turntable.json',
      'im-insert.json',

      'gd-quanta.json',
      'gd-speakerbuds.json',
      'gd-aurelia.json',
      'gd-queviva.json',
      'gd-zarro.json',
      'gd-rose.json',
      'id-trumble.json',
      'gd-phoneAcc.json',
      'id-tumbler.json'
      
      

]






$(function trip() {
      
      var ds = 1;
      var showp = document.getElementsByClassName('fg-item');

      for(i=0; i < showp.length; i++) { 
  
            ds = i +1;
                  
                  console.log(currentSlide);
     
            var utt = "slot-" + ds;

         
      var star = document.getElementById(utt);
      star.setAttribute("onclick", "openModal();currentSlide(" + ds + ");"); 




      }
 
});


$(function strip() {
      
      var dsd = 1;
      var showa = document.getElementsByClassName('column-w3');

      for(i=0; i < showa.length; i++) { 
  
            dsd = i +1;
                  
                  console.log("dotSlot-" + dsd);
     
            var uop = "dotSlot-" + dsd;

         
      var tar = document.getElementById(uop);

      tar.setAttribute("onclick", "currentSlide(" + dsd + ")"); 



      
      }
 
});



    

window.onload = function(){
     
      var value = 0;
      var space_bar = 32;
      var close = 27;
   //   var right_arrow = 39;
   //   var left_arrow = 37;
      var Q_key = 81;
     

    
      window.onkeydown= function(KeyPress){
          if(KeyPress.keyCode === space_bar){
              value++;
              demo.innerHTML = value;
          };
      //     if(KeyPress.keyCode === right_arrow)
      //    {
      //       plusSlides(1); 
      //    };
         if(KeyPress.keyCode === close || KeyPress.keyCode === Q_key )  {
            
                  closeModal();
         };
      //    if(KeyPress.keyCode === left_arrow) {
            
      //       plusSlides(-1);
      //       };
       
       
      };
  }; 





$(function () {

         var i = 0;
         var counter = 1;
         var appMax = document.getElementsByClassName("skillTitle");
         
         while (i < appMax.length + 1) {
            counter =  i ; i++;


            skillLoader(counter)
   
            }
      
            
       });



      
      
function skillLoader(a) {


        
                  $.getJSON('page2/1-skills.json', function (data) {

                  
                              const type = data['appSkill'];



                              for(let i = 0; i < type.length; i++) {

                         
                     


                         
                          var skillz = '<div class="col-12 col-lg-4 col-md-6 col-sm-12 borderA px-1 my-0" style="visibility:' + type[i].vis + '"><div class="2pass1 dismiss ' + type[i].delay + ' left"><div class="skillTitle"></div><div class="left "><img id="five" class="img-fluid gray" width="45" height="45" title="' + type[i].title + '" src="' + type[i].img + '" /></div><div class=""><div class="bottomLevelBar left"></div><div class="' + type[i].level +' left "><p class="skillName">' + type[i].txt + '</p><p class="skillPercent text-uppercase"></p></div></div></div></div>'
                                 
                         
                         $(skillz).appendTo("#app-" + a);






                              }

                        });


                        };
 
            




                              

                
                        

$(function () {

var i = 0;
var counter = 1;
var slideMax = document.getElementsByClassName("mySlides");

while (i < slideMax.length+1) {
   counter =  i ; i++;

   load(counter)
   
      }

      
 });

 function load(a) {
     




    
            /* $.getJSON('pages/' + a + '-page.json', function (data) { */

                  $.getJSON('pages/' + json[a], function(data) {           
                        
                  

                 
                              
                  $.each(data.slide, function (i, f) {
                      
                  
                              var scoop = ` <span>${a}. ${f.thnlText2} </span><br><span class="cardTxt">  ${f.thnlText1}  </span>`
                             /*  var git = '<div class="videoIcon"></div><img class="fg-img hover-shadow cursor-w3" fg-img-src="../assets/thnl/Tumbler.jpg" onclick="openModal();currentSlide(1)">'
 */
                           var imgSlot = f.thnl;
                           var dotAltImg = f.dotAlt;
                              var widthThnl = f.widthThnl;
                              var heightThnl = f.heightThnl;


                                    $(scoop).appendTo("#thnlSec-"+ a);

                                    $('#slot-'+ a).attr('src',imgSlot); 
                                    // $('#slot-'+ a).attr("src", $('#slot-'+ a).attr("fg-img-src", imgSlot));
                                    $('#slot-'+ a).attr('width', widthThnl); 
                                    $('#slot-'+ a).attr('height',heightThnl); 

                                     $('#dotSlot-'+ a).attr('src',imgSlot); 
                                      $('#dotSlot-'+ a).attr('alt',dotAltImg); 
                                     
                               

                                     
                  });
               
                
                 
                  });  
            }; 
     

 
$(function () {


      var menuItem1 = document.getElementById("title1");
      var menuItem2 = document.getElementById("title2");
      var menuItem3 = document.getElementById("title3");

      var vidMenuTitle =  "Video & Motion Graphics";
      var interTitle =  "Interactive Media & 3D Modeling";
      var graphTitle =  "Graphics & Illustrative Design";
     
      menuItem1.style.transition = "700ms";
      menuItem1.style.transitionDelay = "1s";
      menuItem1.style.color = "#777";

      menuItem2.style.transition = "700ms";
      menuItem2.style.transitionDelay = "1s";
      menuItem2.style.color = "#777";
      
      menuItem3.style.transition = "700ms";
      menuItem3.style.transitionDelay = "1s";
      menuItem3.style.color = "#777";
      
      
      menuItem3.innerHTML =  graphTitle;
      menuItem2.innerHTML =  interTitle;
      menuItem1.innerHTML = vidMenuTitle;
});           


function openModal() {
      document.getElementById("myModal").style.display = "block";
 
}

function closeModal() {
      document.getElementById("myModal").style.display = "none";
}




//var slideIndex = 1;

//showSlides(slideIndex);


function rock(slideIndex) {
      var tree = slideIndex; 



      var did =  "userdata-" +  slideIndex;

      var cv = document.getElementById(did);
      var tv = cv.childNodes;
      
      var i = 0
      
      while (i < tv.length) {
      if (tv[i].tagName == 'div') 
            break; {

document.getElementById(did).removeChild(tv[i]);
            }
      }


      tree = this.value;

      console.log(tree);
}


//jTest(slideIndex);



function plusSlides(n) {
      showSlides(slideIndex += n);
    
}






function currentSlide(n) {

   

      showSlides(slideIndex = n);
}      
    






function showSlides(n) {
   
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("thnl");
      var captionText = document.getElementById("caption");
      if (n > slides.length) {
            slideIndex = 1
      }
      if (n < 1) {
            slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" activeSlide", "");
      }


      slides[slideIndex - 1].style.display = "block";

      dots[slideIndex - 1].className += " activeSlide";
      captionText.innerHTML = dots[slideIndex - 1].alt;

      jTest(slideIndex);


     
     
}







function jTest(j) {    



$(function () {



//var box = "<div id='box' ><div></div></div>";
//$(box).appendTo("#userdata" + "-" + j);




//var runt = "hud-" + j;




$(function () { 

      var did = "userdata-" + j;
      var cv = document.getElementById(did);
      var tv = cv.childNodes;
      
      var i = 0
      
      while (i < tv.length) {
      if (tv[i].tagName == 'div') 
            break; {

document.getElementById(did).removeChild(tv[i]);
}
}

});







$.getJSON('pages/' + json[j], function(data) {


      


$.each(data.page, function(i, f) {




      var tic = document.getElementsByClassName("mySlides");
      
      var co = 0;
      
      for(let x =0; x < tic.length; x++ ) {
                    
           
         co =  x + 1;
          
       } 





      var fi = `<span class='com-text-h1'><b>About:</b></span><br><p class='com-text-p'> ${f.text3}</p> <br><br><span class='com-text-h1'><b>Created:</b><br><ul>
      <li style="display:${f.listv1}"> ${f.list1}</li>
      <li style="display:${f.listv2}">  ${f.list2}</li> 
      <li style="display:${f.listv3}"> ${f.list3} </li> 
      <li style="display:${f.listv4}">${f.list4} </li> 
       <li style="display:${f.listv5}">${f.list5}</li> 
      <li style="display:${f.listv6}"> ${f.list6}</li> 
      <li style="display:${f.listv7}">  ${f.list7}</li> 
      <li style="display:${f.listv8}">   ${f.list8} </ul>
         <p>${f.text4}</p> <br><br><br><p class='outAtt'>External Attribution(s): <br> ${f.outAtt}</p>`;


      var fo = `<div id="fullBtnSet"><button class="fullBtn2" onclick="openFullscreen();">Enter Full Screen View</button><button class="fullBtn2" onclick="closeFullscreen();">Esc View</button></div>`;

       var btnSd1 = `<button style="visibility:${f.note1}" id="page${j}dot1" class="dot" onclick="annote(${j},1); mark(${j},1)">Annotation</button>`;

       var btnNum1 = 1;

       var btnSd2 = `<button style="visibility:${f.note2}" id="page${j}dot2" class="dot" onclick="annote(${j},2); mark(${j},2)">Annotation</button>`; 



       var btnSd3 = `<button style="visibility:${f.note3}" id="page${j}dot3" class="dot" onclick="annote(${j},3); mark(${j},3)">Annotation</button>`;


 var pageSlide = `<div class="numbertext"> ${j}/${co} - ${f.slideText}</div><div class="bkgrd container-fluid" style="width:100%;"><div id="min-box" class="min-box"><div id="boxa1" class="box-a" style="height:${f.boxa1}">${btnSd1}<div id="page${j}Message1" class="textContainer"><div class="md-close" onclick="messageClose(${j},1)">&times;</div><div class="mau-m-3"><span class="comText">${f.popText1}</span></div><div class="noteButtonPlace"><button class="noteButton" onClick="markTog(${j},1)">toggle marker </button></div></div>${btnSd2}<div id="page${j}Message2" class="textContainer"><div class="md-close" onclick="messageClose(${j},2)">&times; </div><div class="mau-m-3"><span class="comText">${f.popText2} </span></div><div class="noteButtonPlace"><button class="noteButton" onClick="markTog(${j},2)">toggle marker</button></div></div>${btnSd3}<div id="page${j}Message3" class="textContainer"><div class="md-close" onclick="messageClose(${j},3)">&times; </div><div class="mau-m-3"><div class="comText"><span>${f.popText3} </span></div></div><div class="noteButtonPlace"><button class="noteButton" onClick="markTog(${j},3)">toggle marker </button></div></div></div><div class="box-b align-items-center"><div class="img-box"><center><img class="md-middle"  style="display:${f.imgvis1}" id="img-1" src="${f.img}"></div><div  id="page${j}circle1" class="circlePos"></div><div id="page${j}circle2" class="circlePos"></div><div id="page${j}circle3" class="circlePos"></div>${f.video}</div><div class="box-a"><div class="com-box2 text-justify"><div class="my-2"><span class="com-text"> ${fi} </span></div></div><div class="iconBox"><p >Apps:</p><div class="appBox"><img class="img-fluid slideIcon my-2 mx-1"  src='${f.Icon1}'><img class="img-fluid slideIcon my-2 mx-1" src='${f.Icon2}'><img class="img-fluid slideIcon my-2 mx-1" src='${f.Icon3}'><img class="img-fluid slideIcon my-2 mx-1" src='${f.Icon4}'><img class="img-fluid slideIcon my-2 mx-1" src='${f.Icon5}'></div></div></div></div></div>${fo}`



 

 var CMT1 = f.circleMarkTop1;
 var CML1 = f.circleMarkLeft1;

 var CMT2 = f.circleMarkTop2;
 var CML2 = f.circleMarkLeft2;

 var CMT3 = f.circleMarkTop3;
 var CML3 = f.circleMarkLeft3;

var arr = [1,2,3]
 
 var markDir1 = "#page" + j + "circle" + arr[0];
 var markDir2 = "#page" + j + "circle" +  arr[1];
 var markDir3 = "#page" + j + "circle" +  arr[2];


 var arr = [1,2,3]
 
 var markDir1 = "#page" + j + "circle" + arr[0];
 var markDir2 = "#page" + j + "circle" +  arr[1];
 var markDir3 = "#page" + j + "circle" +  arr[2];






$(markDir1).css({'left': CML1, 'top': CMT1 }); 
$(markDir2).css({'left': CML2 , 'top': CMT2 }); 
$(markDir3).css({'left': CML3 , 'top': CMT3 }); 

$(pageSlide).appendTo("#userdata"+"-" + j );



});




});




});




} ;  






function drkmode() {


     var dkd = document.getElementById('drkDot');
     var btntst = document.getElementById('drkMdBtn');
      var valx = btntst.getAttribute('value');
       var ccc = valx;
   
      dkd.classList.toggle('dkmv');

      var x = document.getElementsByTagName('body')[0];
      var e = document.getElementById('gallery');
      var f = document.getElementById('mainNav');
      var g = document.getElementById('about');
      var h = document.getElementById('navbar3');
      var k = document.getElementById('navDarkText1');
      var m = document.getElementsByClassName("nav-link");
      var n = document.getElementById("contact");
      var p = document.getElementById("navbarResponsive");

      

     e.classList.toggle('dark1-bg');      
     x.classList.toggle('dark1-bg');     
     f.classList.toggle('dark1-bg');  
     k.classList.toggle('dark1-text'); 
     g.classList.toggle('dark1-bg');  
     h.classList.toggle('dark1-bg');
     n.classList.toggle('dark1-bg');  
     p.classList.toggle('dark1-bg'); 
     
     for(i = 0; i < m.length; i++) {
     m[i].classList.toggle('dark1-text');
     }
    
    

    
    if( ccc == 0) {
     
      var txt = document.getElementById('tick');
      txt.innerHTML = "off";
 
      var btntst = document.getElementById('drkMdBtn').value = 1;

      } else {


            var txt = document.getElementById('tick');
            txt.innerHTML = "on";
            var btntst = document.getElementById('drkMdBtn').value = 0;


      }

}







var drkmd = document.getElementById("drkMdBtn");

      drkmd.addEventListener("click", drkmode);




var d2d = document.getElementById(newFunction());
d2d.addEventListener('click', dkMv);
function newFunction() {
      return 'drkMdBtn';
}

