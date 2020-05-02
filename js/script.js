/*Диалоговые окна*/

var dialogEntry = document.querySelector('.dialogEntry');
    dialogRegistration = document.querySelector('.dialogRegistration');
                    document.querySelector('#entry').onclick = function() {
                     dialogEntry.show(); 
                    }
                    document.querySelector('#closeDialogEntry').onclick = function() {
                     dialogEntry.close();
                    }
                    document.querySelector('#closeDialogRegistration').onclick = function() {
                        dialogRegistration.close();
                    }
                    document.querySelector('#registration').onclick = function() {
                     dialogRegistration.show();
                    }



// DATAPICKER

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
window.setInterval(function() {
  $('.next').click();
}, 10000);


// CALENDAR

