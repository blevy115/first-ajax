document.addEventListener("DOMContentLoaded", function() {

  var button1 = document.body.querySelector('#button1')
  var button2 = document.body.querySelector('#button2')
  var button3 = document.body.querySelector('#button3')
  var section2 = document.body.querySelector('#step3456')
  var section3 = document.body.querySelector('#step7')
  button1.addEventListener('click', function(){
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/',
      method:'GET',
      dataType:'text',
    });
  });
  button2.addEventListener('click', function(){
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/ping',
      method:'GET',
      dataType:'text',
    }).done(function(responseData){
      console.log(responseData);
      var textnode = document.createTextNode(responseData);
      section2.appendChild(textnode);
    }).fail(function(){
      console.log("There was an error requesting the response");
      var textnode = document.createTextNode("There was an error, will try harder next time");
      section2.appendChild(textnode);
    }).always(function(){
      console.log("Hey! The request was finished");
    });
  });
  button3.addEventListener('click', function(){
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/count',
      method:'GET',
      dataType:'text',
    }).done(function(responseData){
      console.log(responseData);
      var textnode = document.createTextNode(responseData);
      section3.appendChild(textnode);
    });
  });
});
