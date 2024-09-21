import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css'; // Import CSS

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
  $('#btn').on('click', _.debounce(updateCounter, 500));
});
