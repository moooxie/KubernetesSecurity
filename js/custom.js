$(function(){
// banner slider 
    $('.banner_slide_text_item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed:1500,
      });
// icon slider 
    $('.serivice-rim').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed:1500,

        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
         
       
        ]
      });
    // $('.serivice-rim').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     arrows: false,
    //     speed:1500,
    //   });

      $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling >200){
        $('.navbar').addClass('bg');
        }
        else{
        $('.navbar').removeClass('bg');
        }
        
        
        });
        var containerEl = document.querySelector('.latif');

        var mixer = mixitup(containerEl);


        $(document).ready(function(){
            $('.venobox').venobox(); 
        });

        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        // blog slider 
        $('.blog_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        centerPadding:false,
        speed:1500,
        autoplaySpeed: 2500,
        arrows: false,

        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
         
       
        ]
      
      });
          
      
        
        
});
