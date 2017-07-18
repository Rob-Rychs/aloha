$(function(){
  $("input[type='submit']").click(function() {
    let checkedemail = document.querySelector("input[type='email']");
    if (checkedemail.checkValidity() == true) {
    $('.notice-warning').css('display', 'block');
    // alert('Thank you for subscribing');
    return false;
  };
});

$(function(){
  $('.notice-close').on('click', function(event){
  $('.notice-warning').fadeOut('slow', function(event){
  $(this).remove();    
  });
});
});
});
