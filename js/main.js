var users = [];
var tasks = [];
var emailPattern = /\w+@\w+\.\w+/;
var usersList = [];
var $usersContainer = $(".users");
var $tasksContainer = $(".tasks");

(function activate() {
 addUserFunctionality();
})();

function addUserFunctionality() {
 var $userNameField = $('.userName');
 var $userEmailField = $('.userEmail');
 $(".addUserButton").on("click", function () {
  var valid = true,
   errorText = "Field(s) ";
  if (!validateRequired($userNameField)) {
   errorText += "User name ";
   valid = false;
  }
  if (!validateRequired($userEmailField) ||
   !validateEmail($userEmailField) ||
   findInCollection(users, {"email": $userEmailField.val()})
  ) {
   errorText += "User email ";
   valid = false;
  }
  if (valid) {
   users.push({
    name: $userNameField.val(),
    email: $userEmailField.val(),
    assignedTo: []
   })
   generateUsersList();
  }
  else {
   alert(errorText + "are invalid");
  }
 })
}

function validateRequired(field) {
 return $(field).val() || $(field).is(":checked");
}

function validateEmail(field) {
 return emailPattern.test($(field).val());
}

function findInCollection(collection, findParams) {
 return collection.reduce(function (findedElem, elem) {
  var finded = null;
  if (findParams && typeof findParams === "object" && !Array.isArray(findParams)) {
   for (var field in findParams) {
    if ((finded === null || finded === true) && elem[field] === findParams[field]) {
     finded = true;
    }
    else {
     finded = false;
    }
   }
   return findedElem !== undefined ? findedElem : finded ? elem : undefined;
  }
  else {
   return findedElem !== undefined ? findedElem : elem === findParams ? elem : undefined;
  }
 }, undefined);
}

function generateUsersList() {
 usersList = [];
 users.forEach(function (user, index) {
  usersList[index] = generateUser(user);
 });
 $usersContainer.html(usersList);
}

function generateUser(user) {
 var li = $('<li />').data("user", user);
 var userName = $('<p class="userName">'+user.name+'</p>');
 var userEmail = $('<p class="userEmail">'+user.email+'</p>');
 var assignedLable = $('<label>Assigned</label>');
 var assignedCheckbox = $('<input type="checkbox" />').appendTo(assignedLable);
 var button = $('<button type="button">Delete user</button>')
  .on("click", function () {
   removeItem(users, user, generateUsersList);
  });
 return li.append([userName, userEmail, assignedLable, button]);
}

function removeItem(list, item, callback) {
 var index = list.indexOf(item);
 if (~index) {
  list.splice(index, 1);
  callback();
 }
}