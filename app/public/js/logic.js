$(function () {

    $.get("/api/all", function (data) {
        if (data.length !== 0) {
            for (var i = 0; i < data.length; i++) {
              var row = $("<div>");
              row.addClass("chirp");
              row.append("<p>" + data[i].author + " chirped.. </p>");
              row.append("<p>" + data[i].body + "</p>");
              row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
              $("#chirps").prepend(row);
            };
        };
    });

    $("#submit").on("click", function (event) {
        event.preventdefault();

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
            row.append("<p>At " + moment(newChirp.timeStamp).format("h:mma on dddd") + "</p>");
            $("#chirps").prepend(row);
            $("#name").val("");
            $("#chirp").val("");
        });
    });
});