$('#myCarousel').carousel({
    interval: 3000,
 });

$(function(){
    'use strict';
   var  win=$(window).height(),
       upper=$('.upper_bar').innerHeight(),
       nav=$('.navbar').innerHeight();
     $('.slider').height(win-(upper+nav));
});
