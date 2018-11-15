$(function () {

    $.get("/api/all", function (data) {
        if (data.length !== 0) {
            for (var i = 0; i < data.length; i++) {
              var row = $("<div>");
              row.addClass("chirp");
              row.append("<p>" + data[i].name + " chirped.. </p>");
              row.append("<p>" + data[i].chirp + "</p>");
              row.append("<p>At " + moment(data[i].timeStamp).format("YYYY-MM-DD HH:mm:ss") + "</p>");
              $("#chirps").prepend(row);
            };
        };
    });

    $("#submit").on("click", function (event) {
        event.preventDefault();

        var newChirp = {
            name: $("#name").val().trim(),
            chirp: $("#chirp").val().trim(),
            timeStamp: moment().format("YYYY-MM-DD HH:mm:ss")
        }

        $.post("/api/new", newChirp).then(function() {
            var row = $("<div>")
            row.addClass("chirp")
            row.append("<p>" + newChirp.name + " chirped: </p>");
            row.append("<p>" + newChirp.chirp + "</p>");
            row.append("<p>At " + moment(newChirp.timeStamp).format("YYYY-MM-DD HH:mm:ss") + "</p>");
            $("#chirps").prepend(row);
            $("#name").val("");
            $("#chirp").val("");
        });
    });
});