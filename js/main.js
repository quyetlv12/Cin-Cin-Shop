

$('.responsive').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
    ]
});




let timneOut;
let btn_scroll = document.getElementById("btn-btt");
scrollToTop = () =>{
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
        window.scrollBy(0,-50);
        timneOut = setTimeout('scrollToTop()', 10);
    }
    else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
        btn_scroll.style.display="none";
    }
    else{
        clearTimeout(timeOut);
        
    }
    
}



let write_review = document.getElementById("write-review");


write_review.addEventListener('click', () =>{
    let input_review =document.getElementById("input-review");
    input_review.classList.toggle("input-review-show")
})

let star = document.getElementById("star");


star.addEventListener('click',() =>{
    star.classList.toggle("star-click");
})
