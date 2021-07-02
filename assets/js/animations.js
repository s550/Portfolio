const button = document.getElementById("scroll");
const image = document.querySelector(".image_effect");

button.onclick = (e) => {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({ 
        behavior: 'smooth' 
      });

}

// image.addEventListener("mouseenter", (e) => {
//     e.preventDefault();
//     console.log("You have activated me.")
//     image.style.opacity="0.5"
// ;
// });

