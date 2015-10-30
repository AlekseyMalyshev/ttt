/*
 * File script.js
 * Created by AlekseyMalyshev
 * Date created Oct 29, 2015
 */

(function app() {
  'use strict';

  let clickX = true;
  let ended = false;
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  let clicks = [];

  let checkPos = (id, x) => {
    for (let i = 0; i < wins.length; ++i) {
      let w = wins[i];
      let found = false;
      if (w.every((v) => {
          if (v === id) {
            found = true;
          }
          return clicks[v] === x;
        }) && found) {
        return w;
      }
    }
  };

  let documentReady = () => {
    $('.box').on('click', (event) => {
      let $e = $(event.target);
      let id = parseInt($e.attr('id'));
      if (clicks[id] === undefined && !ended) {
        $e.text(clickX ? 'X' : 'O');
        $e.addClass('clicked');
        clicks[id] = clickX;
        let res = checkPos(id, clickX);
        if (res !== undefined) {
          res.forEach((v) => {
            $('td.box#' + v).addClass('win');
          });
          ended = true;
        }
        clickX = !clickX;
      }
    });
  };

  $(documentReady);
})();

