$(document).ready(function(){

    $("#themeToggle").click(function(){

        $("body").toggleClass("dark-mode");

        if($("body").hasClass("dark-mode")){
            $(this).text("☀");
        }else{
            $(this).text("☾");
        }

    });


    $(".filter-btn").click(function(){

        let filter = $(this).data("filter");

        $(".filter-btn").removeClass("active-filter");
        $(this).addClass("active-filter");

        if(filter === "all"){

            $(".project-card").fadeIn(250);

        }else{

            $(".project-card").each(function(){

                if($(this).data("category") === filter){
                    $(this).fadeIn(250);
                }else{
                    $(this).fadeOut(150);
                }

            });

        }

    });


    $("#contactForm").submit(function(event){

        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let message = $("#message").val().trim();

        $("#nameError").text("");
        $("#emailError").text("");
        $("#messageError").text("");
        $("#successMessage").text("");

        let valid = true;

        if(name === ""){
            $("#nameError").text("Please enter your name.");
            valid = false;
        }

        if(email === ""){
            $("#emailError").text("Please enter your email.");
            valid = false;
        }else if(!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)){
            $("#emailError").text("Please enter a valid email.");
            valid = false;
        }

        if(message === ""){
            $("#messageError").text("Please enter your message.");
            valid = false;
        }

        if(valid){

            $("#successMessage").text("Message submitted successfully!");

            $("#contactForm")[0].reset();

        }

    });

});