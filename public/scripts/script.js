$(onReady);

//globals
var yinput = '';
var xinput = '';
var operator = '';


function onReady(){
  //button effects
console.log('Js/JQ is sourced');
//   $('#keys').on('mouseenter', '.key', function () {
//            $(this).css('background-color', '#87B6A7');
//        }).on('mouseleave', '.key', function () {
//            $(this).css('background-color', '#E3F09B');
//          });
//
//   $('#keys').on('mouseenter', '.oper', function () {
//             $(this).css('background-color', '#F79F79');
//       }).on('mouseleave', '.oper', function () {
//             $(this).css('background-color', '#F7D08A');
//           });
//
//   $('#keys').on('mouseenter', '.spec', function () {
//             $(this).css('background-color', '#F7D08A');
//       }).on('mouseleave', '.spec', function () {
//             $(this).css('background-color', '#F79F79');
//           });
// $('#keys').on('mouseenter', '.π', function () {
//             $(this).css('background-color', '#F79F79');
//       }).on('mouseleave', '.π', function () {
//             $(this).css('background-color', '#F7D08A');
//           });

  //number button liseners
$('.key').click(function(){
  var number = '';
 number = $(this).text();
 console.log('number', number.toString());
 yinput += number.toString();
 console.log(yinput);
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
//π
$('#π').click(function(){
  var number = '';
 number = Math.PI.toFixed(10);
 console.log('number', number.toString());
 yinput += number.toString();
 console.log(yinput);
 $('#output').empty();
 $('#output').append(yinput);
});
//one dot

//clear
$('#CLEAR').on('click', clearScreen);

//equals button
$('#EQUALS').on('click', function(){
  computing();
  setTimeout(mathEquals, 3000);
});

}//end onReady

//functions

function mathEquals(){

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
    var rEquals= response.equals.toString();
    yinput = rEquals.slice(0);
    }
  });
  }

  function clearScreen(){
    console.log('clear');
    $('#output').empty();
   xinput = '';
   yinput = '';
   operator = '';
  }

  function computing(){
    $('#output').empty();
    $('#output').append('...COMPUTING...');
  }
