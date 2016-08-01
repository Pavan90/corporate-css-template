$(document).ready(function(){
   'use strict';

    $('#slider-carousel').carouFredSel({

       responsive:true,
        width: '100%',
        circular: true,
        scroll:{
            items            : 1,
            easing           : "elastic",
            duration         : 1000,
            pauseOnHover     : true
    },
        auto: true,
        items: {
                visible:{
                       min:1,
                        max:1
                         },
                height:"variable",
                },
        pagination: {
        container: '.sliderpager',
        anchorBuilder: false
    }
    });

    $('.portfolio-carousel').carouFredSel({

       responsive:true,
        width: '100%',
        circular: true,
        prev: '#prev',
        next: '#next',
        scroll:{
            items            : 1,
            easing           : "elastic",
            duration         : 1000,
            pauseOnHover     : true
    },
        auto: true,
        items: {
                visible:{
                       min:1,
                        max:4
                         },
                height:"variable",
                }
    });




    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top >=60){
            $("header").addClass('secondary-dark-blue-bg')
        }
        else {
            if($('header').hasClass('secondary-dark-blue-bg')){

               $('header').removeClass('secondary-dark-blue-bg');
               }
        }
        });


    $(".contact #submit").on('click',function(e){
        e.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        var form = new Array({
            'name' : name,
            'email' : email,
            'subject' : subject,
            'message': message
        });

        $.ajax({
            type: 'POST',
            url:"contact.php",
            data: ({
                'action': 'contact',
                'form': form})
            }).done(function(data){console.log(data)
                $('#contact .result').html(data);
                $('.contact-form')[0].reset();
            });


        });

        $("#menu").slicknav({
          label:''
        })

        $('#main').stellar();


    });
