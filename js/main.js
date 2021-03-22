
// log in form click script
var logId = document.querySelector('#login-form');

 function loginShow() {
  logId.style.visibility = 'visible';
  logId.style.opacity = '1'
 }
 function loginHide() {
  logId.style.visibility = 'hidden';
  logId.style.opacity = '0'
 }


// back to top btn script start
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  var topBtn = document.getElementById("b-to-t");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// back to top script end



$(document).ready(function(){
    $('.testi-slider').slick({
        arrows:true,  
        fade:true,
        prevArrow:'<div class="next-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
       nextArrow:'<div class="prev-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
    });
  });
