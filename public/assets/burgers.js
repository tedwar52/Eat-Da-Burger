$(function() {
    $(".deleteburger").on("click", function(event) {
        var id = $(this).data("id");

        //DELETE
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted id ", id);
                //Reload pg for updated list of burgers
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
        };

        //POST
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger!");
                location.reload();
            }
        );
    });
})