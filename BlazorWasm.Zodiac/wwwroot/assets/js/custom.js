$(document).ready(function(){
    // login slider
    $('.as_login_slider').slick({
        dots: true,
        arrows:false,
        speed:800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    // banner slider
    $('.as_banner_slider').slick({
        dots: false,
        speed:800,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev as_btn"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="15" viewBox="0 0 8 15"> <image xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAPCAMAAADu1H4BAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAaVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAD8pYtkAAAAIXRSTlMA1ea/6671JJ/9LZA7gUx28linaftidVeLPJczoSy1+sniUnu2AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAE1JREFUCNcly0USwDAMBEE77DA4jPP/T6Zk6dJzWBkTzkZqTBJMyXKxwJViBbXYQCt29EMYwqifE37WWmDV2mDXOnCn1oW/tR5eDfPZHwl7BIGPaP/tAAAAAElFTkSuQmCC" width="8" height="15"/> </svg></span></button>',
        nextArrow:'<button type="button" class="slick-next as_btn"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="15" viewBox="0 0 8 15"> <image xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAPCAMAAADu1H4BAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAflBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAADvEKCAAAAAKHRSTlMAwukcx+QNCdLUAwjfyRbuuyX4qzDhmWw27Iwt/p73uREP2svRBLXYnrw30wAAAAFiS0dEAIgFHUgAAAAJcEhZcwAALiMAAC4jAXilP3YAAABVSURBVAjXJctVEsAwCEXRpC6pu6epvf2vsBPg554ZQEjHFTQe/IAQRogTUqqQ8TIvULKqGg2r7dCzBoA6TphtlxUbfe04bLWCtD0NLjq8YR7C+2nqDzu8BZoG2fHJAAAAAElFTkSuQmCC" width="8" height="15"/> </svg></span></button>'
    });

    // product slider
    $('.as_product_slider').slick({
        arrows: false,
        infinite:true,
        speed:800,
        dots:true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
                arrows:false
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                arrows:false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows:false
              }
            },
          ]
       
    });
    
    // overview slider
    $('.as_overview_slider').slick({
        infinite:true,
        speed:800,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow:'<button type="button" class="slick-prev as_btn"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="12" height="16" viewBox="0 0 12 16"> <path d="M12.003,15.996 L-0.000,7.997 L12.002,-0.001 L10.062,7.997 L12.003,15.996 ZM10.102,2.762 L2.246,7.997 L10.102,13.233 L8.832,7.997 L10.102,2.762 ZM3.824,7.997 L8.256,5.043 L7.539,7.997 L8.256,10.951 L3.824,7.997 Z" class="cls-1"/> </svg></span> Prev</button>',
        nextArrow:'<button type="button" class="slick-next as_btn">next <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="12" viewBox="0 0 8 12"><path d="M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z" class="cls-1"/> </svg></span></button>' ,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows:false
              }
            },
          ]
    });
    //  shop single slider
    $('.as_shopsingle_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:false,
        speed:800,
        arrows: false,
        fade: true,
        asNavFor: '.as_shopsingle_nav'
    });
    $('.as_shopsingle_nav').slick({
      slidesToShow: 3,
      arrows: false,
      slidesToScroll: 1,
      asNavFor: '.as_shopsingle_for',
      dots: false,
      focusOnSelect: true
    });
    // customer slider
    $('.as_customer_for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite:true,
      speed:800,
      dots:false,
      arrows: false,
      fade: true,
      asNavFor: '.as_customer_nav'
  });
  $('.as_customer_nav').slick({
      slidesToShow: 6,
      arrows: false,
      slidesToScroll: 1,
      asNavFor: '.as_customer_for',
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });
    // card slider
    $('.as_card_slider').slick({
        infinite:true,
        speed:800,
        dots:false,
        arrows:false,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    });
    
    // datepicker
    $('.as_datepicker').datepicker({
        language: 'en'
    });

    // timepicker
    $('.as_timepicker').datepicker({
        dateFormat: ' ',
        timepicker: true,
        classes: 'only-timepicker',
        language: 'en' 
    });

    // countTo
    $('.as_number>span>span').countTo();
    
    // search popup
    $('.as_search').on('click', function(){
        $(this).parent().find('.as_search_boxpopup').addClass('popup_open');
    })
    $('.as_cancel').on('click', function(){
        $(this).parent().removeClass('popup_open');
    })

    // menu toggle
    $('.as_toggle').on('click',function(){
        $(this).parent().toggleClass('menu_open');
        $(this).parent().find('.as_menu ul  li .as_submenu').parent().addClass('as_submenu_li')
    })
    // responsive menu
    $(document).on('click','.as_menu > ul > li >a',function(){
      // console.log($(this).closest('li').find('ul.submenu'))
      $('.as_menu >ul > li>.as_submenu').removeClass('active');
      $(this).closest('li').find('>ul.as_submenu').addClass('active')
    })
    $(document).on('click','.as_menu > ul > li > ul > li >a',function(){
      // console.log($(this).closest('li').find('ul.submenu'))
      $(this).closest('li').find('>ul.as_submenu').toggleClass('active')
    })

    // cart box
    $('.as_cart_wrapper').on('click',function(){
        $(this).parent().toggleClass('cart_open');
    })

    // login popup
    $('.as_signup').on('click',function(){
      $(this).closest('.modal-body').find('.as_login_box').removeClass('active');
      $(this).closest('.modal-body').find('.as_signup_box').addClass('active');
      $(this).closest('.modal-content').find('.modal-title').text('Sign Up');
    })
    $('.as_login').on('click',function(){
      $(this).closest('.modal-body').find('.as_login_box').addClass('active');
      $(this).closest('.modal-body').find('.as_signup_box').removeClass('active');
      $(this).closest('.modal-content').find('.modal-title').text('Login');
    })

    if($('.as_select_box').length){
      $(".as_select_box select").select2({
          placeholder: 'data-placeholder',
          allowClear: true
      });
  }
    // circle
    if($('.as_progressbar').length){
      $(".as_progressbar.p1").circularProgress({
          color:'#ff7010',
          starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
          percent: 0, // percent starts from
          percentage: true,
      }).circularProgress('animate', 45, 5000);
      $(".as_progressbar.p2").circularProgress({
          color:'#ff7010',
          starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
          percent: 0, // percent starts from
          percentage: true,
      }).circularProgress('animate', 94, 5000);
      $(".as_progressbar.p3").circularProgress({
          color:'#ff7010',
          starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
          percent: 0, // percent starts from
          percentage: true,
      }).circularProgress('animate', 84, 5000);
      $(".as_progressbar.p4").circularProgress({
          color:'#ff7010',
          starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
          percent: 0, // percent starts from
          percentage: true,
      }).circularProgress('animate', 64, 5000);
      $(".as_progressbar.p5").circularProgress({
          color:'#ff7010',
          starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
          percent: 0, // percent starts from
          percentage: true,
      }).circularProgress('animate', 76, 5000);
   }

  // step
  $(document).on('click','.checkout_wrapper_box .next',function(){
    var targetNum = $(this).attr('data-step');
    $(this).closest('.checkout_wrapper_box').find('.step').css('display','none');
    $(this).closest('.checkout_wrapper_box').find('[data-target="'+targetNum+'"]').css('display','block');
    $(this).closest('.checkout_wrapper_box').find('[data-active="'+targetNum+'"]').addClass('active');
    // $(this).cloasest('.checkout_wrapper_box').find('data-target="'+targetNum+'"').css('display','block');
  })

  // number increase
  $('.quantity .plus').on('click', function(){
    var num = parseInt($('.quantity').find('input').val())+1; 
    $(this).closest('.quantity').find('input').val(num);
  }) 
  $('.quantity .minus').on('click', function(){
    var num = parseInt($('.quantity').find('input').val())-1; 
    $(this).closest('.quantity').find('input').val(num);
  }) 

  

  
  
})
$(window).on('load',function(){
    $('.as_loader').addClass('hide')
})