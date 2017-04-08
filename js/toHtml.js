/**
 * Created by student on 08-Apr-17.
 */
(function () {
  "use strict";
  angular.module("app").filter("toHtml", toHtml);

  toHtml.$inject =["$sce"];
  function toHtml($sce) {
    return function(html) {
      return $sce.trustAsHtml(html);
    }
  }
})();