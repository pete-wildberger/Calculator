$(onReady);

//globals
var yinput = '';
var xinput = '';
var operator = '';


function onReady(){
console.log('Js/JQ is sourced');
  $('#keys').on('mouseenter', ':button', function () {
           $(this).css('background-color', '#87B6A7');
       }).on('mouseleave', ':button', function () {
           $(this).css('background-color', '#E3F09B');
         });
  //number button liseners
$('.key').click(function(){
  var number = '';
 number = $(this).attr('id');
 console.log('number', number.toString());
 yinput += number.toString();
 // var $screen = ('<p>' + yinput + '</p>');
 $('#output').empty();
 $('#output').append(yinput);
});

//operator keys
$('.oper').click(function(){
  xinput = yinput.slice(0);
  yinput = '';
 operator = $(this).attr('id');
 $('#output').empty();
 $('#output').append(operator);
 console.log('operator ', operator, xinput);
});
//clear
$('#clear').click(function(){
  console.log('clear');
  $('#output').empty();
 xinput = '';
 yinput = '';
 operator = '';
});
$('#equals').click(function(){

  var mathEquals = {
    a: xinput,
    b: yinput,
    opera: operator
    };
  console.log('equals post', mathEquals);

$.ajax({
  type: 'POST',
  url: '/mathEquals',
  data: mathEquals,
  success: function (response){
    console.log('back from search with:', response);
    $('#output').empty();
    $('#output').append(response.equals);
    }
  });

  // $('.math').on('mouseenter', ':button', function () {
  //         $(this).css('background-color', '#F79F79');
  //       }).on('mouseleave', ':button', function () {
  //         $(this).css('background-color', '#F7D08A');
  //     });
});
}
