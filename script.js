const slides = document.querySelectorAll(".slide");

slides.forEach(function (oneslide){
    oneslide.addEventListener("click",function(){
        smazaniActive();
        oneslide.classList.add("active");
    })

});

function smazaniActive(){
    slides.forEach(function(mySlide) {
        mySlide.classList.remove("active");
    })
};