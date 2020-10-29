

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