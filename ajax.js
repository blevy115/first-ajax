document.addEventListener("DOMContentLoaded", function() {

  var button = document.body.querySelector('#button')
  button.addEventListener('click', function(e){
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/',
      method:'GET',
      dataType:'text',
    });
  });
});
