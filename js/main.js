// hiệu ứng load trang
$(window).on('load', function(event) {
	$('body').removeClass('preloading');
	$('.load').delay(500).fadeOut('fast');
	// $('.loader').delay(1000).fadeOut('fast');
});






//slick slider
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



//banner top 
$('.slider-banner').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 1500,
    arrow:true,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
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




//chuyển lên đầu trang
let timneOut;
let btn_scroll = document.getElementById("btn-btt");
scrollToTop = () =>{
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
        window.scrollBy(0,-50);
        timneOut = setTimeout('scrollToTop()',3);
    }
    else if (sbHeight == 0) {
        btn_scroll.style.display="none";
    }
    else{
        clearTimeout(timeOut);
        
    }
    
}




//hiển thị bảng đánh giá sản phẩm
let write_review = document.getElementById("write-review");


write_review.addEventListener('click', () =>{
    let input_review =document.getElementById("input-review");
    input_review.classList.toggle("input-review-show")
})


let btn_review = document.getElementById("btn-request-review");


btn_review.addEventListener('click', () =>{
    alert("Bạn đã gửi đánh giá");
})






minus = () =>{
    var t = document.getElementById("output").value;
    document.getElementById("output").value = parseInt(t)-1;


    if(t <= 1){
        alert("sản phẩm nhỏ nhất = 1");
        t.focus();
        document.getElementById("output").innerHTML = "1";
    }
}

plus = () =>{
    var t = document.getElementById("output").value;
    document.getElementById("output").value = parseInt(t) + 1;
}

// ========seach box






// hiển thị ô tìm kiếm
function showSeachBox() {
    let search_box = document.getElementById("input-search");
    let btn_search = document.getElementById("btn-search");
    search_box.classList.toggle("input-search-show");

}


function showMap(){
    window.open('https://www.google.com/maps/place/Vietlesson+-+Learn+Languages+%26+Connect+Cultures/@21.0608396,105.8319465,17z/data=!3m1!4b1!4m5!3m4!1s0x3135aa541b811f21:0x8df3d1f6f5bd045c!8m2!3d21.0608396!4d105.8341352?hl=vi-VN', 'VietLesson', 'width=1368,height=768');
}