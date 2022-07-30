var json = [
       0,  
     
      'mg-turntable.json',
      '4-page.json',
      '4-page.json',
      '5-page.json',
      '6-page.json',
      '6-page.json',
      '6-page.json',
      '6-page.json',
      '6-page.json',
      '11-page.json',
      'mg-phone.json',
      'mg-phone.json',
      'mg-phone.json',
      'im-insert.json',
      'mg-phone.json'

]






$(function trip() {
      
      var ds = 1;
      var showp = document.getElementsByClassName('fg-item');

      for(i=0; i < showp.length; i++) { 
  
            ds = i +1;
                  
                  console.log("slot-" + ds);
     
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

      tar.setAttribute("onclick", "currentSlide(" + dsd + ");videoClose();"); 



      
      }
 
});


      document.onreadystatechange = function () {
      var state = document.readyState
      if (state == 'interactive') {
            document.getElementById('contents').style.visibility="hidden";
            document.getElementById('load-1').style.visibility="visible";
         
           document.getElementById('page-top').style.background="#000";
           document.getElementById('page-top').style.zindex="1000";
           document.getElementById('page-top').style.visibility="hidden";
       
          
       
          
      } else if (state == 'complete') {
          setTimeout(function(){
             document.getElementById('interactive');
             document.getElementById('contents').style.zindex="inherit";
             document.getElementById('page-top').style.background="inherit";
             document.getElementById('page-top').style.visibility="visible";
            
             document.getElementById('load-1').style.visibility="hidden";

             document.getElementById('contents').style.visibility="visible";
          },100);
      }
    }


 
    

window.onload = function(){
     
      var value = 0;
      var space_bar = 32;
      var close = 27;
      var right_arrow = 39;
      var left_arrow = 37;
      var Q_key = 81;
     

    
      window.onkeydown= function(KeyPress){
          if(KeyPress.keyCode === space_bar){
              value++;
              demo.innerHTML = value;
          };
          if(KeyPress.keyCode === right_arrow)
         {
            plusSlides(1); 
         };
         if(KeyPress.keyCode === close || KeyPress.keyCode === Q_key )  {
            
                  closeModal();
         };
         if(KeyPress.keyCode === left_arrow) {
            
            plusSlides(-1);
            };
       
       
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


        
                  $.getJSON('page2/gd-skills.json', function (data) {

                  
                              const type = data['appSkill'];



                              for(let i = 0; i < type.length; i++) {

                         
                     


                         
                          var skillz = '<div style="display:' + type[i].vis + '" class="col-12 col-lg-4 col-md-6 col-sm-12 borderA px-1 my-3"  ><div class="2pass1 dismiss ' + type[i].delay + ' left"><div class="skillTitle"></div><div class="left "><img id="five" class="img-fluid gray" width="45" height="45" title="' + type[i].title + '" src="' + type[i].img + '" /></div><div class=""><div class="bottomLevelBar left"></div><div class="' + type[i].level +' left "><p class="skillName">' + type[i].txt + '</p><p class="skillPercent text-uppercase"></p></div></div></div></div>'
                                 
                         
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
                      
                  
                              var scoop = ` <span>   ${f.thnlText1} </span><br />${a}. ${f.thnlText2} </span>`
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
     



function openModal() {
      document.getElementById("myModal").style.display = "block";
 
}

function closeModal() {
      document.getElementById("myModal").style.display = "none";
}




var slideIndex = 1;

showSlides(slideIndex);


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


jTest(slideIndex);



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



var box = "<div id='box' ><div>asdasd</div></div>";
$(box).appendTo("#userdata" + "-" + j);




var runt = "hud-" + j;

/*  document.getElementById(runt).onclick = goo; */
// document.getElementById('iud').onclick = goo;


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

})


/* var json = [
      0,
      'mg-phone.json',
      'mg-turntable.json',
      '3-page.json',
      '4-page.json',
      '5-page.json',
      '6-page.json',
      '3-page.json',,,,,'3-page.json',,,'3-page.json',
      'mg-phone.json'
]


 */




/* $.getJSON('pages/' + j +'-page.json', function(data)  */

$.getJSON('pages/' + json[j], function(data) {


      


$.each(data.page, function(i, f) {




      var tic = document.getElementsByClassName("mySlides");
      
      var co = 0;
      
      for(let x =0; x < tic.length; x++ ) {
                    
           
         co =  x + 1;
          
       } 





      var fi = `<span class='com-text-h1'><b>About:</b></span><br><p class='com-text-p'> ${f.text3}</p> <br><br><span class='com-text-h1'><b>Created:</b><br><ul> ${f.list1} ${f.list2} ${f.list3} ${f.list4} ${f.list4} ${f.list5} ${f.list6} ${f.list7} ${f.list8} </ul><p>${f.text4}</p> <br><br><br><p class='outAtt'>Outside Attribution(s): <br> ${f.outAtt}</p>`;


      var fo = `<button class="fullBtn2" onclick="openFullscreen();">Enter Full Screen View</button><button class="fullBtn2" onclick="closeFullscreen();">Esc View</button>`;

       var btnSd1 = `<button style="visibility:${f.note1}" id="page${j}dot1" class="dot" onclick="annote(${j},1); mark(${j},1)">Annotation</button>`;

       var btnNum1 = 1;

       var btnSd2 = `<button style="visibility:${f.note2}" id="page${j}dot2" class="dot" onclick="annote(${j},2); mark(${j},2)">Annotation</button>`; 



       var btnSd3 = `<button style="visibility:${f.note3}" id="page${j}dot3" class="dot" onclick="annote(${j},3); mark(${j},3)">Annotation</button>`;


 var pageSlide = `<div class="numbertext"> ${j}/${co}  ${f.slideText}</div><div class="bkgrd container-fluid" style="width:100%;"><div id="min-box" class="min-box"><div class="box-a">${btnSd1}<div id="page${j}Message1" class="textContainer"><div class="md-close" onclick="messageClose(${j},1)">&times;</div><div class="mau-m-3"><span class="comText">${f.popText1}</span></div><div class="noteButtonPlace"><button class="noteButton" onClick="markTog(${j},1)">toggle marker </button></div></div>${btnSd2}<div id="page${j}Message2" class="textContainer"><div class="md-close" onclick="messageClose(${j},2)">&times; </div><div class="mau-m-3"><span class="comText">${f.popText2} </span></div><div class="noteButtonPlace"><button class="noteButton" onClick="markTog(${j},2)">toggle marker</button></div></div>${btnSd3}<div id="page${j}Message3" class="textContainer"><div class="md-close" onclick="messageClose(${j},3)">&times; </div><div class="mau-m-3"><div class="comText"><span>${f.popText3} </span></div></div><div class="noteButtonPlace"><button class="noteButton" onClick="markTog(${j},3)">toggle marker </button></div></div></div><div class="box-b align-items-center"><div class="img-box"><img class="md-middle" alt="" id="img-1" src="${f.img}"></div><div  id="page${j}circle1" class="circlePos"></div><div id="page${j}circle2" class="circlePos"></div><div id="page${j}circle3" class="circlePos"></div><div class="framer"><div class="ratio ratio-3x2 m-auto"><iframe style="overflow:hidden;" class="videoPlayer" width="${f.widthLg}" height="${f.heightLg}" id="myPlayer" src=${f.video} ></iframe></div><div id="drr"></div><div class="wrapper"></div><div class="wrapper"></div></div></div><div class="box-a"><div class="com-box2 text-justify"><div class="my-2"><span class="com-text"> ${fi} </span></div></div><div class="iconBox"><p >Apps:</p><div class="appBox"><img class="img-fluid slideIcon my-2 mx-1" width="45" height="45" src=${f.Icon1}><img class="img-fluid slideIcon my-2 mx-1" src=${f.Icon2}><img class="img-fluid slideIcon my-2 mx-1" src=${f.Icon3}><img class="img-fluid slideIcon my-2 mx-1" src=${f.Icon4}><img class="img-fluid slideIcon my-2 mx-1" src=${f.Icon5}></div></div></div></div></div>${fo}`



 

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


/*   for(i = 0; i < 3; i++) {

      var test = "#page" + f.slide + "circle" + i;
 
      $(test).css(); 
 
 }
  */


/*  for(i = 0; i < 3; i++) {
 
       var tess = "#page" + f.slide + "Message" + i;
  

      $(tess).css({display: none}); 
  
  }
   */
 





$(pageSlide).appendTo("#userdata"+"-" + j );


$(markDir1).css({'left': CML1, 'top': CMT1 }); 
$(markDir2).css({'left': CML2 , 'top': CMT2 }); 
$(markDir3).css({'left': CML3 , 'top': CMT3 }); 


/* var fbtn = 49;

     
window.onkeydown= function(KeyPress) {
      
      if(KeyPress.keyCode === fbtn)  {
                    
                  
    
      annote(j, 1);
              
         };

      }; */

/* 
var arr = [1,2,3]

$("page" + j.slide + "circle" + arr[0]).css();
$("page" + j.slide + "circle" + arr[1]).css();
$("page" + j.slide + "circle" + arr[2]).css();

$("page" + j.slide + "Message" + arr[0]).css({display: none});
$("page" + j.slide + "Message" + arr[1]).css({display: none});
$("page" + j.slide + "Message" + arr[2]).css({display: none});
 */

/* $(var test = "#page" + f.slide + "Message" + arr[0].css({display: none;});)
$(var test2 = "#page" + f.slide + "Message" + arr[1].css({display: none;});)
$(var test3 = "#page" + f.slide + "Message" + arr[2].css({display: none;});) */











});




});




});







} ;  

