/*
 * File script.js
 * Created by AlekseyMalyshev
 * Date created Oct 29, 2015
 */

(function app() {
  'use strict';

  let documentReady = () => {
    console.log('Document ready');
    $('.box').on('click', (event) => {
      let $e = $(event.target);

      $e.text('X');
      console.log('box clicked');
    });
  };

  $(documentReady);

  console.log("Inside");
})();

