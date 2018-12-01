var myImages =["https://usatftw.files.wordpress.com/2018/03/ap_pistons_cavaliers_basketball_98229959.jpg?w=1000&h=600&crop=1","https://www.gannett-cdn.com/presto/2018/11/28/USAT/49ab9e52-76ce-40e0-ad7f-72c4257a2a84-USATSI_9767589.jpg?width=534&height=401&fit=bounds&auto=webp","https://cdn.images.express.co.uk/img/dynamic/4/590x/Kevin-Durant-has-been-linked-with-joining-the-Knicks-or-Lakers-1051262.jpg?r=1543367056157","https://cdn.nba.net/nba-drupal-prod/styles/landscape/http/i2.cdn.turner.com/nba/nba/dam/assets/160530160053-michael-jordan-1992.1280x720.jpg?itok=zPRIGu1T ","https://peopledotcom.files.wordpress.com/2018/11/gettyimages-1064769920_1.jpg?w=2000"];


var captionImages =["lebron james","Colin Kaepernick","Durant","michael jordan","Curry"];

var index=0; 

function updateImage(){
  document.getElementById("slideshow").src = myImages[index];
  document.getElementById("slideshow").alt= captionImages[index];
  document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
  if (myImages.length == index+1)
    index=0;
  else
    index++;
  updateImage();
} 


function back(){
  if (index===0)
    index=myImages.length-1;
  else
    index--;

  updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 
function autoSlide(){
  if (document.getElementById("auto").checked)
    next(); 
}


setInterval(autoSlide,2000); // Next
