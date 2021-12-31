$(document).ready(function(){
    $("#loginButton").on("click", function(){
        var modal = $("#loginModal").modal();

        modal.modal('open');
    });

    $("#reserveButton").on("click", function(){
        var modal2 = $("#reserveModal").modal();

        modal2.modal('open');
  });
});