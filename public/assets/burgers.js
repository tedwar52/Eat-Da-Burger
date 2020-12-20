$(function() {
    $(".deleteburger").on("click", function(event) {
        var id = $(this).data("id");
        var eat = $(this).data("NewEat");

        //DELETE
        var eat = {
            devoured: eat
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eat
        }).then(
            function() {
                console.log("changed to", eat);
                location.reload();
            }
        );

        /*
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted id ", id);
                //Reload pg for updated list of burgers
                location.reload();
            }
        );
        */
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
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

//===============PSEUDO CODE==========================
/*
For some reason, my functions aren't working...

On this page...

When a user hits the "devour" button, the selected burger should dissappear from the list.

When a user hits the "Submit" button, the added burger should display on the list.

*/