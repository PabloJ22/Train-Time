// $(document).ready(function () {

//     //train name input to print out onto the train name table 
//     //row. 

//     // gets the user input for train name
//     // var trainNombre = "";

//     //    trainNombre = $("#trainName").val().trim();
//     // trainNme = $("#trainName").val();
//     // console.log("1st" + trainNme);

//     $("#submit").on("click", function (event) {
//         event.preventDefault();
//         var trainNme = $("#trainName").val();

//         console.log("1st" + trainNme);

//         trainNombre = $("#trainName").val();
//         $("#tBody").text("<tr><td>" + trainNme + "</tr></td>");

//         console.log("2nd" + trainNme);

//     });

//var TrainNme = $("<tr><td>").text("#trainName").val();

////////////////////////////
/////////////take 2
//////////////////////

// var dataRef = firebase.database();
$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyA_9MDlgiXIjBwRBxavrOWDSjMkmQSMQH0",
        authDomain: "train-time-257cc.firebaseapp.com",
        databaseURL: "https://train-time-257cc.firebaseio.com",
        projectId: "train-time-257cc",
        storageBucket: "train-time-257cc.appspot.com",
        messagingSenderId: "196553447860"
    };
    firebase.initializeApp(config);
    // var dataRef = firebase.database();


    // Initial Values
    var trainName = "";
    var destination = "";
    var trainTime = 0;
    var frequency = "";

    // Capture Button Click
    $("#submit").on("click", function (event) {
        event.preventDefault();


        trainName = $("#trainName").val().trim();
        destination = $("#destination").val().trim();
        trainTime = $("#trainTime1").val().trim();
        frequency = $("#frequency").val().trim();

        // Code for the push
        firebase.database().ref().push({

            TName: trainName,
            Destination: destination,
            TrainTime: trainTime,
            Frequency: frequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
    });
});

//         $("#trainName").append("<tr><td>" + trainName);
//         console.log(trainName);
//         // $("#destination").val().trim(); 
//         // $("#trainTime1").val().trim();
//         // $("#frequency").val().trim();


//     });
// });

// //Firebase watcher + initial loader HINT: This code behaves similarly to.on("value")
// dataRef.ref().on("child_added", function (childSnapshot) {

//     // Log everything that's coming out of snapshot
//     console.log(childSnapshot.val().trainName);
//     console.log(childSnapshot.val().destination);
//     console.log(childSnapshot.val().trainTime);
//     console.log(childSnapshot.val().frequency);


//     // full list of items to the well
//     $("#full-member-list").append("<div class='well'><span class='member-name'> " + childSnapshot.val().trainName +
//         " </span><span class='member-email'> " + childSnapshot.val().destination +
//         " </span><span class='member-age'> " + childSnapshot.val().trainTime +
//         " </span><span class='member-comment'> " + childSnapshot.val().frequency + " </span></div>");

//     // Handle the errors
// }, function (errorObject) {
//     console.log("Errors handled: " + errorObject.code);
// });

// dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function (snapshot) {
//     // Change the HTML to reflect
//     $("#name-display").text(snapshot.val().trainName);
//     $("#email-display").text(snapshot.val().destination);
//     $("#age-display").text(snapshot.val().trainTime);
//     $("#comment-display").text(snapshot.val().frequency);
// });