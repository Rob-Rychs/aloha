$(document).ready(function(){
  let count = 1
  $('.add-to-cart').on('click', function(){
    $('.item-count').css('display', 'inline-block');
    $('.item-count').html(count);
    count++;
    console.log(count);
    return count;
  });
});