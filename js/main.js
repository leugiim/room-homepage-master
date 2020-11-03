window.onload = function() {

  const selectorImages = "data-img-slide";
  const selectorSlides = "data-slide";
  const selectorButtons = "data-direction";

  let activeIndex = 0;
  const images = document.querySelectorAll("[" + selectorImages + "]");
  const descriptions = document.querySelectorAll("[" + selectorSlides + "]");
  const buttons = document.querySelectorAll("[" + selectorButtons + "]");

  const setVisibility = (element, selector) => {
    if (parseInt(element.getAttribute(selector)) !== activeIndex) 
      element.classList.add("hidden");
    else
      element.classList.remove("hidden");
  };
  const showSlider = () => {
    if(images.length === descriptions.length){
      images.forEach(element => {
        setVisibility(element, selectorImages);
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
    console.log(element);
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
      console.log(direction)
      console.log(activeIndex)
      showSlider();
    });
  });

  showSlider();

}
