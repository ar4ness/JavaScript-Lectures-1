/**
 * Created by student on 08-Apr-17.
 */
(function () {
  "use strict";
  angular.module("newsfeed").component("articleComponent", articleComponent());

  function articleComponent() {
    return {
      templateUrl: "",
      controller: articleComponentCtrl,
      controllerAs: articleComponentCtrl,
      bindings: {
        article: "<",
        onEdit: "&",
        onDelete: "&"
      }
    }
    function articleComponentCtrl() {
      var articleComponentCtrl = this;
      articleComponentCtrl.deleteArticle = deleteArticle;
      articleComponentCtrl.editArticle = editArticle;
    }
  }
})();