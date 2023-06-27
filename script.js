const infoButton = document.querySelector('.info-button');
const description = document.querySelector('.description');

const infoButton1 = document.querySelector('.info-button1');
const description1 = document.querySelector('.description1');

const infoButton2 = document.querySelector('.info-button2');
const description2 = document.querySelector('.description2');

const infoButton3 = document.querySelector('.info-button3');
const description3 = document.querySelector('.description3');

const infoButton4 = document.querySelector('.info-button4');
const description4 = document.querySelector('.description4');

infoButton.addEventListener('click', () => {
  description.style.display = description.style.display === 'none' ? 'block' : 'none';
});

infoButton1.addEventListener('click', () => {
  description1.style.display = description1.style.display === 'none' ? 'block' : 'none';
});

infoButton2.addEventListener('click', () => {
  description2.style.display = description2.style.display === 'none' ? 'block' : 'none';
});

infoButton3.addEventListener('click', () => {
  description3.style.display = description3.style.display === 'none' ? 'block' : 'none';
});

infoButton4.addEventListener('click', () => {
  description4.style.display = description4.style.display === 'none' ? 'block' : 'none';
});

const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))

$(document).on("click", function(event) {
  var target = $(event.target);
  
  // Check if the clicked element is not part of the dropdown
  if (!target.closest(".dropdown").length) {
    $(".dropdown-menu").removeClass("show");
  }
});

$(document).ready(function() {
  // Enable the Bootstrap collapse functionality
  $('#navbarToggleExternalContent').collapse({
    toggle: false // Optional: Set to true to show the content by default
  });
});

$(document).ready(function(){

  $.getJSON("data.json",function(data){
    console.log(data)

    $('.explore-heading').html(explore-heading);
  }).fail(function(){
    comsole.log("Error")
  })
  
})