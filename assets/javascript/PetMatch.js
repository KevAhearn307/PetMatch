$(document).ready(function(){
$("#find-pet").on("click", function(event) {
 event.preventDefault();
var pet = $("#pet-input").val();
var location = $("#location").val();
        



//petfinder API guide
   
  
var baseURL = "https://api.petfinder.com/";
  var reqType = "pet.find?";
  var params = "breed="+ pet + "&location=" + location + "&count=1&output=basic&";
  var yourKey = "key=ad2cd8f7ea4a77a23e2a8bb6b66b4b52&";
  var format = "format=json";
  var callback = "&callback=?";
  

  var fullURL = baseURL+reqType+params+yourKey+format+callback;
  $(document).ready(function(){
    $("#your-request").text(fullURL);

    $.ajax({
    dataType: "jsonp",
    url: fullURL,
   
    success:(function(data){
    
    
    $("#photo").html("<img src=" +data.petfinder.pets.pet.media.photos.photo[3].$t+"</img>");
    
      
      $("#name").text(data.petfinder.pets.pet.name.$t);
      $("#description").text(data.petfinder.pets.pet.description.$t);
      $("#sex").text(data.petfinder.pets.pet.sex.$t);
      $("#size").text(data.petfinder.pets.pet.size.$t);

      

      $("#shelter").text(data.petfinder.pets.pet.shelterId.$t);
      $("#contact").text(data.petfinder.pets.pet.contact.phone.$t).text(data.petfinder.pets.pet.contact.email.$t)


       console.log(data);
       console.log(data.petfinder.pets.pet.name.$t);
    })
    });

  });
  $("#pet-input").val("");
  $("#location").val("");
  
});




});