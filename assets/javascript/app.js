let config = {
    apiKey: "AIzaSyA3XgPu0dgmmAP_vCFPhFQ1XBm__YUntbU",
    authDomain: "train-times-2.firebaseapp.com",
    databaseURL: "https://train-times-2.firebaseio.com",
    projectId: "train-times-2",
    storageBucket: "",
    messagingSenderId: "838388104135"
};
firebase.initializeApp(config);

let trainData = firebase.database();

$("#addTrainBtn").on("click", function () {
    let trainName = $("#trainNameInput").val().trim();
    let destination = $("#destinationInput").val().trim();
    let firstTrainTime = moment($("#trainTime1Input").val().trim(), "HH:mm").subtract(10, "years").format("X");
    let frequency = $("#frequencyInput").val().trim();

    let newTrain = {
        name: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency
    }
    trainData.ref().push(newTrain);

    alert("Train Added!");

    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#trainTime1Input").val("");
    $("#frequencyInput").val("");

})

trainData.ref().on("child_added", function (snapshot) {
    let name = snapshot.val().name;
    let destination = snapshot.val().destination;
    let frequency = snapshot.val().frequency;
    let firstTrainTime = snapshot.val().firstTrainTime;

    let remainder = moment().diff(moment.unix(firstTrainTime), "minuters") % frequency;
    let minutes = frequency - remainder;
    let arrival = moment().add(minutes, "m").format("hh:mm A");

    $("#trainTable > tBody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + arrival + "</td><td>" + minutes + "</td><td>");
})