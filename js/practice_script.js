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

// //Hiding and revealing Elements
// $('#hideButton').click(function() {
//     $('#disclaimer').hide();
// });

// $('#showButton').click(function() {
//     $('#disclaimer').show();
// });


// // Adding new elements
// $('<input type="button" value="Hide" id="toggleButton">')
//     .insertAfter('#disclaimer');
// $('#toggleButton').click(function() {
//     $('#disclaimer').toggle();
//     if ($('#disclaimer').is(':visible')) {
//         $(this).val('Hide');
//     } else {
//         $(this).val('Show');
//     }
// });

// Adding new elements slidetoggle & fadeout button
$('<input type="button" value="Hide" id="hideButton">')
    .insertAfter('#disclaimer');
$('#hideButton').click(function() {
    $('#disclaimer').slideToggle('slow', function() {
        $('#hideButton').fadeOut();
    });
});

//Removing existing elements
$('#no-script').remove();


// Fading in and Out
// .fadIn() .fadOut()
// .fadIn('slow') .fadOut('fast')




$('#celebs tbody tr').hover(function() {
    $(this).addClass('zebraHover');
}, function() {
    $(this).removeClass('zebraHover')
});

$('#celebs tbody tr').click(function() {
    $(this).toggleClass('zebraHover');
});

//Spoiler and revealer
$('.spoiler').hide();
$('<input type="button" class="revealer" value="Tell Me!" >')
    .insertBefore('.spoiler');
$('.revealer').click(function() {
    $(this).hide();
    $(this).next().fadeIn();
});

//Easing
//  $(document).ready(function(){
//      $('p:first').toggle(function() {
//        $(this).animate( {'height':'+=150px'}, 2000, 'linear')
//      }, function() {
//        $(this).animate( {'height':'-=150px'}, 2000, 'swing');
//      });
//  });

  
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


