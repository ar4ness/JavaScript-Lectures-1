/**
 * Created by student on 08-Apr-17.
 */
(function () {
  "use strict";
  angular.module('newsfeed').filter("descriptionToHtml", descriptionToHtml);
  function  descriptionToHtml() {
    return function (text) {
      return text.split("\n").join("<br>");
    }
  }
})