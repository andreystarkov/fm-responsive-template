$(document).ready(function(){

    $.fn.waypoint.defaults = {
      context: '.main',
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    }

    $("body").removeClass("no-js");

    $('a[href="#"]').on('click',function(e){e.preventDefault();});

    $('input[placeholder], textarea[placeholder]').placeholder();

    $(function(){
        $('.tabs').delegate('li:not(.active)','click',function(){
            $(this).addClass('active').siblings().removeClass('active').parents('.tab').find('.box').hide().eq($(this).index()).fadeIn(250);
        })
    });

    if ( $(".tab").has(".tab-prev").length || $(".tab").has(".tab-next").length ) {
        $('.tab-prev, .tab-next').click(function(){
            var $active = $(this).parents(".tab").find(".tabs .active");
            $next = $(this).hasClass('tab-prev') ? $active.prev() : $active.next();
            if (!$next.length) $next = $(this).hasClass('tab-prev') ? $(this).parents(".tab").find('.tabs li:last') : $(this).parents(".tab").find('.tabs li:first');
            $next.click();
            return false;
        });
    }
/*

    $('.promo').css({scale: 0, perspective: '100px', rotateX: '90deg'});
    $('#estimate').css({y: '-267px'});
    $('.promo').waypoint(function(direction) {
         $('.promo').transition({scale: 1, perspective: '100px', rotateX: '0deg'}, 500, 'easeInOutCirc');
         $('#estimate').transition({y: '0px'}, 500, 'easeInOutCirc'); alert(direction);
    }, { offset: '20%', triggerOnce: true }); 
*/

     $('.anchor').waypoint(function(direction) {
        var a = $(this).attr('id');

        $(".top-nav a").transition({ 
            perspective: '100px', 
            boxShadow: '0 0 0 rgba(0,0,0,0)', 
            rotateX: '0deg', 
            backgroundColor: 'rgba(0,0,0,0)', 
            borderBottom: '0px solid rgba(0,0,0,0)'
        });

        $(".top-nav a[href=#"+a+"]").transition({ 
            perspective: '100px', 
            rotateX: '10deg', 
            backgroundColor: '#68ab59', 
            borderBottom: '6px solid #438435',
            boxShadow: '0 12px 22px rgba(0,0,0,0.35)'
        });

    }, {offset: '10px'});


    $('.header-img').click(function(){
            $('.header-img').transition({y: '40px', rotate: '15deg', scale: '1.1'}, 500, 'easeInOutExpo', function(){
                $(this).transition({y: '0px', rotate: '0deg', scale: '1'}, 400, 'easeOutExpo');
            }); 
    });

    $('.header-img').css({y: '-1000px', rotate: '+45deg', scale: '0.4'});  
    $('header h1').css({y: '-800px', x: '-600px', rotate:'90deg'});
    $('header p').css({scale: 0, x: '1250px', perspective: '100px', rotateY: '90deg'});
    $('.header-wrapper .button').css({y: '300px', opacity: 0});

    setTimeout(function() {
      $('header h1').transition({y: '0px', x: '0px', rotate: '-15deg', scale:'0.8'}, 300, 'easeOutExpo', function(){
            $('header h1').transition({scale:'1.1', rotate: '5deg'}, 200, 'easeInOutCirc', function(){
                $(this).transition({scale:1,rotate: '0'}, 'easeInOutCirc');
                $('header p').transition({
                    perspective: '100px', x: '30px',
                    rotateY: '-15deg', scale: 0.85
                }, 600, 'easeInSine', function(){
                        $(this).transition({x:'0px', rotateY: '0deg', scale: 1}, 300, 'easeOutExpo');
                        $('.header-wrapper .button').transition({y: '0', opacity: 1}, 'easeInOutCirc');
                });    
            });
      }); 
    }, 500);

    setTimeout(function() {
      $('.header-img').transition({y: '0px', rotate: '-35deg', scale:'1.1'}, 800, 'easeOutExpo', function(){
            $('.header-img').transition({rotate: '15deg', scale:'1'}, 400, 'easeInOutCirc', function(){
                $(this).transition({y: '0px', rotate: '0deg', scale: '1'}, 400, 'easeOutExpo');
            });
      }); 
    }, 1500);
 
/*
    $('.header-img').each(function(){ $(this).transition({x:'1500px'},1); });
    
    $('.promo-column').waypoint(function(direction) {
    $('.promo-column').each(function(){
            $(this).transition({x: '0', opacity: 1}, 500);
        });
    }, {
      offset: '80%',
      vertical: true
    }); */

});//document ready