/**
 * Created by student on 06-Apr-17.
 */
(function () {
  "use strict";

  angular.module("newsfeed")
  .cotroller("newsfeed", newsfeed);

  newsfeed.$inject = ["http", "NEWSFEED_URL_CONSTANTS"];
  function newsfeed($http, NEWSFEED_URL_CONSTANTS) {
    var newsfeed = this;

    //parameters
    newsfeed.articles =[];
    newsfeed.newArticleModel = {};
    newsfeed.editPopupVisible = false;


    //Methods
    newsfeed.showEditPopup = showEditPopup;
    newsfeed.hideEditPopup = hideEditPopup;
    newsfeed.getEmptyModel =    getEmptyModel;
    newsfeed.removePhoto =    removePhoto;
    newsfeed.addPhoto =    addPhoto;
    newsfeed.saveArticle = saveArticle;

    //Function

    function removePhoto($index) {
      if(newsfeed.newArticleModel.photos.length === 1) {
        newsfeed.newArticleModel.photos[0]="";
      }
      else {
        newsfeed.newArticleModel.photos.splice($index, 1);
      }
    }

    function addPhoto() {
        newsfeed.newArticleModel.photos.push("");
      console.log(newsfeed.newArticleForm);
    }

    function showEditPopup(modelForEdit) {
      newsfeed.editPopupVisible = true;
      newsfeed.newArticleForm.$setPristine(true);
      newsfeed.newArticleForm.$setUntouched(true);
      if (modelForEdit) {
        newsfeed.newArticleModel = _.cloneDeep(modelForEdit);
      }
      else {
        newsfeed.newArticleModel = getEmptyModel();
      }
    }

    function  hideEditPopup() {
      newsfeed.editPopupVisible = false;
    }
    function getEmptyModel () {
      return {
        type: "article",
        title: "",
        description: "",
        mainPhoto: "",
        photos: [""],
        video: ""
      }
    }

    function saveArticle() {
      if(newsfeed.newArticleForm.$invalid) {
        newsfeed.newArticleForm.$setSubmitted();
        return false;
      }
      if( newsfeed.newArticleModel.id ) {
        $http.put(NEWSFEED_URL_CONSTANTS["PUT_ARTICLE"], newsfeed.newArticleModel)
            .then(function() {
              var articleIndex = _.findIndex(newsfeed.articles, {'id': newsfeed.newArticleModel.id}
              )
              newsfeed.articles[articleIndex] = newsfeed.newArticleModel;
              hideEditPopup();
            })
      }
      else{
        newsfeed.newArticleModel.createDate = $.now();
        $http.post(NEWSFEED_URL_CONSTANTS["POST_ARTICLE"], newsfeed.newArticleModel)
            .then(function() {
              newsfeed.articles.push(newsfeed.newArticleModel);
            })
      }
    }

    //initialization
    (function () {

    })();
  }
})();





























