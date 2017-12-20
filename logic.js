var calories;

$("body").on("click","#submit", function(event){
     event.preventDefault();
     // console.log
     
      
      var calories = "500"
      var stuff = "chicken"
      var apiKey = "44952938118975f4434da59356ed9033";

      var queryURL = "https://api.edamam.com/search?q=" + stuff + "&app_key=" + apiKey + "&calories=" + calories
      

      var queryURL = ""
      $.ajax({

          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;
          console.log(response.data);










});

 });       


         