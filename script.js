

 document.addEventListener('DOMContentLoaded', function() {
   console.log("######ENTERED");
  /* var button = document.getElementById("btnExplanation");
   button.addEventListener("click", sayHello);
  function sayHello(){
    
      System.out.prinln("Hello");
    
  }*/
   document.getElementById("btnExplanation").addEventListener("click", sayHello);
  function sayHello(){
    document.getElementById("pInfo").innerHTML=" The energy that then radiates out from the surface, longwave radiation, is trapped by the same greenhouse gases, warming the air, oceans, and land. This process, appropriately dubbed “the greenhouse effect,” is how global warming occurs. Black carbon, a particle rather than a gas, also has a very large warming impact. The greenhouse effect itself isn’t a bad thing. In fact, Earth could never have become warm enough to sustain life without it. But in the late 18 th century, the advent of fossil fuels set off a chain reaction. When coal, oil, and natural gas are burned, they release enormous amounts of greenhouse gases — especially carbon dioxide, or CO2, which is by far the most prevalent. The gases add up much faster in the atmosphere than natural processes can absorb them, and thereby wreak havoc on Earth’s complex climate system. After the Industrial Revolution changed everything from goods manufacturing to land use to lighting and heating methods, fossil fuel combustion increased dramatically — and then came cars, which now join coal-burning power plants as one of the top emitters of greenhouse gases. Combined with massive population growth and the effects of large-scale deforestation and industrial agriculture, the widespread combustion of fossil fuels has made greenhouse gas concentrations in the atmosphere climb to levels never seen before in the more than 200,000-year history of the human subspecies.";
    
  }
 },false);
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


