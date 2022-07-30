function jTest() {    
                  

                 
   
          
                 

      $(function () {

        

 var box = "<div id='box'>test</div>";
      $(box).appendTo("#userdata"); 

       
     
     
        var ff =  document.getElementById('drr');

document.getElementById('spoo').onclick = goo;
document.getElementById('myBtn').onclick = goo;
document.getElementById('spoog').onclick = goo;

function goo(clicked) { 


var cv = document.getElementById("box");
var tv = cv.childNodes;

var i = 0

while (i < tv.length) {
if (tv[i].tagName == 'thead') 
break; {

document.getElementById("box").removeChild(tv[i]);}
}


arr = [];

ff = this.value;

arr.push(ff);

var glue = arr[0];

      $.getJSON('pages/1-page.json', function(data) {
            $.each(data.page, function(i,f) {
  
     var pageSlide = "<div class='numbertext'>" + f.slide +"asdasdasd</div><img src=" + f.image + "></div>"






      $(pageSlide).appendTo("#userdata");
      
      return glue;
});


});

}});


    


     

} ;