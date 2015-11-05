'use strict';

window.addEventListener('DOMContentLoaded', function() {

  var iframeContainer = document.querySelector('#iframe-container'),
      iframeCover = document.querySelector('#iframe-cover'),
      iframe = document.querySelector('iframe');

  iframeCover.onclick = function() {
    iframeContainer.style.display = 'none';
    iframeCover.style.display = 'none';
    iframe.src = 'about:blank';
  }
  
  iframe.onclick = function(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  var iframe = document.querySelector('iframe'),
      links = document.querySelectorAll('a');

  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      iframeCover.style.display = 'block';
      iframeContainer.style.display = 'block';
      iframe.src = this.dataset.url;
    }
  }

});
