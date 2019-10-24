 //Making sure the page is ready
  $('#btn1').click(function() {
      $(document).ready(function() {
        alert("Welcome to jQuery: Novice to Ninja Practice Page.");
      });     
  });

 // Testing our selection
 $('#btn2').click(function() {
    $(document).ready(function() {
        alert($('.person tbody tr').length + ' rows in the table!');
    });
 
 });

// Setting CSS properties with object literal
$('#btn3').click(function() {
    $(document).ready(function() {
        $('.person tbody tr:even').css(
        {'background-color':'#dddddd',
         'color':'#666666',   
         'font-size': '11pt',
         'line-height': '2.5em'
        });
    });
});


// Adding and removing classes .addClass & .removeClass
$('#btn4').click(function() {
    $(document).ready(function() {
        $('.person tbody tr:odd').addClass('zebra');
    });

});

//Highlighting when hovering
 $('.person tbody tr').mouseover(function() {
    $(this).addClass('zebraHover');
 });

 $('.person tbody tr').mouseout(function() {
     $(this).removeClass('zebraHover');
 });

 // Adding new elements
 $('#btn5').click(function() {
    $('#disclaimer').toggle();
    if ($('#disclaimer').is(':visible')) {
        $(this).val('Hide');
    } else {
        $(this).val('Show');
    }
});

// Adding new elements slidetoggle & fadeout button
 $('<input type="button" class="btn" value="Hide" id="btn6">')
     .insertAfter('#disclaimer1');
 $('#btn6').click(function() {
     $('#disclaimer1').slideToggle('slow', function() {
        $('#btn6').fadeOut();
     });
});

//Spoiler and revealer
$('.spoiler').hide();
$('<input type="button" class="btnhide" value="Tell Me!" >')
    .insertBefore('.spoiler');
$('.btnhide').click(function() {
    $(this).hide();
    $(this).next().fadeIn();
});
$('#btn7').click(function() {
    $('.animate').animate ({
        padding: '20px',
        fontSize: '30px'
    }, 2000);
});

$('#btn8').click(function() {
    $('#animatehide').animate({
        opacity: 'hide',
        height: 'hide'
    }, 'slow');
});

//Easing
  $(document).ready(function(){
      $('p:first').toggle(function() {
        $(this).animate( {'height':'+=150px'}, 2000, 'linear')
      }, function() {
        $(this).animate( {'height':'-=150px'}, 2000, 'swing');
      });
  });

  
$('#bio > div').hide();
$('#bio > div:first').show();
$('#bio h3').click(function() {
    $(this).next().animate(
        {'height':'toggle'}, 'slow', 'easeOutBounce'
    );
});


/**********************/
/* Navagtion Scripts */
/********************/

//Navagtion bars
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  //Animating navigation
$('.topnav a').hover(function() {
    $(this).animate({paddingLeft: '+=15px'}, 200);
}, function() {
    $(this).animate({paddingLeft: '-=15px'}, 200);
});


