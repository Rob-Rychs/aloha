var myVar;

function loaderFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.body.style.backgroundColor = 'white';
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.opacity = 1;
}