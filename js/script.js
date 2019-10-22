//Making sure the page is ready
 $(document).ready(function() {
    alert("Welcome to StarTrackr! Now no longer under police investigation!");
 });

// // Testing our selection
// $(document).ready(function() {
//     alert($('#celebs tbody tr').length + ' elements!');
// });

// // Filter for zebra stripes
// $(document).ready(function() {
//     alert($('#celebs tbody tr:even').length + ' elements!');
// });

// Selector filers :odd, :first, :last, :eq

// // Reading CSS properties
// $(document).ready(function() {
//     var fontSize = $('#celebs tbody tr:first').css('font-size');
//     alert('Font size of the first row is ' + fontSize);
// });

// Setting CSS properties with object literal
// $(document).ready(function() {
//     $('#celebs tbody tr:even').css(
//     {'background-color':'#dddddd',
//      'color':'#666666',   
//      'font-size': '11pt',
//      'line-height': '2.5em'
//     });
// });

// Adding and removing classes .addClass & .removeClass
$(document).ready(function() {
    $('#celebs tbody tr:even').addClass('zebra');
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


//Highlighting when hovering
// $('#celebs tbody tr').mouseover(function() {
//     $(this).addClass('zebraHover');
// });

// $('#celebs tbody tr').mouseout(function() {
//     $(this).removeClass('zebraHover');
// });

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

//Animating navigation
$('#navigation li').hover(function() {
    $(this).animate({paddingLeft: '+=15px'}, 200);
}, function() {
    $(this).animate({paddingLeft: '-=15px'}, 200);
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
