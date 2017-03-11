/*При нажатии на кнопку Add user нужно провалидировать поля User name и User email, оба поля должны быть обязательные, а также email должен быть валидным и уникальным(не должно быть юзеров с таким email). Если какое то или несколько полей не валидны нужно показать сообщение с текстом "Field(s) … are invalid".
Если поля валидны, то нужно сгенерировать юзера, добавить в конец списка юзеров и очистить поля ввода.
При нажатии на кнопку Delete user юзер должен удаляться из списка.

При нажатии на кнопку Add task нужно провалидировать поля Task title, Task description и Task ID, все поля должны быть обязательными, а поле ID уникально(не должно быть задач с таким ID). Если какое то или несколько полей не валидны нужно показать сообщение с текстом "Field(s) … are invalid". 
Если поля валидны, то нужно сгенерировать задачу, c датой её создания, добавить в начало списка задач и очистить поля ввода.
При нажатии на кнопку Delete task задача должна удаляться из списка.

Когда мы кликаем по задаче в списке, задача должна становиться активной(меняться фон на серый), а на списке юзеров отмечаться чекбоксы тех, кто указан исполнителем данной задачи(Assigned) на выполнение данной задачи, если в момент нажатия активна другая задача она должна становиться не активной.
У каждой задачи в списке должен быть счётчик исполнителей данной задачи, в котором отображается число юзеров, которые назначены исполнителями данной задачи.
При нажатии на кнопки Move top и Move bottom на задаче, задача должна перемещаться на одну позицию в списке вверх или вниз.
При нажатии на кнопку Complete task на задаче задача должна менять фон на зелёный, перемещаться в конец списка задач, сбрасывать на 0 список исполнителей и снимать с них чекбоксы.
Сделать drag and drop задач используя события mousedown и mouseup.
Добавить перед списком задач кнопку sort by date и при нажатии на неё перестраивать список задач в порядке даты создания.
Добавить перед списком пользователей кнопку sort by name и при нажатии на неё перестраивать список пользователей по имени в алфавитном порядке.
*/

var users = [];
var tasks = [];
var emailPattern = /\w+@\w+\.\w+/;
var usersList = [];
var $usersContainer = $(".users");
var $tasksContainer = $(".tasks");

(function activate() {
 addUserFunctionality();
 addTaskFunctionality();
})();

//======user======
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

//======tasks=======
function addTaskFunctionality() {
 var $taskTittleField = $('.taskTittleField');
 var $taskDescriptionField = $('.taskDescriptionField');
 var $taskID = $('.taskID');
 $(".addTaskButton").on("click", function () {
  var valid = true,
   errorText = "Field(s) ";
  if (!validateRequired($taskTittleField)) {
   errorText += "Task tittle ";
   valid = false;
  }
  if (!validateRequired($taskDescriptionField)) {
   errorText += "Task description ";
   valid = false;
  }
  if (!validateRequired($taskID) ||
   !validateID($taskID) ||
   findInCollection(tasks, {"ID": $taskID.val()})
  ) {
   errorText += "Task ID ";
   valid = false;
  }
  if (valid) {
   tasks.push({
    tittle: $taskTittleField.val(),
    description: $taskDescriptionField.val(),
    ID: $taskID.val(),
    assignedTo: []
   })
   generateTasksList();
  }
  else {
   alert(errorText + "are invalid");
  }
 })
}

function validateRequired(field) {
 return $(field).val() || $(field).is(":checked");
}

function validateID(field) {
 return $tasksContainer.test($(field).val());
}

function generateTasksList() {
 tasksList = [];
 tasks.forEach(function (task, index) {
  tasksList[index] = generateTask(task);
 });
 $tasksContainer.html(tasksList);
}

function generateTasks(task) {
 var li = $('<li />').data("task", task);
 var taskTittle = $('<h2 class="taskTittle">'+taskTittle+'</h2>');
 var createDate = $("<p>" + );
 var taskDescription = $('<p class="taskDescription">'+taskDescription+'</p>');
 var assignedLable = $('<label>Assigned</label>');
 var button = $('<button type="button" class="move-top-btn">Move top</button>')
  .on("click", function () {
   removeItem(users, user, generateTasksList);
  });
  var button = $('<button type="button" class="move-bottom-btn">Move bottom</button>')
  .on("click", function () {
   removeItem(users, user, generateUsersList);
  });
  var button = $('<button type="button" class="delete-task-btn">Delete task</button>')
  .on("click", function () {
   removeItem(tasks, task, generateTasksList);
  });
  
  
 return li.append([taskTittle, taskDescription, assignedLable, button]);
}

