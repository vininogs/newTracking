    $(".step").click( function() {
        $(this).addClass("active").prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
    });
    
    $(".step01").click( function() {
        $("#line-progress").css("width", "3%");
        $(".discovery").addClass("active").siblings().removeClass("active");
    });
    
    $(".step02").click( function() {
        $("#line-progress").css("width", "25%");
        $(".strategy").addClass("active").siblings().removeClass("active");
    });
    
    $(".step03").click( function() {
        $("#line-progress").css("width","50%");
        $(".creative").addClass("active").siblings().removeClass("active");
    });
    
    $(".step04").click( function() {
        $("#line-progress").css("width", "75%");
        $(".production").addClass("active").siblings().removeClass("active");
    });
    
    $(".step05").click( function() {
        $("#line-progress").css("width", "100%");
        $(".analysis").addClass("active").siblings().removeClass("active");
    });
    

    //table

    $(document).ready(function () {
        $('#dtHorizontalExample').DataTable({
          "scrollX": true
        });
        $('.dataTables_length').addClass('bs-select');
      });