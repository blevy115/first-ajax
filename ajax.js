document.addEventListener("DOMContentLoaded", function() {

  var button1 = document.body.querySelector('#button1')
  var button2 = document.body.querySelector('#button2')
  var section2 = document.body.querySelector('#step3456')
  button1.addEventListener('click', function(){
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/',
      method:'GET',
      dataType:'text',
    });
  });
  button2.addEventListener('click', function(){
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/pong',
      method:'GET',
      dataType:'text',
    }).done(function(responseData){
      console.log(responseData);
      var textnode = document.createTextNode(responseData);
      section2.appendChild(textnode);
    }).fail(function(){
      var textnode = document.createTextNode("There was an error, will try harder next time");
      section2.appendChild(textnode);
    });
  });
});
