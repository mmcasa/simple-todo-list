$(function() {
  // create Text box
 // Need to create ul and li's on click of button
 // set input type to Text
 //when you click on edit button a textbox should appear with a button saying submit
 // when you click on x button, it should delete the li


 var $body = $("body");

// creat elements
  var $textBox = $("<input type='text' placeholder='what to do?' id='textBox'>");
  var $title = $("<h1>To-do- App</h1>")
  var $subButton = $("<button type='submit' id='add_todo'>Add</button>")
  var $taskList = $('<ul>');
  var $form = $('<form>');


  // append created elements
  $body.append($title);
  $form.append($textBox);
  $form.append($subButton);
  $body.append($form);
  $body.append($taskList);


  $(document).on('click', '#add_todo', addListItem).on('click', '#delete', deleteListItem).on('click', '#edit', editListItem)


  function addListItem(event) {

    event.preventDefault();
    console.log('what');
    var $deleteButton = $("<button id='delete'>x</button>");
    var $editButton = $("<button id='edit'>e</button>");
    var $listItem = $("<li>")
    var text = $textBox.val();
    if(text.trim().length === 0){
      alert('you gotta do something!')
      return;
    }

    $listItem.html(text);
    $textBox.val("");
    $listItem.append($deleteButton)
    $listItem.append($editButton)
    $taskList.append($listItem);
  }

  function deleteListItem() {
    $(this).parent().remove()

  }

  function editListItem() {
    var $editBox  = $("<input type='text' id='editBox' placeholder='make changes?'><button id='confirm'>c</button>")
    var $listText = $(this).parent().html($editbox)


  }

  function confirmT() {

    var edit = $('#editbox').val();
    console.log(edit);

  }








})
