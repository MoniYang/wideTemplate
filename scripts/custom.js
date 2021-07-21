

  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > 10) {
        $(".header").addClass("fixed");
    } else {
        $(".header").removeClass("fixed");
    }
  });

  var LangBtn = document.getElementById("LangBtn");
  var LangList = document.getElementById("LangList");
  var LangClose = document.querySelector('.lang--close');

  LangBtn.addEventListener('click',Open);

  var LangListEvent = true;
  LangList.style.display= "none";
  LangClose.style.display = "none";
  //   LangList = true;
  function Open(e){  
  LangListEvent =!LangListEvent;

  if ( LangListEvent = true ){
      LangList.style.display = "block";
      LangClose.style.display = 'block';
  }
  else if ( LangListEvent = false ){
      LangList.style.display = "none";
  }
  // LangList.style.display= LangListEvent?"block":"none";
  // LangClose.style.display= "block";


  }


  LangClose.addEventListener('click',CloseLang);
  function CloseLang (e){
      LangClose.style.display = 'none';
      LangList.style.display = "none";
  }




  var indexSlider = $('.index_slider');
  indexSlider.owlCarousel({
    loop:false,
    margin: 10,
    nav: false,
    dots:false,
    // autoplay:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items:1
        },
        1000: {
            items:1
        }
    }
  })

  $('.dropdown--close').hide();
  $('.dropdown--btn').click(function(){
    $('.dropdown--close').show();
  });
  $('.dropdown--close').click(function(){
    $('.dropdown__content.show').removeClass('show');
    $('.dropdown--close').hide();
  });

  $('.mobileNav__btn').click(function(){
    $('#nav-border').addClass('open');
    $('#nav-border').removeClass('close');
    $('.mobileNav__btn').addClass('open');
    $('.mobileNav__btn').removeClass('close');
    $('.mobileNav--close').show();
    });

    $('.mobileNav--Closebtn').click(function(){
        $('#nav-border').addClass('close');
        $('#nav-border').removeClass('open');
        $('.mobileNav__btn').addClass('close');
        $('.mobileNav__btn').removeClass('open');
        $('.mobileNav--close').hide();
     
    });
    $('.mobileNav--close').hide();
    $('.mobileNav--close').click(function(){
        // $('#nav-border').addClass('close');
        $('#nav-border').removeClass('open');
        $('.mobileNav__btn').addClass('close');
        $('.mobileNav__btn').removeClass('open');
        $('.mobileNav--close').hide();

    });

//    var dropbtn = document.querySelector('.dropdown--btn');
    
//     dropbtn.addEventListener('click',Closedrop);
  
//     function Closedrop(){
//         var dropContent = document.querySelector(".dropdown");
//         var dropClose = document.createElement('div');
    
//         dropClose.classList.add('dropdown--close');

//         dropContent.appendChild(dropClose);

//         // var dropContent = document.querySelector(".dropdown");
//         // var dropClose = document.createElement('div');
   
//         // dropClose.classList.add('dropdown--close');

//         // dropClose.appendChild(dropContent);
//     }
  

  

//   if( $('.dropdown__content').hasClass('show')){
//     var dropContent = document.querySelector(".dropdown");
//             var dropClose = document.createElement('div');
       
//             dropClose.classList.add('dropdown--close');
    
//             dropClose.appendChild(dropContent);

//   }
   

//    console.log(dropClose.appendChild(dropContent))

    // var verticalOWL = $('.win_list');
    // verticalOWL.owlCarousel({
    //     items: 3,
    //     loop: true,
    //     nav: false,
    //     dots:false,
    //     margin: 0,
    //     autoplay:false,
    //     rtl:true
    // })


    // verticalOWL.data('owl.carousel').difference = function(first, second) {
    //   return {
    //     x: first.x - second.x + (first.y - second.y),
    //     y: first.y - second.y
    //   };
    // };

   