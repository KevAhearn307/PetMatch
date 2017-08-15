
// function doCalculation(element, dfc) {
//     var form = document.getElementById('dogfoodcalc');
//     var answer;
//     var answer1;
//     var answer2;
//     var feedYourDog;
//     var bagLast;
//     var weight = form.weight.value;
//     var unit = "cup";
//     for (i = 0; i < form.unit.length; i++)
//     {
//             unit = form.unit[i].value;
//     }
//     var measure = "lb";
//     for (i = 0; i < form.measure.length; i++)
//     {
//             measure = form.measure[i].value;
//     }
//     var activity_level = form.activity_level.value.split(",");
//     var calories = form.calories.value;
//     if (element.value == "") {
//         if (!dfc)
//          document.getElementById('response').innerHTML = '';
//         return;
//     }
//     if (unit == "cup")
//         var type = " cups";
//     else 
//         type = " kg";
//     if (measure == 'lb')
//         weight/=2.2;;
//     if ((weight == "" || activity_level[0] == "" || measure == ""))
//         return;
//         answer = (Math.pow(weight, 0.75) * activity_level[0]);
//         yourDogRequires = "<p>Your dog requires <strong>" + Math.round(answer) + "</strong> kcal / day. ";       
//         feedYourDog = "Feed your dog <strong>" + (answer / calories).toFixed(2) + type + "</strong> / day. ";
//         bagLast = "A 15 pound bag of dog food would last <strong>" + Math.round(15 / ((answer / calories)*0.2875)) +"</strong> days.</p>";
        
//         //Return the results
//         document.getElementById('response').innerHTML = "<div class=\"requirements\">" + yourDogRequires + feedYourDog + bagLast +"</div>";
 
// }

// function resetCalc(resetButton) {
//     var form = document.getElementById('dogfoodcalc');
//     document.getElementById('response').innerHTML = '';
//     form.calories.value = '';
//     form.activity_level.selectedIndex = 0;
//     if (resetButton)
//         form.reset();
// }


//    $(function() {
//   // Initialize form validation 
//   $("form[name='dogfoodcalc']").validate({
//      // Specify validation rules
//     rules: {
//       // The key name on the left side is the name attribute
//       // of an input field. Validation rules are defined
//        // on the right side
//      weight: "required",
//      calories: "required",
//      activity_level:"required"
      
//     },
//     // Specify validation error messages
//    messages: {
//      weight: "Please enter your dog's weight",
//      calories: "Please enter your dog's food calories per serving",
//     activity_level: "Please select your dog's activity level"
//    },
//      });
// });




 $(document).ready(function(){
    event.preventDefault();

      $("#table").hide()

      $("#cost").on("click", function(){
          $("#table").toggle()
      });

      var breed = "";
      

    $("button").click(function(){

      var breed = $("#search").val().trim();
      var name = $("#vistor").val().trim();
      var location = $("#code").val().trim();

      console.log(breed);
      console.log(name);
      console.log(location);


      var queryURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + breed + "&format=json&callback=?";

      var imageURL = "https://dog.ceo/api/breed/" + breed + "/images";

       
      
      $("#image").empty();

      $.ajax({
        url: queryURL,
        method: "GET",
        contentType: "applocation/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function(data){
          $("#facts").html(data[2][0]);
          // $("#output").html(data[3][0]);

          for(var i=0; i<data[2].length; i++){
            $("#link").html("<div>" + "Find out about the " + breed + "s lifespan and size with this link " + "<a href =" + data[3][0] + ">"+ data[3][0] +"</a></div>")
            console.log(data);
          };
        },
        
      });


  var baseURL = "https://api.petfinder.com/";
  var reqType = "pet.find?";
  var params = "breed="+ breed + "&location=" + location + "&count=1&output=basic&";
  var yourKey = "key=ad2cd8f7ea4a77a23e2a8bb6b66b4b52&";
  var format = "format=json";
  var callback = "&callback=?";
  

  var fullURL = baseURL+reqType+params+yourKey+format+callback;
  
    $("#your-request").text(fullURL);

        
      $.ajax({
    dataType: "jsonp",
    url: fullURL,
   
    success:(function(data){
    
 

    
      $("#photo").html("<img src="+data.petfinder.pets.pet.media.photos.photo[3].$t+"></img>");
    
      
      $("#name").text("Name: " + data.petfinder.pets.pet.name.$t);
      $("#description").text("Description: " + data.petfinder.pets.pet.description.$t);
      $("#sex").text("Sex: " + data.petfinder.pets.pet.sex.$t);
      $("#size").text("Size: " + data.petfinder.pets.pet.size.$t);

      

      $("#shelter").text("Shelter: " + data.petfinder.pets.pet.shelterId.$t);
      $("#contact").html("<a href =" + data.petfinder.pets.pet.contact.email.$t + ">" + data.petfinder.pets.pet.contact.email.$t + "</a>" );


       console.log(data);
       console.log(data.petfinder.pets.pet.name.$t);
   
    })

  });
  $("#pet-input").val("");
  $("#location").val("");
  


      // Initialize Firebase
       var config = {
          apiKey: "AIzaSyDuBFYzfIw_9JwSE3U0_dkWvbUt2OhV72Q",
          authDomain: "petmatch-b3da8.firebaseapp.com",
          databaseURL: "https://petmatch-b3da8.firebaseio.com",
        projectId: "petmatch-b3da8",
          storageBucket: "petmatch-b3da8.appspot.com",
          messagingSenderId: "1014252033957"
        };
        
  
        firebase.initializeApp(config);

        var database = firebase.database();

        var user = {
          Customer_Name: name,
          Breed: breed,
          Zip_Code: zipCode
        }
        database.ref().push(user);

  var baseURL = "https://api.petfinder.com/";
  var reqType = "pet.find?";
  var params = "breed="+ breed + "&location=" + location + "&count=1&output=basic&";
  var yourKey = "key=ad2cd8f7ea4a77a23e2a8bb6b66b4b52&";
  var format = "format=json";
  var callback = "&callback=?";
  

    
  

    });

      
  });

    
