var randomResult;
var loss = 0;
var win = 0;
var previous = 0;

//Have 4 crystals and a random result. 
var resetOrStart= function() {

    $(".crystals").empty();

    var images = [
                "http://www.crystalclearintentions.co.nz/wp-content/uploads/crystals.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/51snWRfynML._US500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/1f71c9fd-6a2b-4397-8505-069f472ab3a8.jpg._CB521559690__SL300__.jpg", 
                "http://cdn.playbuzz.com/cdn/7a5d7935-6177-4be8-8b72-2a95ad2bcdfe/3b295cc9-7b5e-412f-8b1f-8547edd8e66b.jpg"];

    randomResult = Math.floor(Math.random() * 101 + 19);
    //console.log(randomResult);


    $("#result").html('Random Result: ' + randomResult);

    for (var i = 0; i < 4; i++){

        //Every crystal needs to have a random number.
        //New random number everytime you win or lose. 

        var random = Math.floor(Math.random() * 12);
          //console.log(random);

        

    var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "dataRandom": random
        });

        crystal.css({
            "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
        });

    $(".crystals").append(crystal);
    }

    $("#previous").html("Total Score: " + previous);
}
//start game
resetOrStart();


    


// When clicking any crystal, add to previous result. 
//Must meet random result. 
$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('dataRandom'));

    previous += num;

    $("#previous").html("Total Score: " + previous);
    console.log(previous);

    if (previous > randomResult){
        loss ++;

        $("#losses").html("You Loss: " + loss);

        previous = 0;

        resetOrStart();

    } else if ( previous === randomResult){
        win ++;

        $("#wins").html("You Win: " +  win);

        previous = 0;

        resetOrStart();
    }
    
})