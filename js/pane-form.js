$(document).ready(function(){
	// signin/signup event handling

    $('body').on('mouseenter','.signup-tab-btn',function(){
        $('.signup-tab-btn').css("background-color", "white");
        $('.signup-tab-btn').css("box-shadow", "2px 2px 3px 0 rgba(117,124,129,.12)");
    });

	$('body').on('mouseleave','.signup-tab-btn',function(){
        $('.signup-tab-btn').css("background-color", "#fafbfc");
        $('.signup-tab-btn').css("box-shadow", "none");
    });

    $('body').on('mouseenter','.signin-tab-btn',function(){
        $('.signin-tab-btn').css("background-color", "white");
        $('.signin-tab-btn').css("box-shadow", "2px 2px 3px 0 rgba(117,124,129,.12)");
    });

    $('body').on('mouseleave','.signin-tab-btn',function(){
        $('.signin-tab-btn').css("background-color", "#fafbfc");
        $('.signin-tab-btn').css("box-shadow", "none");
    }); 

    $('body').on('click', '.signin-tab-btn', function(){
    	$.ajax({
    		url: 'login-pane.php',
    		type: "GET",
            success:function(data) {
                $('.form-div').empty().html(data);
                $('.signin-tab-btn').removeClass('tab-btn-nofocus');
                $('.signin-tab-btn').addClass('tab-btn-focus');
                $('.signup-tab-btn').removeClass('tab-btn-focus');
                $('.signup-tab-btn').addClass('tab-btn-nofocus');
            }
    	});
    });


    $('body').on('click', '.signup-tab-btn', function(){
        $.ajax({
            url: 'signup-pane.php',
            type: "GET",
            success:function(data) {
                $('.form-div').empty().html(data);
                $('.signup-tab-btn').removeClass('tab-btn-nofocus');
                $('.signup-tab-btn').addClass('tab-btn-focus');
                $('.signin-tab-btn').removeClass('tab-btn-focus');
                $('.signin-tab-btn').addClass('tab-btn-nofocus');
            }
        });
    });

});