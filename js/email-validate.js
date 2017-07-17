$(function(){
  $("input[type='submit']").click(function() {
    let checkedemail = document.querySelector("input[type='email']");
    if (checkedemail.checkValidity() == true) {
    alert('Thank you for subscribing');
    return false;
    }
  });
});