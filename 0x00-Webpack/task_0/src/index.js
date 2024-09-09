// src/index.js
import $ from 'jquery';

$(document).ready(function() {
  console.log('jQuery is working!');
  $('body').append('<p>First paragraph added with jQuery.</p>');
  $('body').append('<p>Second paragraph added with jQuery.</p>');
  $('body').append('<p>Third paragraph added with jQuery.</p>');
});
