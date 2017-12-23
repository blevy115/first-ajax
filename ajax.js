document.addEventListener("DOMContentLoaded", function() {


    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/',
      method:'GET',
      dataType:'text',
    });

  });
  /* Your code goes here */
