	$( document ).ready(function() {

		$(".shop").bind("click",function(){
			
			if($(this).hasClass("open")){
			
				$(this).removeClass("open");
			
			
			} else {
				$(this).addClass("open");
			}
			
			
		});


	});
	