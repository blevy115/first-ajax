document.addEventListener("DOMContentLoaded", function() {

  var button1 = document.body.querySelector('#button1');
  var button2 = document.body.querySelector('#button2');
  var button3 = document.body.querySelector('#button3');
  var button4 = document.body.querySelector('#button4');
  var button5 = document.body.querySelector('#button5');
  var section2 = document.body.querySelector('#step3456');
  var section3 = document.body.querySelector('#step7');
  var section4 = document.body.querySelector('#step8');
  var section5 = document.body.querySelector('#step9');
  var aCar = document.body.querySelector('#a_car');

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
    }).fail(function(responseData){
      console.log("There was an error requesting the response");
      var textnode = document.createTextNode(responseData.responseText);
      section2.appendChild(textnode);
    }).always(function(){
      console.log("Hey! The request was finished");
    });
  });
  button3.addEventListener('click', function(){
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/count',
      method:'GET',
      data: {'amount':5},
      dataType:'text',
    }).done(function(responseData){
      console.log(responseData);
      var textnode = document.createTextNode(responseData);
      section3.appendChild(textnode);
    });
  });
  button4.addEventListener('click', function(){
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/time',
      method:'GET',
      data:{'timezone': 'Asia/Tokyo'},
      dataType:'text',
    }).done(function(responseData){
      console.log(responseData);
      var textnode = document.createTextNode(responseData);
      section4.appendChild(textnode);
    });
  });
  button5.addEventListener('click', function(){
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/a_car',
      method:'GET',
      dataType:'html',
    }).done(function(responseData){
      var liNode = document.createElement('span');
      liNode.innerHTML = responseData;
      aCar.appendChild(liNode);
    });
  });
});
