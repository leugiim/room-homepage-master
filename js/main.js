
window.onload = function() {

  // slider
  const selectorImages = "data-img-slide";
  const selectorMobileImages = "data-mobile-img-slide";
  const selectorSlides = "data-slide";
  const selectorButtons = "data-direction";

  let activeIndex = 0;
  const images = document.querySelectorAll("[" + selectorImages + "]");
  const imagesMobile = document.querySelectorAll("[" + selectorMobileImages + "]");
  const descriptions = document.querySelectorAll("[" + selectorSlides + "]");
  const buttons = document.querySelectorAll("[" + selectorButtons + "]");


  const setVisibility = (element, selector) => {
    if (parseInt(element.getAttribute(selector)) !== activeIndex) 
      element.classList.add("hidden");
    else
      element.classList.remove("hidden");
  };
  const showSlider = () => {
    if(images.length === descriptions.length && imagesMobile.length === descriptions.length){
      images.forEach(element => {
        setVisibility(element, selectorImages);
      });
      imagesMobile.forEach(element => {
        setVisibility(element, selectorMobileImages);
      });
      descriptions.forEach(element => {
        setVisibility(element, selectorSlides);
      });
    }
    else{
      console.error("Error: The slider images and the slider descriptions must be the same quantity.");
    }
  };

  buttons.forEach(element => {
    element.addEventListener("click", function (event){
      let direction = event.target.getAttribute(selectorButtons);
      switch(direction){
        case "left": 
          activeIndex--;
          if(activeIndex < 0) activeIndex += descriptions.length;
          activeIndex = activeIndex % descriptions.length;
          break;
        case "right": 
          activeIndex++;
          activeIndex = activeIndex % descriptions.length;
          break;
        default:
          console.error("Error: The slider direction must be 'left' or 'right'.");
          break;
      }

      showSlider();
    });
  });

  showSlider();
  // slider

  
  // menu mobile
  const selectorToggleMenu = "data-menu";
  const toggleMenu = document.querySelectorAll("[" + selectorToggleMenu + "]");


  toggleMenu.forEach(element => {
    element.addEventListener("click", function (event){
      let parent = event.target.parentNode;
      parent.classList.toggle("open");
    });
  });
  // menu mobile

}
