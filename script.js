var btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});


var target = document.querySelectorAll('[data-anime]');
var animationClass = 'animate';


function scrollMouse() {

    var janela = window.pageYOffset + ((window.innerHeight * 4) / 4.5);

    target.forEach(function(element) {

        if((janela) > element.offsetTop) {
            element.classList.add(animationClass);
        }
        
        else {
            element.classList.remove(animationClass);
        }

    })

} scrollMouse();

if(target.length) {

window.addEventListener('scroll', function() {

    scrollMouse();

})

}






var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

if (n > slides.length) {
      slideIndex = 1;
}
  
if (n < 1) {
    slideIndex = slides.length;
}

for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
}

for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";

slideIndex++;

  if (slideIndex > slides.length) {
      slideIndex = 1
      
    }

  setTimeout(showSlides, 15000); 

}