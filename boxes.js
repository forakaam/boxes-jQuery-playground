// $('document').ready(function(){
  // alert('Ready for DOM manipulation');
// });
$(function() {
//Exercise 1
//alert('Ready for DOM manipulation');
//Exercise 2
//1.
// $('#secretBox').css('background-color', 'white');
//2.
// $('#row1 > div').addClass('boxType3');
//3.
// $('#row4 :last-child').css('display', 'none');
//4.
// $('.boxType1').css('background-color', 'white');
//5.
//$('#row2 :lt(2)').removeClass('box boxType2 boxType3');
//6.
// $( ".row > div").not('#secretBox').css('width', '2px');
// Exercise 3
//1.
$('#container').on('click', function(e){
  console.log("X:" + e.screenX + " " + "Y:" + e.screenY);
});
//2.
$('.boxType1').append('<a href="http://www.galvanize.com/">Galvanize</a>');
$('a').on('click', function(e){
  e.preventDefault();
  alert("I won't let you leave");
});
//3.
$('.box').on('click', function(e) {
  $(e.target).toggleClass('puppy');
  $('.box').css('background-image', '');
  $('.puppy').css('background-image', "url('https://s-media-cache-ak0.pinimg.com/236x/30/1f/aa/301faac3504ba010c3bb9d131d087bd0.jpg')");
});
//4.
$('#container').on('click', function(e){
  $(this).css('background-color', 'black');
  if (this == e.target){
    $(e.target).css('background-color', 'lime');
  }
  else {
    $(e.target).css('background-color', 'white');
  }
});


});