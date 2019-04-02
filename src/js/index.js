import $ from 'jquery';

import '../scss/index.scss';

function init() {
  attachEvents();
}

function attachEvents() {
  const container = $('.js-headhunter');
  const personList = $('.js-headhunter-box');
  const upButton = $('.js-scroll-up');
  const downButton = $('.js-scroll-down');
  const step = 25;

  container.on('mouseenter', function() {
    container.addClass('c-headhunter__buttons-visible');
  }).on('mouseleave',function(){
    container.removeClass('c-headhunter__buttons-visible');
  });

  upButton.on('click', function(e) {
    e.preventDefault();
    personList.animate({
      scrollTop: "-=" + step + "px"
    })
  });

  downButton.on('click', function(e){
    e.preventDefault();
    personList.animate({
      scrollTop: "+=" + step + "px"
    })  
  });
}

function showButtons() {

}


document.addEventListener("DOMContentLoaded",function(){

  init();

});
