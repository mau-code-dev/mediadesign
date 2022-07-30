


window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
            var n = document.getElementsByClassName("2pass1");
          
            for(i = 0;i < n.length; ++i) {
                  n[i].classList.remove("dismiss"); 
                n[i].classList.add("mystyle"); 
               
                
            }
            return n;
           
        } else {
            var n = document.getElementsByClassName("2pass1");
            for(i = 0;i < n.length; ++i) {
                  n[i].classList.add("dismiss"); 
                n[i].classList.remove("mystyle"); 
            }
            return n;
      }
});





window.addEventListener("scroll", () => {
            if (window.scrollY > 401) {
                  var x = document.getElementsByClassName("skillBar4Hide");

                  for(i = 0;i < x.length; ++i) {
                        x[i].classList.add("stop4")
                        x[i].classList.add("levelBar")
                        ; 
                                      
                  }
                  return x;
                  
                  } else {
                        var x = document.getElementsByClassName("skillBar4Hide");
                  
                        for(i = 0;i < x.length; ++i) {
                       
                              x[i].classList.remove("stop4");  
                              
                        }
                  return x;     
                  }

});

window.addEventListener("scroll", () => {
      if (window.scrollY > 401) {
            var x = document.getElementsByClassName("skillBar3Hide");

            for(i = 0;i < x.length; ++i) {
                  x[i].classList.add("stop3")
                  x[i].classList.add("levelBar")
                  ; 
                                
            }
            return x;
            
            } else {
                  var x = document.getElementsByClassName("skillBar3Hide");
            
                  for(i = 0;i < x.length; ++i) {
                 
                        x[i].classList.remove("stop3");  
                        
                  }
            return x;     
            }

});


window.addEventListener("scroll", () => {
      if (window.scrollY > 401) {
            var x = document.getElementsByClassName("skillBar5Hide");

            for(i = 0;i < x.length; ++i) {
                  x[i].classList.add("stop5")
                  x[i].classList.add("levelBar")
                  ; 
                                
            }
            return x;
            
            } else {
                  var x = document.getElementsByClassName("skillBar5Hide");
            
                  for(i = 0;i < x.length; ++i) {
                 
                        x[i].classList.remove("stop5");  
                        
                  }
            return x;     
            }

});



function annote(a,b) {

            var messText =  "page" + a + "Message" + b;

                  e = document.getElementById(messText);
            
                   e.classList.add("com-box");

                  document.getElementById(messText).style.display = "block";

                 var annote = "page" + a + "dot" + b;

                document.getElementById(annote).style.display = "none";
            
            
};

function annote(a,b) {

      var messText =  "page" + a + "Message" + b;

            e = document.getElementById(messText);
      
             e.classList.add("com-box");

            document.getElementById(messText).style.display = "block";

           var annote = "page" + a + "dot" + b;

          document.getElementById(annote).style.display = "none";
      
      
};





      function messageClose(a,b) {

            var dot = "page" + a + "Message" + b;

            e = document.getElementById(dot);
             e.classList.remove("com-box");

            var mesBox = "page" + a + "dot" + b;      

            document.getElementById(mesBox).style.display = "inline";
            document.getElementById(dot).style.display = "none";

            var circle = "page" + a + "circle" + b;

            f = document.getElementById(circle);
        
            f.classList.remove("circle");
                  
      };

 




function mark(a,b) {

            var markAction = "page" + a + "circle" + b;

            e = document.getElementById(markAction);

            e.classList.add("circle");
         
      };




function markTog(a,b) {

      var markToggle = "page" + a + "circle" + b;

      e = document.getElementById(markToggle);     

     e.classList.toggle("circle");
    

};





      

/* function play() {

      f = document.getElementById("myPlayer").src = "https://player.vimeo.com/video/686458155?h=78a6d434bb?&autoplay=1";
      f.getElementById("myPlayer").load(); 
     
      f.currentTime = 0;
     

}; */

/* function videoClose() {

      vid = document.getElementById("myPlayer").src = "https://player.vimeo.com/video/686458155?h=78a6d434bb";
      vid.getElementById("myPlayer").load(); 
     
      f.currentTime = 0;
     

};
 */




window.addEventListener("scroll", () => {
             if (window.scrollY > 1400) {
            
                  e = document.getElementById("profileImage");
                  fg = document.getElementById("textProfileShift");

                  e.classList.add("leftShift");
                  e.classList.add("profileImage2");
                  
                  fg.classList.remove("profileText");
                  fg.classList.add("profileTextShift");

               
            
              

             } else {        
                  e = document.getElementById("profileImage");
                  fg = document.getElementById("textProfileShift");

                  e.classList.remove("leftShift");
                  e.classList.remove("profileImage2");

                  fg.classList.add("profileText");
                  fg.classList.remove("profileTextShift");
                
                  var tst = document.getElementsByClassName("profileText")

                  for(i = 0; i < tst.length; i++ ) {
                  
                        tst[i].style.display = "inline";

                  }
               

             }

      });
      
 window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                  var n = document.getElementById("mainNav");

                  n.classList.add("navShade");

            } else {
                  var n = document.getElementById("mainNav");
                  n.classList.remove("navShade");
            }


      });
      